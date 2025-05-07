"use client";

import { ChevronRightIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { Form } from "@nextui-org/form";

const NewTitlePage = () => {
    return (
        <div className="flex items-center justify-center h-full w-full">

            <Form
                className="bg-content1 dark:bg-content1 max-w-[90%] w-[800px] p-10 rounded-xl shadow-md flex justify-between"
                validationBehavior="native"
                onSubmit={async (e) => {

                    e.preventDefault();

                    // await createDealership(dealershipName, licenseNumber, stateLicensed, zipCode);

                    // router.push("/dealer");

                }}
            >

                <div className="w-full">
                    <h1 className="font-medium text-2xl text-center mb-8">Create Title</h1>

                </div>

                <Button
                    type="submit"
                    className="w-full mt-5"
                    color="primary"
                >Create Title <ChevronRightIcon /></Button>

            </Form>

        </div>
    )

}

export default NewTitlePage;