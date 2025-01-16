"use client";

import { ChevronRightIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Divider } from "@nextui-org/divider";
import { Form } from "@nextui-org/form";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { ChangeEvent, useCallback, useRef, useState } from "react";

const convertDealershipNameToURL = (name: string) => {

    name = name.replaceAll(/[^a-zA-Z0-9 ]/g, '');
    name = name.toLowerCase();
    name = name.replaceAll(/\s+/g, '-');

    return name;

}

const NewDealershipPage = () => {

    const [dealershipURL, setDealershipURL] = useState<string>("");

    const dealershipURLRef = useRef<HTMLInputElement>(null);

    const onModifyName = useCallback((e: ChangeEvent<HTMLInputElement>) => {

        if (!dealershipURLRef.current)
            return;

        setDealershipURL(convertDealershipNameToURL(e.target.value));

    }, [dealershipURLRef.current]);

    return (
        <div className="flex items-center justify-center h-full w-full">

            <Form
                className="bg-content1 dark:bg-content1 max-w-[90%] w-[800px] p-10 rounded-xl shadow-md flex justify-between"
                validationBehavior="native"
            >

                <div className="w-full">
                    <h1 className="font-medium text-2xl text-center mb-8">Create Dealership</h1>

                    <Input
                        isRequired
                        label="Dealership Name"
                        name="dealership-name"
                        placeholder="Enter Dealership Name"
                        type="text"
                        classNames={{
                            mainWrapper: "bg-red-100",
                        }}
                        className="mb-5"
                        onChange={onModifyName}
                    />

                    <Input
                        isRequired
                        label="Dealership URL"
                        name="dealership-url"
                        placeholder=""
                        type="text"
                        classNames={{
                            mainWrapper: "bg-red-100",
                            input: "!pl-[2px]"
                        }}
                        className="mb-3 text-default-600"
                        startContent={
                            <p>@</p>
                        }
                        ref={dealershipURLRef}
                        value={dealershipURL}
                        onValueChange={setDealershipURL}


                        pattern="[0-9a-zA-Z-]+"
                        errorMessage={({ validationDetails, validationErrors }) => {
                            if (validationDetails.patternMismatch) {
                                return "Dealership URL must only contain letters, numbers and dashes."
                            }

                            return validationErrors;
                        }}
                    />

                    <div className="flex gap-3">
                        <Input
                            isRequired
                            label="NJMVC Delaer License Number"
                            name="njmvc-id"
                            placeholder="Eg. 12345N"
                            type="text"
                            classNames={{
                                mainWrapper: "bg-red-100"
                            }}
                            className="mb-3"
                            pattern="[0-9]{5}[NU]"
                            errorMessage={({ validationDetails, validationErrors }) => {
                                if (validationDetails.patternMismatch) {
                                    return "NJMVC Dealership License Number (Wall ID) must be in the format of five numbers followed by either N or U. This is issued by NJMVC."
                                }

                                return validationErrors;
                            }}
                        />

                        <Input
                            label="Corporate Code (optional)"
                            name="corp-code"
                            placeholder="Eg. 123456789123456"
                            type="text"
                            classNames={{
                                mainWrapper: "bg-red-100"
                            }}
                            className="mb-3"
                        />
                    </div>

                </div>

                <Checkbox name="agree" size="sm" isRequired>
                    <p>I <Link href={"#"}>agree and read the terms</Link> and state I have the authority to create this dealership with NJ Title Buddy</p>
                </Checkbox>

                <Button
                    type="submit"
                    className="w-full mt-5"
                    color="primary"
                >Create Dealership <ChevronRightIcon /></Button>

            </Form>

        </div>
    )

}

export default NewDealershipPage;