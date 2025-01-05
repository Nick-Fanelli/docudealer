import { Button } from "@nextui-org/button"
import ThemeToggle from "../theme-toggle";
import SearchBar from "./search-bar";
import { Avatar } from "@nextui-org/avatar";

const Navbar = async () => {

    return (
        <nav className="bg-foreground dark:bg-content1 grid grid-cols-3 px-5">

            <div className="flex items-center justify-start">
                <h1 className="text-xl font-semibold text-background dark:text-foreground">LOGO</h1>
                <p className="text-default-400 ml-2">NJ Title Buddy</p>
                <p>{}</p>
            </div>

            <div className="flex items-center justify-center">
                <SearchBar />
            </div>

            <div className="flex items-center justify-end">

                <ThemeToggle />

                <Button variant="light" className="flex justify-between px-3 py-2 ml-5">

                    <div className="text-left mr-2">
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