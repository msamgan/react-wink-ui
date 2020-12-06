import React from "react"
import Header from "./components/Header";
import TagList from "./components/TagList";
import Intro from "./components/Intro";

const App = () => {
    return (
        <div className="container-fluid container-width mt-4">
            <Header/>
            <div className="py-1 mb-5">
                <TagList/>
            </div>

            <Intro />
        </div>
    );
}

export default App;