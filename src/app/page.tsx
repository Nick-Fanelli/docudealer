import { Button } from "@nextui-org/button";
import Link from "next/link";

const HomePage = async () => {

    return (
        <main className="w-screen h-screen flex justify-center items-center">
            <div>
                <Link href={"/auth/signin"}><Button type="submit">Sign In</Button></Link>
            </div>
        </main>
    )

}

export default HomePage;