import { Button } from "@nextui-org/button"
import ThemeToggle from "../theme-toggle";
import SearchBar from "./search-bar";
import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";

type Props = {

    dealerID: string

}

const Navbar = async (props: Props) => {

    return (
        <nav className="bg-foreground dark:bg-content1 grid grid-cols-3 px-5">
            <div className="flex items-center">
                <Link href={`/dealer/${props.dealerID}`} className="flex items-center justify-start text-background dark:text-foreground">
                    <Button variant="light">
                        <h1 className="text-xl font-semibold">LOGO</h1>
                        <p className="text-default-400 ml-2">NJ Title Buddy</p>
                        <p>{}</p>
                    </Button>
                </Link>
            </div>

            <div className="flex items-center justify-center">
                <SearchBar />
            </div>

            <div className="flex items-center justify-end">

                <ThemeToggle />

                <Button variant="light" className="flex justify-between px-3 py-2 ml-5">

                    <div className="text-left mr-2 text-background dark:text-foreground">
                        <h1 className="font-medium text-medium">John Doe</h1>
                        <p className="font-medium text-sm text-default-400">Dealership Name</p>
                    </div>

                    <Avatar />

                </Button>

            </div>

        </nav>
    );

}

export default Navbar;