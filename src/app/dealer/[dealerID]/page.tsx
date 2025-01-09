import { auth } from "@/auth";

const DealerHomePage = async () => {

    const session = await auth();

    return (
        <>
            <h1>Dealer Home Page</h1>
            <h2>{JSON.stringify(session?.user)}</h2>
        </>
    )
}

export default DealerHomePage;