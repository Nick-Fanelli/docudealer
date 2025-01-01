import "@/styles/app.css"

import TitleTable from "@/components/title-table";

const App = () => {


    return (
        <div id="app-container" className="grid-rows-[60px_1fr] grid-cols-[250px_1fr]">

            <nav className="bg-content1">

            </nav>

            <div id="sidebar" className="bg-content1 w-full h-full">

            </div>

            <main className="p-10">
                <TitleTable />
            </main>

        </div>
    );
}

export default App;