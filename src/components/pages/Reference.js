import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ContTitle from "../includes/ContTitle";
import ReferCont from "../includes/ReferCont";



function Reference(){
    return (
        <>
            <Header />
            <Contents>
                <ContTitle title = {["REFERENCE", "book"]}/>
                <ReferCont color="light"/>
            </Contents>
            <Footer />
        </>
    )
}

export default Reference;