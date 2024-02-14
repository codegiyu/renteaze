"use client";

import { useUserService } from "@/app/_services";
import { useEffect } from "react";

const LoggedInUser: React.FC = () => {
    const userService = useUserService();
    const { currentUser, getCurrent } = userService;

    useEffect(() => {
        console.log({ currentUser });
    }, [currentUser])

    useEffect(() => {
        getCurrent();
    }, [])

    return (
        <>
        </>
    )
}

export default LoggedInUser;