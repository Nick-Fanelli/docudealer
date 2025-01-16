import Sidebar from "@/components/dealer/sidebar";

// TODO: METADATA

type Params = {

    dealerID: string

}

const DealerPage = async ({ children, params } : { children: React.ReactNode, params: Params }) => {

    const { dealerID } = await params;

    return (
        <div id="app-container" className="flex w-screen h-full overflow-hidden realtive">

            <Sidebar dealerID={dealerID} />

            <main className="p-10 bg-background h-full w-full overflow-y-auto">
                {children}
            </main>

        </div>
    );

}

export default DealerPage;