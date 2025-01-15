import { Button } from "@nextui-org/button"
import ThemeToggle from "../theme-toggle";
import SearchBar from "./search-bar";
import Link from "next/link";
import UserButton from "./user-button";

type Props = {

    dealerID: string

}

const Navbar = async (props: Props) => {

    return (
        <nav className="bg-foreground dark:bg-content1 grid grid-cols-[30%_1fr_30%]">
            <div className="flex items-center">
                <Link href={`/dealer`} className="flex items-center justify-start text-background dark:text-foreground">
                    <Button variant="light">
                        <h1 className="text-xl font-semibold text-background dark:text-foreground">LOGO</h1>
                        <p className="text-default-400 ml-2">Dealership Name</p>
                        <p>{}</p>
                    </Button>
                </Link>
            </div>

            <div className="flex items-center justify-center">
                <SearchBar />
            </div>

            <div className="flex items-center justify-end">

                <ThemeToggle />
                <UserButton />

            </div>

        </nav>
    );

}

export default Navbar;