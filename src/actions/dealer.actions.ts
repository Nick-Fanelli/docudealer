"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { getSessionUser } from "./user.actions";
import { Dealership } from "@prisma/client";

export const createDealership = async (dealershipName: string, licenseNumber: string, stateLicensed: string, zipCode: string) : Promise<Dealership> => {

    const user = await getSessionUser();

    if(!stateLicensed.match(/[A-Za-z]{2}/) || !zipCode.match(/[0-9]{5}/)) {
        throw new Error("Invalid arguments");
    }

    const dealershipObject = await prisma.dealership.create({

        data: {

            name: dealershipName.trim(),
            licenseNumber: licenseNumber.trim().toUpperCase(),
            stateLicensed: stateLicensed.trim().toUpperCase(),
            zipCode: zipCode.trim(),

            owner: { connect: { id: user.id } }

        }
        
    });

    return dealershipObject;

}