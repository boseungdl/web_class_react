import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ContTitle from "../includes/ContTitle";
import ReferCont from "../includes/ReferCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

class Reference extends React.Component {
    state = {
        isLoading: true,
    }
    getSite = () => {
        setTimeout(() => {
            gsap.to("#header", {
                duration: 0.4,
                top: 1,
            });
            gsap.to("#footer", {
                duration: 0.4,
                bottom: 1,
            });
            gsap.to(".cont__title strong", {
                duration: 0.5,
                x:0,
                y:0,
                opacity:1,
                delay:1.0,
                scale:1,
            })
            gsap.to(".cont__title em", {
                duration: 0.5,
                x:0,
                y:0,
                opacity:1,
                delay:1.0,
                scale:1,
            })
        }, 1000)
    }

    getRefer = () => {
        setTimeout(() => {
            console.log("두번째 시작")
            this.setState({isLoading: false});
            this.getSite()
        },1600)
    }

  

    componentDidMount(){
        setTimeout(() => {
            // this.setState({isLoading:false})
            this.getRefer();
        }, 1000)
    }

    render(){
        const {isLoading} = this.state;

     

        return (
            <>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Header />
                        <Contents>
                            <ContTitle title = {["REFERENCE", "book"]}/>
                            <ReferCont />
                        </Contents>
                        <Footer />
                    </>
                )}
            </>    
        )
    }
}


// function Reference(){
//     return (
//         <>
//             <Header />
//             <Contents>
//                 <ContTitle title = {["REFERENCE", "book"]}/>
//                 <ReferCont color="light"/>
//             </Contents>
//             <Footer />
//         </>
//     )
// }

export default Reference;