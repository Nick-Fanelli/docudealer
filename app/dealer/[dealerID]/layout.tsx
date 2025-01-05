import "@/styles/dealer-page.css"

import TitleTable from "@/components/dealer/title-table";
import Sidebar from "@/components/dealer/sidebar";
import Navbar from "@/components/dealer/navbar";

// TODO: METADATA

type Params = {

    dealerID: string

}

const DealerPage = async ({ children, params } : { children: React.ReactNode, params: Params }) => {

    const { dealerID } = await params;

    return (
        <div id="app-container">

            <Navbar />

            <Sidebar dealerID={dealerID} />

            <main className="p-10 bg-background">
                {children}
            </main>

        </div>
    );

}

export default DealerPage;