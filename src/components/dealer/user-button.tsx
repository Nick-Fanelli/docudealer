"use client";

import { signOutAndRedirectHome } from "@/actions/auth.actions";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { useSession } from "next-auth/react";

const UserButton = () => {

    const session = useSession();

    if(!session.data || !session.data.user)
        return null;

    return (
        <Dropdown placement="bottom-start">
            <DropdownTrigger>
                <Button variant="light" className="flex justify-between px-3 py-2">

                    <div className="text-left mr-2 text-background dark:text-foreground">
                        <h1 className="text-sm">{session.data.user.name}</h1>
                    </div>

                    <Avatar />

                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="logout" color="danger" onPress={signOutAndRedirectHome}>
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )

}

export default UserButton; 