import { StateCreator } from "zustand";
import { getDoc, setDoc, doc, serverTimestamp, FieldValue } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { auth, googleProvider } from "../../firebase/firebase";
import { ActionCodeSettings, User, UserCredential, applyActionCode, confirmPasswordReset, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { toast } from "react-toastify";

const actionCodeSettings: ActionCodeSettings = {
    url: "http://localhost:5173/login",
    handleCodeInApp: true,
}

const createAuthSlice: StateCreator<AuthSlice> = (set, get) => ({
    user: null,
    isLoggedIn: false,
    token: "",
    emailIsVerified: null,
    isLoading: false,
    loginUser: async (obj) => {
        try {
            if (get().isLoading) return null;
            set({ isLoading: true })

            // Use firebase auth to check if email and password are correct and get user auth data
            const data = await signInWithEmailAndPassword(auth, obj.email, obj.password)
            console.log(data)
            const user: User = data.user

            // Use user id from auth data to retrieve their data from the users collection
            const patientDocRef = doc(db, "dev_env/main/patients", user.uid);
            const consultantDocRef = doc(db, "dev_env/main/consultants", user.uid);
            const patientDocSnap = await getDoc(patientDocRef);
            const consultantDocSnap = await getDoc(consultantDocRef);


            if (patientDocSnap.exists()) {
                const userObj = patientDocSnap.data();

                const thisUser: Patient = {
                    first_name: userObj.first_name,
                    last_name: userObj.last_name,
                    email: userObj.email,
                    userid: userObj.userid,
                    phone_number: userObj.phone_number,
                    photo: userObj.photo,
                    role: userObj.role,
                    medical_info: userObj.medical_info,
                    created_at: userObj.created_at,
                    modified_at: userObj.modified_at
                }

                console.log("User data:", userObj);
                set({ user: thisUser, token: await data.user.getIdToken() });
            } else if (consultantDocSnap.exists()) {
                const userObj = consultantDocSnap.data();

                const thisUser: Consultant = {
                    first_name: userObj.first_name,
                    last_name: userObj.last_name,
                    email: userObj.email,
                    userid: userObj.userid,
                    phone_number: userObj.phone_number,
                    photo: userObj.photo,
                    role: userObj.role,
                    specialty: userObj.specialty,
                    professional_membership: userObj.professional_membership,
                    special_interests: userObj.special_interests,
                    languages: userObj.languages,
                    profile: userObj.profile,
                    created_at: userObj.created_at,
                    modified_at: userObj.modified_at
                }

                console.log("User data:", userObj);
                set({ user: thisUser, isLoggedIn: true, token: await data.user.getIdToken() });
            } else {
                console.log("No such user!");
                toast.error("User does not exist");
                return null;
            }

            if (user.emailVerified) {
                set({ emailIsVerified: true });
                return true;
            } else {
                set({ emailIsVerified: false });
                await get().sendVerificationEmail();
                return false;
            }
        } catch (err: any) {
            console.error(err)
            toast.error(err.message)
            return null
        } finally {
            set({ isLoading: false })
        }
    },
    registerUser: async (obj, userType) => {
        try {
            if (get().isLoading === true) return false;
            set({ isLoading: true })

            // Create user in firebase auth
            const data: UserCredential = await createUserWithEmailAndPassword(auth, obj.email, obj.password)
            console.log(data)
            const user: User = data.user;

            const patientDocRef = doc(db, "dev_env/main/patients", user.uid);
            const consultantDocRef = doc(db, "dev_env/main/consultants", user.uid);

            // Create data for user in their respective collection 
            if (userType === "patients") {
                const userObj: Patient<FieldValue> = {
                    first_name: obj.first_name,
                    last_name: obj.last_name,
                    email: obj.email,
                    userid: user.uid,
                    phone_number: "",
                    photo: "",
                    role: "patient",
                    medical_info: null,
                    created_at: serverTimestamp(),
                    modified_at: null
                }
                await setDoc(patientDocRef, userObj)
            } else {
                const userObj: Consultant<FieldValue> = {
                    first_name: obj.first_name,
                    last_name: obj.last_name,
                    email: obj.email,
                    userid: user.uid,
                    phone_number: "",
                    photo: "",
                    role: "consultant",
                    specialty: "",
                    professional_membership: null,
                    special_interests: [],
                    languages: [],
                    profile: "",
                    created_at: serverTimestamp(),
                    modified_at: null
                }
                await setDoc(consultantDocRef, userObj)
            }

            console.log(`User with id ${user.uid} created`);
            toast.success("Registered successfully");

            const res = await get().sendVerificationEmail();
            return res;
        } catch (err: any) {
            console.error(err);
            toast.error(err.message);
            return false;
        } finally {
            set({ isLoading: false })
        }
    },
    googleSignIn: async (userType) => {
        try {
            if (get().isLoading === true) return false;
            set({ isLoading: true });

            const data: UserCredential = await signInWithPopup(auth, googleProvider);
            const user: User = data.user;

            const patientDocRef = doc(db, "dev_env/main/patients", user.uid);
            const consultantDocRef = doc(db, "dev_env/main/consultants", user.uid);
            const patientDocSnap = await getDoc(patientDocRef);
            const consultantDocSnap = await getDoc(consultantDocRef);

            if (patientDocSnap.exists()) {
                const userObj = patientDocSnap.data();

                const thisUser: Patient = {
                    first_name: userObj.first_name,
                    last_name: userObj.last_name,
                    email: userObj.email,
                    userid: userObj.userid,
                    phone_number: userObj.phone_number,
                    photo: userObj.photo,
                    role: userObj.role,
                    medical_info: userObj.medical_info,
                    created_at: userObj.created_at,
                    modified_at: userObj.modified_at
                }

                console.log("User data:", userObj);
                set({ user: thisUser, isLoggedIn: true, token: await data.user.getIdToken() });
            } else if (consultantDocSnap.exists()) {
                const userObj = consultantDocSnap.data();

                const thisUser: Consultant = {
                    first_name: userObj.first_name,
                    last_name: userObj.last_name,
                    email: userObj.email,
                    userid: userObj.userid,
                    phone_number: userObj.phone_number,
                    photo: userObj.photo,
                    role: userObj.role,
                    specialty: userObj.specialty,
                    professional_membership: userObj.professional_membership,
                    special_interests: userObj.special_interests,
                    languages: userObj.languages,
                    profile: userObj.profile,
                    created_at: userObj.created_at,
                    modified_at: userObj.modified_at
                }

                console.log("User data:", userObj);
                set({ user: thisUser, isLoggedIn: true, token: await data.user.getIdToken() });
            } else {
                console.log("user: ", user);
                if (userType === "consultants") {
                    const userObj: Consultant<FieldValue> = {
                        first_name: user.displayName?.split(" ")[0] || "",
                        last_name: user.displayName?.split(" ")?.slice(1).join(" ") || "",
                        email: user.email || "",
                        userid: user.uid,
                        phone_number: user.phoneNumber || "",
                        photo: user.photoURL || "",
                        role: "consultant",
                        specialty: "",
                        professional_membership: null,
                        special_interests: [],
                        languages: [],
                        profile: "",
                        created_at: user.metadata.creationTime || null,
                        modified_at: null
                    }
                    await setDoc(consultantDocRef, userObj)

                    set({ user: userObj, isLoggedIn: true, token: await user.getIdToken() });
                    toast.success("Signed up successfully")
                } else {
                    const userObj: Patient<FieldValue> = {
                        first_name: user.displayName?.split(" ")[0] || "",
                        last_name: user.displayName?.split(" ")?.slice(1).join(" ") || "",
                        email: user.email || "",
                        userid: user.uid,
                        phone_number: user.phoneNumber || "",
                        photo: user.photoURL || "",
                        role: "patient",
                        medical_info: null,
                        created_at: user.metadata.creationTime || null,
                        modified_at: null
                    }
                    await setDoc(patientDocRef, userObj);

                    set({ user: userObj, isLoggedIn: true, token: await user.getIdToken() });
                    toast.success("Signed up successfully")
                }
            }

            set({ emailIsVerified: user.emailVerified });
            return true;
        } catch (err: any) {
            console.error(err)
            toast.error(err.message)
            return false;
        } finally {
            set({ isLoading: false })
        }
    },
    sendVerificationEmail: async () => {
        try {
            if (get().isLoading === true) return false;
            set({ isLoading: true });

            const user = auth.currentUser;

            if (user) {
                await sendEmailVerification(user, actionCodeSettings);
                return true;
            }
            return false;
        } catch (err: any) {
            console.error(err)
            toast.error(err.message)
            return false;
        } finally {
            set({ isLoading: false });
        }
    },
    completeEmailVerification: async (code) => {
        try {
            if (get().isLoading === true) return false;
            set({ isLoading: true });

            await applyActionCode(auth, code);
            return true;
        } catch (err: any) {
            console.error(err)
            // toast.error(err.message)
            return false;
        } finally {
            set({ isLoading: false });
        }
    },
    sendPasswordResetEmail: async (email) => {
        try {
            if (get().isLoading === true) return false;
            set({ isLoading: true });

            await sendPasswordResetEmail(auth, email, actionCodeSettings);
            return true;
        } catch (err: any) {
            console.error(err)
            toast.error(err.message)
            return false;
        } finally {
            set({ isLoading: false });
        }
    },
    completePasswordReset: async (obj) => {
        try {
            if (get().isLoading === true) return false;
            set({ isLoading: true });

            await confirmPasswordReset(auth, obj.code, obj.new_password);
            return true;
        } catch (err: any) {
            console.error(err)
            toast.error(err.message)
            return false;
        } finally {
            set({ isLoading: false });
        }
    },
    logoutUser: async () => {
        try {
            if (get().isLoading === true) return false;
            set({ isLoading: true });
            
            await signOut(auth)

            set({ user: null, isLoggedIn: false, token: "" })
            toast.success("Logged out successfully")
            return true;
        } catch (err: any) {
            console.error(err)
            toast.error(err.message)
            return false;
        } finally {
            set({ isLoading: false })
        }
    },
})

export default createAuthSlice;