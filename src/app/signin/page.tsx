import { signIn } from "@/auth";
import TextDivider from "@/components/text-divider";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Form } from "@nextui-org/form";
import { Input } from "@nextui-org/input";
import Link from "next/link";

const Login = () => {

    return (
        <main className="w-screen h-screen flex items-center justify-center">

            <div className="bg-content1 w-[600px] max-w-screen max-h-screen py-10 rounded-xl shadow-2xl">
                <Form
                    className="items-center"
                    validationBehavior="native"
                >

                    <div className="max-w-md w-full">

                        <div className="mb-8">
                            <h1 className="text-3xl font-bold text-center pb-2">Authenticate</h1>
                            <p className="text-center text-lg font-light text-default-500">Sign in to manage your dealership securely</p>
                        </div>

                        <div className="mb-5 flex flex-col gap-5">
                            <Input
                                isRequired
                                label="Email"
                                labelPlacement="outside"
                                name="email"
                                type="email"
                                placeholder="Enter your email address"
                            />

                            <Input
                                isRequired
                                label="Password"
                                labelPlacement="outside"
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="mb-10 mt-8">
                            <Button className="w-full mb-5" color="primary" type="submit">Sign In with Credentials</Button>
                            <p className="text-sm text-default-600 text-center">Forgot your password? <Link href={"#"} className="text-sm text-blue-500 pl-[2px]">Reset Password</Link></p>
                        </div>

                    </div>

                </Form>

                <TextDivider>Or</TextDivider>

                <div className="mt-10 px-10">
                    <Form action={async () => {
                        "use server";
                        await signIn("github");
                    }}>
                        <Button className="w-full" type="submit">Sign In with GitHub</Button>
                    </Form>
                </div>
            </div>



        </main>
    )

}

export default Login;