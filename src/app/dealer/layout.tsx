// TODO: Metadata

import UserButton from "@/components/dealer/user-button"
import ThemeToggle from "@/components/theme-toggle"
import { Button } from "@nextui-org/button"
import Link from "next/link"

const DealerPageLayout = ({ children } : { children: React.ReactNode }) => {

    return (
        <div className="grid w-screen h-screen overflow-hidden grid-rows-[60px_1fr] grid-cols-1">
            <nav className="bg-foreground dark:bg-content1 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href={`/dealer`} className="flex items-center justify-start text-background dark:text-foreground">
                        <Button variant="light">
                            <h1 className="text-xl font-semibold text-background dark:text-foreground">LOGO</h1>
                            <p className="text-default-400 ml-2">NJ Title Buddy</p>
                            <p>{ }</p>
                        </Button>
                    </Link>
                </div>
                <div className="flex">
                    <ThemeToggle />
                    <UserButton />
                </div>
            </nav>

            <div className="overflow-hidden bg-content3 dark:bg-background">
                {children}
            </div>

        </div>
    )

}

export default DealerPageLayout;