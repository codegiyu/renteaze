// Global State types

interface CurrentMedications {
    medication_name: string;
    medication_purpose?: string;
}

interface PatientMedicalInfo {
    height: number | null;
    wieght: number | null;
    gender: "male" | "female" | "others";
    allergies: string[];
    smoking_status: boolean;
    existing_medical_conditions: string[];
    current_medications: CurrentMedications[];
}

interface ProfessionalMembership {
    professional_community: string;
    membership_id: string;
}

interface SharedUserInfo<T> {
    first_name: string;
    last_name: string;
    email: string;
    userid: string;
    phone_number?: string;
    photo?: string;
    role: "patient" | "admin" | "consultant";
    created_at: null | string | T;
    modified_at: null | string | T;
}

interface Patient<T = string> extends SharedUserInfo<T> {
    medical_info: PatientMedicalInfo | null;
}

interface Consultant<T = string> extends SharedUserInfo<T> {
    specialty: string;
    professional_membership: ProfessionalMembership | null;
    special_interests: string[];
    languages: string[];
    profile: string;
}

interface ForgotPasswordObj {
    email: string;
}

interface LoginObj extends ForgotPasswordObj {
    password: string;
}

interface RegisterObj extends LoginObj {
    first_name: string;
    last_name: string;
}

interface ResetPasswordObj {
    password: string;
    confirm_password: string;
}

interface CompletePasswordReset {
    code: string;
    new_password: string;
}

interface AuthSlice {
    user: null | Patient<T> | Consultant<T>;
    isLoggedIn: boolean;
    emailIsVerified: null | boolean;
    token: string;
    isLoading: boolean;
    loginUser: (obj: LoginObj) => Promise<boolean|null>;
    sendVerificationEmail: () => Promise<boolean>;
    completeEmailVerification: (code: string) => Promise<boolean>;
    sendPasswordResetEmail: (email: string) => Promise<boolean>;
    completePasswordReset: (obj: CompletePasswordReset) => Promise<boolean>;
    registerUser: (obj: RegisterObj, userType: "patients"|"consultants") => Promise<boolean>;
    googleSignIn: (userType: null | "patients"|"consultants") => Promise<boolean>;
    logoutUser: () => Promise<boolean>;
}

type AppStoreState = AuthSlice;

interface SignUpComponent {
    userType: "patients"|"consultants";
}

// COMPONENT PROP TYPES