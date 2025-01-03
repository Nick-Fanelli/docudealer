import "@/styles/app.css"

import TitleTable from "@/components/title-table";

const App = () => {


    return (
        <div id="app-container">

            <nav className="bg-content1">

            </nav>

            <div id="sidebar" className="bg-content1">

            </div>

            <main className="p-10">
                <TitleTable />
            </main>

        </div>
    );
}

export default App;