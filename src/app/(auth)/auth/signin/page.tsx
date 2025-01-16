"use client";

import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Form } from "@nextui-org/form";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react"
import { Checkbox } from "@nextui-org/checkbox";
import { signInWithGithub } from "@/actions/auth.actions";

const Login = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <main className="w-screen h-screen flex items-center justify-center">

            <div className="flex w-[550px] p-20 rounded-xl items-center justify-center bg-content1">
                <div className="flex w-full max-w-sm flex-col gap-4 rounded-large">
                    <div className="flex flex-col items-center pb-6">
                        <div className="w-[60px] h-[60px] bg-blue-300 mb-2 rounded-xl"></div>
                        <p className="text-xl font-medium mb-1">Authenticate</p>
                        <p className="text-small text-default-500">NJ Title Buddy</p>
                    </div>
                    <Form className="flex flex-col gap-3" validationBehavior="native" onSubmit={handleSubmit}>
                        <Input
                            isRequired
                            label="Email Address"
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            variant="bordered"
                        />
                        <Input
                            isRequired
                            endContent={
                                <button type="button" onClick={toggleVisibility}>
                                    {isVisible ? (
                                        <Icon
                                            className="pointer-events-none text-2xl text-default-400"
                                            icon="solar:eye-closed-linear"
                                        />
                                    ) : (
                                        <Icon
                                            className="pointer-events-none text-2xl text-default-400"
                                            icon="solar:eye-bold"
                                        />
                                    )}
                                </button>
                            }
                            label="Password"
                            name="password"
                            placeholder="Enter your password"
                            type={isVisible ? "text" : "password"}
                            variant="bordered"
                        />
                        <div className="flex w-full items-center justify-between px-1 py-2">
                            <Checkbox name="remember" size="sm">
                                Remember me
                            </Checkbox>
                            <Link className="text-default-500" href="#">
                                Forgot password?
                            </Link>
                        </div>
                        <Button className="w-full" color="primary" type="submit">
                            Sign In
                        </Button>
                    </Form>
                    <div className="flex items-center gap-4 py-2">
                        <Divider className="flex-1" />
                        <p className="shrink-0 text-tiny text-default-500">OR</p>
                        <Divider className="flex-1" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Button
                            startContent={<Icon icon="flat-color-icons:google" width={24} />}
                            variant="bordered"
                        >
                            Continue with Google
                        </Button>
                        <Button
                            startContent={<Icon className="text-default-500" icon="fe:github" width={24} />}
                            variant="bordered"
                            onPress={signInWithGithub}
                        >
                            Continue with Github
                        </Button>
                    </div>
                    <p className="text-center text-small">
                        Need to create an account?&nbsp;
                        <Link href="#">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>

        </main>
    )

}

export default Login;