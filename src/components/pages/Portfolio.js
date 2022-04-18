import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ContTitle from "../includes/ContTitle";
import PortCont from "../includes/PortCont";
import ContContact from "../includes/ContContact";


function Portfolio(){
    return (
        <>
            <Header />
            <Contents>
                <ContTitle title={["Portfolio", "site"]} />
                <PortCont />
                <ContContact />
            </Contents>
            <Footer />
        </>
    )
}

export default Portfolio;