"use server";

import { signOut } from "@/auth";
import { revalidatePath } from "next/cache";

export const signOutAndRedirectHome = async () => {

    await signOut({ redirectTo: "/" });
    revalidatePath("/");

}