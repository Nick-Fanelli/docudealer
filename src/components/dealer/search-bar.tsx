"use client";

import { Input } from "@nextui-org/input";
import { SearchIcon } from "../icons";
import { Kbd } from "@nextui-org/kbd";

const SearchBar = () => {

    return (
        <Input
            type="search"

            placeholder={"Search..."}
            startContent={<SearchIcon size={18} />}
            endContent={
                <Kbd keys={["command"]} className="pointer-events-none">K</Kbd>
            }
        />
    )

}

export default SearchBar;