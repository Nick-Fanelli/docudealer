import UserButton from "@/components/dealer/user-button"
import { Button } from "@nextui-org/button"
import { Image } from "@nextui-org/image"
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card"
import Link from "next/link"
import ThemeToggle from "@/components/theme-toggle"
import { Divider } from "@nextui-org/divider"
import { PlusIcon } from "@/components/icons"

type DealershipCardProps = {

    dealershipName: string
    dealershipID: string

}

const DealershipCard = (props: DealershipCardProps) => {
    return (
        <Link href={`/dealer/${props.dealershipID}`}>
            <Button variant="light" className="h-[140px] w-[350px] p-0 m-0 shadow-sm dark:shadow-2xl">
                <Card className="w-full h-full bg-content1 rounded-none hover:bg-content2">
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
                        <Divider className="" />
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
        <div className="overflow-y-scroll h-full w-full p-10">
            <div className="flex flex-wrap gap-10">
                <DealershipCard dealershipName="Example Dealership" dealershipID="example" />
                <DealershipCard dealershipName="Example Dealership" dealershipID="example" />
                <DealershipCard dealershipName="Example Dealership" dealershipID="example" />


                <Link href={`/dealer/new`}>
                    <Button variant="light" className="h-[140px] w-[350px] p-0 m-0">
                        <Card className="w-full h-full bg-content1 rounded-none hover:bg-content2">
                            <CardBody className="px-4 py-3 flex items-center justify-center">
                                <div className="flex flex-col items-center">
                                    <PlusIcon size={48} />
                                    <p className="text-medium">Create Dealership</p>
                                </div>
                            </CardBody>
                        </Card>
                    </Button>
                </Link>

            </div>
        </div>
    )

}

export default DealerPage;