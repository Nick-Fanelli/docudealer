"use client";

import { ChevronRightIcon, HomeIcon, TitleIcon, TransactionIcon } from "../icons";
import { useState } from "react";
import IconWrapper from "../icon-wrapper";
import { Listbox, ListboxItem } from "@nextui-org/listbox";

const ItemCounter = ({ number }: { number: number | null }) => (
    <div className="flex items-center gap-1 text-default-400">
        { number && <span className="text-small">{number}</span> }
        <ChevronRightIcon className="text-xl" />
    </div>
);

const Sidebar = () => {

    const [selected, setSelected] = useState<Set<string>>(new Set<string>("home"));

    return (
        <div id="sidebar" className="bg-content2 pt-2 px-2">

            <Listbox
                aria-label="Sidebar Navigation"

                selectedKeys={selected}
                onSelectionChange={(selection) => {

                    if (selection === 'all' || (selection as Set<any>).size <= 0)
                        setSelected(new Set<string>());
                    else
                        setSelected(selection as Set<string>);

                }}

                selectionMode="single"
                selectionBehavior="replace"
                onAction={() => { }}
            >

                <ListboxItem key="home" textValue="Home" endContent={<ItemCounter number={null} />}>
                    <div className="flex items-center">
                        <IconWrapper className="bg-default-400/50 text-foreground">
                            <HomeIcon />
                        </IconWrapper>
                        <p className="ml-2 text-sm">Home</p>
                    </div>
                </ListboxItem>

                <ListboxItem key="transaction" textValue="Transactions" endContent={<ItemCounter number={237} />}>
                    <div className="flex items-center">
                        <IconWrapper className="bg-red-400/50 text-foreground">
                            <TransactionIcon />
                        </IconWrapper>
                        <p className="ml-2 text-sm">Transactions</p>
                    </div>
                </ListboxItem>

                <ListboxItem key="titles" textValue="Titles" endContent={<ItemCounter number={10} />}>
                    <div className="flex items-center">
                        <IconWrapper className="bg-blue-400/50 text-foreground">
                            <TitleIcon />
                        </IconWrapper>
                        <p className="ml-2 text-sm">Titles</p>
                    </div>
                </ListboxItem>

            </Listbox>

        </div>
    )

}

export default Sidebar;