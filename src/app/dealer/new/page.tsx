"use client";

import { createDealership } from "@/actions/dealer.actions";
import { ChevronRightIcon } from "@/components/icons";
import { Select, SelectItem } from "@heroui/select";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Form } from "@nextui-org/form";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const states = [
    { key: "AL", label: "Alabama" },
    { key: "AK", label: "Alaska" },
    { key: "AZ", label: "Arizona" },
    { key: "AR", label: "Arkansas" },
    { key: "CA", label: "California" },
    { key: "CO", label: "Colorado" },
    { key: "CT", label: "Connecticut" },
    { key: "DE", label: "Delaware" },
    { key: "FL", label: "Florida" },
    { key: "GA", label: "Georgia" },
    { key: "HI", label: "Hawaii" },
    { key: "ID", label: "Idaho" },
    { key: "IL", label: "Illinois" },
    { key: "IN", label: "Indiana" },
    { key: "IA", label: "Iowa" },
    { key: "KS", label: "Kansas" },
    { key: "KY", label: "Kentucky" },
    { key: "LA", label: "Louisiana" },
    { key: "ME", label: "Maine" },
    { key: "MD", label: "Maryland" },
    { key: "MA", label: "Massachusetts" },
    { key: "MI", label: "Michigan" },
    { key: "MN", label: "Minnesota" },
    { key: "MS", label: "Mississippi" },
    { key: "MO", label: "Missouri" },
    { key: "MT", label: "Montana" },
    { key: "NE", label: "Nebraska" },
    { key: "NV", label: "Nevada" },
    { key: "NH", label: "New Hampshire" },
    { key: "NJ", label: "New Jersey" },
    { key: "NM", label: "New Mexico" },
    { key: "NY", label: "New York" },
    { key: "NC", label: "North Carolina" },
    { key: "ND", label: "North Dakota" },
    { key: "OH", label: "Ohio" },
    { key: "OK", label: "Oklahoma" },
    { key: "OR", label: "Oregon" },
    { key: "PA", label: "Pennsylvania" },
    { key: "RI", label: "Rhode Island" },
    { key: "SC", label: "South Carolina" },
    { key: "SD", label: "South Dakota" },
    { key: "TN", label: "Tennessee" },
    { key: "TX", label: "Texas" },
    { key: "UT", label: "Utah" },
    { key: "VT", label: "Vermont" },
    { key: "VA", label: "Virginia" },
    { key: "WA", label: "Washington" },
    { key: "WV", label: "West Virginia" },
    { key: "WI", label: "Wisconsin" },
    { key: "WY", label: "Wyoming" },
];

const NewDealershipPage = () => {

    const router = useRouter();

    return (
        <div className="flex items-center justify-center h-full w-full">

            <Form
                className="bg-content1 dark:bg-content1 max-w-[90%] w-[800px] p-10 rounded-xl shadow-md flex justify-between"
                validationBehavior="native"
                onSubmit={async (e) => {

                    e.preventDefault();

                    const formData = new FormData(e.currentTarget);

                    if (formData == null) { // TODO: ERROR HANDLE
                        console.error("Unexpected null form data");
                        return;
                    }

                    const dealershipName = formData.get("dealership-name")?.toString().trim();
                    const licenseNumber = formData.get("licenseNo")?.toString().trim().toUpperCase();
                    const stateLicensed = formData.get("state")?.toString().trim().toUpperCase();

                    let zipCode = formData.get("zip")?.toString().trim();

                    if (!dealershipName || !licenseNumber || !stateLicensed || !zipCode) { // TODO: ERROR Handle
                        console.error("Unexpected error");
                        return;
                    }

                    if (zipCode.split("-").length > 1) {
                        zipCode = zipCode.split("-")[0];
                    }

                    await createDealership(dealershipName, licenseNumber, stateLicensed, zipCode);

                    router.push("/dealer");

                }}
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
                    />

                    <Input
                        isRequired
                        label="Dealer License Number"
                        name="licenseNo"
                        placeholder="Eg. 12345N"
                        type="text"
                        classNames={{
                            mainWrapper: "bg-red-100"
                        }}
                        className="mb-3"
                    />

                    <div className="flex gap-3 my-5">

                        <Select
                            isRequired
                            name="state"
                            label="Select State Licensed"
                            placeholder="Select State"
                        >
                            {
                                states.map(state => (
                                    <SelectItem key={state.key}>{state.label}</SelectItem>
                                ))
                            }
                        </Select>

                        <Input
                            isRequired
                            label="Zip Code"
                            name="zip"
                            placeholder="Select Zip Code"
                            type="string"
                            classNames={{
                                mainWrapper: "bg-red-100"
                            }}
                            className="mb-3"
                            pattern="[0-9]{5}(-[0-9]{4})?"
                            errorMessage={({ validationDetails, validationErrors }) => {
                                if (validationDetails.patternMismatch) {
                                    return "Please enter valid zip code eg. 91234 or 91234-3012"
                                }

                                return validationErrors;
                            }}
                        />

                    </div>

                </div>

                <Checkbox name="agree" size="sm" isRequired>
                    <p>I <Link href={"#"}>agree and read the terms</Link> and state I have the authority to create this dealership with DocuDealer</p>
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