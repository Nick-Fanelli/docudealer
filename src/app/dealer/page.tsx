import UserButton from "@/components/dealer/user-button"
import { Button } from "@nextui-org/button"
import { Image } from "@nextui-org/image"
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card"
import Link from "next/link"
import ThemeToggle from "@/components/theme-toggle"
import { Divider } from "@nextui-org/divider"

type DealershipCardProps = {

    dealershipName: string
    dealershipID: string

}

const DealershipCard = (props: DealershipCardProps) => {
    return (
        <Link href={`/dealer/${props.dealershipID}`}>
            <Button className="h-auto w-full p-0 m-0 bg-content1 border-none shadow-2xl">
                <Card className="w-full h-full bg-transparent">
                    <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
                        <h1 className="font-bold text-large">Example Dealership</h1>
                        <div className="flex items-center mt-2">
                            <div className="w-[5px] h-[5px] bg-green-500 rounded-full mr-2"></div>
                            <p className="text-sm text-default-500">Online</p>
                        </div>
                    </CardHeader>
                    <CardBody className="px-4 py-3">

                    </CardBody>

                    <div className="flex px-2">
                        <Divider className=""/>
                    </div>

                    <CardFooter>

                    </CardFooter>

                </Card>
            </Button>
        </Link>
    )
}

const DealerPage = () => {

    return (
        <div className="grid w-screen h-screen overflow-hidden grid-rows-[60px_1fr] grid-cols-1">
            <nav className="bg-foreground dark:bg-content1 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href={`/dealer`} className="flex items-center justify-start text-background dark:text-foreground">
                        <Button variant="light">
                            <h1 className="text-xl font-semibold text-background dark:text-foreground">LOGO</h1>
                            <p className="text-default-400 ml-2">NJ Title Buddy</p>
                            <p>{}</p>
                        </Button>
                    </Link>
                </div>
                <div className="flex">
                    <ThemeToggle />
                    <UserButton />
                </div>
            </nav>

            <div className="p-8">
                <div className="grid grid-cols-4 gap-10">
                    <DealershipCard dealershipName="Example Dealership" dealershipID="example" />
                </div>

            </div>

        </div>

    )

}

export default DealerPage;