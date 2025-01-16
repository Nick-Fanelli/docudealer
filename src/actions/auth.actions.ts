"use server";

import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";

export const signInWithGithub = async () => {

    await signIn("github");

}

export const signOutAndRedirectHome = async () => {

    await signOut({ redirectTo: "/" });
    revalidatePath("/");

}