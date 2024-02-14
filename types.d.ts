// Global State types

import { StaticImageData } from "next/image";

export {};

declare global {
    // GLobal State Types
    interface AuthSlice {

    }

    type AppStoreState = AuthSlice


    interface HeroProps {
        imageSrc?: string;
        text?: string;
        overlayOpacity?: string;  // value between "00" and "ff"
    }

    interface PageIntroProps {
        heading: string;
        text: string;
    }

    interface ImageTextFlexProps {
        image: string|StaticImageData;
        imageAlt?: string;
        text: string;
        reversed?: boolean;
    }

    type PropertyGrade = "PREMIUM" | "STANDARD" | "CLASSIC";
    type AcquisitionType = "RENT" | "SALE";
    type PropertyCondition = "NEW";
    interface PropertyFeatures {
        bed: number;
        toilet: number;
        car: number;
        meter: boolean;
        pets: boolean;
        goodRoads: boolean;
    }

    interface PropertyListSingle {
        id: string;
        grade: PropertyGrade;
        acquisitionType: AcquisitionType;
        image: string | StaticImageData;
        price: number;
        name: string;
        rating: number;
        intro: string;
        features: PropertyFeatures;
        condition: PropertyCondition;
    }

    interface PropertyBadgeProps {
        color?: "blue" | "red";
        text: string;
    }

    interface RatingStarsGroupProps {
        color?: string;
        rating: number;
    }

    interface Utils {
        getStarArr: (rating: number) => [number, number, number, number, number];
    }


    // Services Types and Interfaces
    interface INewUser {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        phone: string,
        role: "Agent" | "Developer" | "Landlord" | "User"
    }
    
    interface IUser extends INewUser {
        _id: string,
        isDeleting?: boolean
    }
    
    interface IUserStore {
        users?: IUser[],
        user?: IUser,
        currentUser?: IUser
    }
    
    interface IUserService extends IUserStore {
        login: (email: string, password: string) => Promise<void>,
        logout: () => Promise<void>,
        register: (user: INewUser) => Promise<void>,
        getAll: () => Promise<void>,
        getById: (id: string) => Promise<void>,
        getCurrent: () => Promise<void>,
        create: (user: INewUser) => Promise<void>,
        update: (id: string, params: Partial<INewUser>) => Promise<void>,
        delete: (id: string) => Promise<void>
    }
}
// COMPONENT PROP TYPES