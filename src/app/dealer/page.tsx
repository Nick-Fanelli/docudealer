import { Button } from "@nextui-org/button"
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card"
import Link from "next/link"
import { Divider } from "@nextui-org/divider"
import { CrownIcon, PlusIcon } from "@/components/icons"
import { getUserPreviewOfEngagedDealerships } from "@/actions/user.actions"

type DealershipCardProps = {

    id: string
    dealershipName: string
    licenseNumber: string
    stateLicensed: string

    isOwner?: boolean

}

const DealershipCard = (props: DealershipCardProps) => {
    return (
        <Link href={`/dealer/${props.id}`}>
            <Button variant="light" className="h-[200px] w-[350px] p-0 m-0 shadow-sm dark:shadow-2xl">
                <Card className="w-full h-full bg-content1 rounded-none hover:bg-content2">
                    <CardHeader className="pb-0 pt-4 px-4 flex-col items-start grid grid-cols-[1fr_20px]">
                        <div className="w-full text-wrap text-left">
                            <h1 className="font-bold text-large">
                                {props.dealershipName} <span className="font-lgiht text-default-400">({props.stateLicensed})</span>
                            </h1>
                            <p className="text-default-400">{props.licenseNumber}</p>
                        </div>

                        {
                            props.isOwner &&
                            <CrownIcon />
                        }

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

const DealerPage = async () => {

    const dealerships = await getUserPreviewOfEngagedDealerships();

    return (
        <div className="overflow-y-scroll h-full w-full p-10" key="dealer-page">
            <div className="flex flex-wrap gap-10" key="dealer-page">

                {
                    dealerships.map(dealership => (
                        <DealershipCard id={dealership.id} dealershipName={dealership.name} licenseNumber={dealership.licenseNumber} stateLicensed={dealership.stateLicensed} isOwner />
                    ))
                    
                }

                <Link href={`/dealer/new`}>
                    <Button variant="light" className="h-[200px] w-[350px] p-0 m-0">
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