import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import createAuthSlice from "./slices/createAuthSlice";

const useAppStore = create<AppStoreState>()(
    persist(
        (...a) => ({
            ...createAuthSlice(...a)
        }),
        {
            name: "appStore",
            storage: createJSONStorage(() => localStorage)
        }
    )
)

export default useAppStore