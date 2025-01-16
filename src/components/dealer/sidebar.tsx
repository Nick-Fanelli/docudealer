"use client";

import { usePathname } from "next/navigation";
import { ChevronRightIcon, HomeIcon, TitleIcon, TransactionIcon } from "../icons";
import { extrapolateLocalDealerPath } from "@/lib/dealer-utils";
import Link from "next/link";

const ItemCounter = ({ number }: { number: number | null }) => (
    <div className="flex items-center gap-1 text-default-400">
        { number && <span className="text-small">{number}</span> }
        <ChevronRightIcon className="text-xl" />
    </div>
);

type SidebarLinkProps = {

    title: string
    icon: React.ReactNode
    dealerID: string
    targetPage: string
    currentPage: string

}

const SidebarLink = (props: SidebarLinkProps) => {

    const isSelected = props.currentPage === props.targetPage;

    return (
        <Link href={`/dealer/${props.dealerID}${props.targetPage}`}>
            <li className={`w-full py-4 h-6 hover:bg-content3 cursor-pointer flex items-center justify-between rounded-md ${isSelected ? "bg-content4" : "bg-transparent"}`}>
                <div className="flex items-center pl-2">
                    {props.icon}
                    <h2 className="ml-3 text-sm">{props.title}</h2>
                </div>
            </li>
        </Link>
    );

}

type Props = {

    dealerID: string

}

const Sidebar = (props: Props) => {

    const pathname = usePathname();
    const localDealerPath = extrapolateLocalDealerPath(props.dealerID, pathname);
    const localDealerPathParts = localDealerPath.split('/');
    const currentPage = '/' + (localDealerPathParts.length >= 2 ? localDealerPathParts[1] : '');

    return (
        <div id="sidebar" className="bg-content2 pt-2 px-2 w-[275px]">

            <ul>
                <SidebarLink title={"Home"} icon={<HomeIcon />} dealerID={props.dealerID} targetPage={"/"} currentPage={currentPage} />
                <SidebarLink title={"Transactions"} icon={<TransactionIcon />} dealerID={props.dealerID} targetPage={"/transactions"} currentPage={currentPage} />
                <SidebarLink title={"Titles"} icon={<TitleIcon />}dealerID={props.dealerID}  targetPage={"/titles"} currentPage={currentPage} />
            </ul>

        </div>
    )

}

export default Sidebar;