import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ConContact from "../layout/Contact";


function Contact(){
    return (
        <>
            <Header />
            <Contents>
                <ConContact />
            </Contents>
            <Footer />
        </>
    )
}

export default Contact;