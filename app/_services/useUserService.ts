import { create } from 'zustand';
import { useRouter, useSearchParams } from 'next/navigation';

import { useAlertService } from '@/app/_services';
import { useFetch } from '@/app/_hooks';

export { useUserService };

// user state store
const initialState = {
    users: undefined,
    user: undefined,
    currentUser: undefined
};
const userStore = create<IUserStore>(() => initialState);

function useUserService(): IUserService {
    const alertService = useAlertService();
    const fetch = useFetch();
    const router = useRouter();
    const searchParams = useSearchParams();
    const { users, user, currentUser } = userStore();

    return {
        users,
        user,
        currentUser,
        login: async (email, password) => {
            alertService.clear();
            try {
                const currentUser = await fetch.post('/api/auth/login', { email, password });
                userStore.setState({ ...initialState, currentUser });

                // get return url from query parameters or default to '/'
                const returnUrl = searchParams.get('returnUrl') || '/dashboard';
                router.push(returnUrl);
            } catch (error: any) {
                alertService.error(error.message);
            }
        },
        logout: async () => {
            await fetch.post('/api/auth/logout');
            router.push('/login');
        },
        register: async (user) => {
            console.log({register_user: user})
            try {
                await fetch.post('/api/auth/register', user);
                alertService.success('Registration successful', true);
                router.push('/login');
            } catch (error: any) {
                alertService.error(error.message);
            }
        },
        getAll: async () => {
            userStore.setState({ users: await fetch.get('/api/users') });
        },
        getById: async (id) => {
            userStore.setState({ user: undefined });
            try {
                userStore.setState({ user: await fetch.get(`/api/users/${id}`) });
            } catch (error: any) {
                alertService.error(error.message);
            }
        },
        getCurrent: async () => {
            if (!currentUser) {
                const currentUser = await fetch.get('/api/users/current');
                console.log({ currentUser });
                userStore.setState({ currentUser });
            }
        },
        create: async (user) => {
            await fetch.post('/api/users', user);
        },
        update: async (id, params) => {
            await fetch.put(`/api/users/${id}`, params);

            // update current user if the user updated their own record
            if (id === currentUser?._id) {
                userStore.setState({ currentUser: { ...currentUser, ...params } })
            }
        },
        delete: async (id) => {
            // set isDeleting prop to true on user
            userStore.setState({
                users: users!.map(x => {
                    if (x._id === id) { x.isDeleting = true; }
                    return x;
                })
            });

            // delete user
            const response = await fetch.delete(`/api/users/${id}`);

            // remove deleted user from state
            userStore.setState({ users: users!.filter(x => x._id !== id) });

            // logout if the user deleted their own record
            if (response.deletedSelf) {
                router.push('/account/login');
            }
        }
    }
};

// interfaces

