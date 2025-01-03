import "@/styles/app.css"

import TitleTable from "@/components/app/title-table";
import Sidebar from "@/components/app/sidebar";
import Navbar from "@/components/app/navbar";

const App = () => {

    return (
        <div id="app-container">

            <Navbar />

            <Sidebar />

            <main className="p-10 bg-background">
                <TitleTable />
            </main>

        </div>
    );
}

export default App;