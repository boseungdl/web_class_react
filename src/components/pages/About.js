import React from "react";
import Header from "../includes/Header";
import Contents from "../includes/Contents";
import Footer from "../includes/Footer";
import ContTitle from "../includes/ContTitle";
import ContContact from "../includes/ContContact";
import AboutCont from "../includes/AboutCont";

function About(){
    return (
        <>
            <Header color="light"/>
            <Contents>
                <ContTitle title={["about", "me"]} color="light"/>
                <AboutCont color="light" />
                <ContContact />
            </Contents>
            <Footer color="light" />
        </>
    )
}

export default About;