import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ScriptCont from "../includes/ScriptCont";
import Contact from "../layout/Contact";
import ContTitle from "../includes/ContTitle";

function Youtube(){
    return (
        <>
            <Header />
            <Contents>
                <ContTitle title={["Youtube", "book"]}/>
                <ScriptCont />
                <Contact />
            </Contents>
            <Footer />
        </>
    )
}

export default Youtube;