"use client";

import { Input, Kbd } from "@nextui-org/react";
import { SearchIcon } from "../icons";

const SearchBar = () => {

    return (
        <Input
            type="search"

            placeholder={"Search..."}
            startContent={<SearchIcon size={18} />}
            endContent={
                <Kbd keys={["command"]}>K</Kbd>
            }
        />
    )

}

export default SearchBar;