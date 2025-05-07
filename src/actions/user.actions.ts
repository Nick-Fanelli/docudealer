"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/db";

import { User } from "@prisma/client"

export const getSessionUser = async () : Promise<User> => {

    const session = await auth();

    if(!session) {
        throw new Error("No active session. Unauthorized!");
    }

    if(!session.user) {
        throw new Error("No active user. Unauthorized!");
    }

    if(!session.user.email) {
        throw new Error("No email assigned in user object. Possibly corrupt user. Access Denied!");
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user.email }
    });

    if(!user) {
        throw new Error("User not found! Unauthorized!");
    }

    return user;

}