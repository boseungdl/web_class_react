import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ContTitle from "../includes/ContTitle";
import ScriptCont from "../includes/ScriptCont";

function Script(){
    return (
        <>
            <Header />
            <Contents>
                <ContTitle title={["script", "javascript"]}/>
                <ScriptCont />
            </Contents>
            <Footer />
        </>
    )
}

export default Script;