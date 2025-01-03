import { User } from "@nextui-org/user"
import ThemeToggle from "../theme-toggle";
import SearchBar from "./search-bar";

const Navbar = () => {

    return (
        <nav className="bg-foreground dark:bg-content1 grid grid-cols-3 px-5">

            <div className="flex items-center justify-start">
                <h1 className="text-xl font-semibold text-background dark:text-foreground">LOGO</h1>
                <p className="text-default-400 ml-2">NJ Title Buddy</p>
            </div>

            <div className="flex items-center justify-center">
                <SearchBar />
            </div>

            <div className="flex items-center justify-end">
                <ThemeToggle />
                <User
                    avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    }}
                    description="Dealership Name"
                    name="Jane Doe"
                />
            </div>

        </nav>
    );

}

export default Navbar;