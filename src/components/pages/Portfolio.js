import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ContTitle from "../includes/ContTitle";
import PortCont from "../includes/PortCont";
import ContContact from "../includes/ContContact";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import axios from "axios";


// function Portfolio(){
//     return (
//         <>
//             <Header />
//             <Contents>
//                 <ContTitle title={["Portfolio", "site"]} />
//                 <PortCont />
//                 <ContContact />
//             </Contents>
//             <Footer />
//         </>
//     )
// }

class Portfolio extends React.Component {
    state = {
        isLoading: true,
        ports: [],
    }

    mainAnimation = () => {
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
            gsap.to(".port__inner", {
                duration: 0.5,
                x:0,
                y:0,
                opacity:1,
                delay:1.2,
            })
        },10)
    }

    getPorts = async () => {
        const {data : {data: {ports}}} = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json");

        this.setState({ports: ports})
        // console.log(ports)


        setTimeout(() => {
            console.log("두번째 시작")
            this.setState({isLoading: false});
            this.mainAnimation()
        },1600)
    }


    componentDidMount(){
        setTimeout(() => {
            console.log("첫번째 시작")
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background = "#000";
            this.getPorts();
        }, 2000)
    }

    render(){
        const {isLoading, ports} = this.state

        console.log(ports)
        return (
            <>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Header />
                        <Contents>
                            <ContTitle title={["Portfolio", "site"]} />
                           
                            <PortCont data = {ports}/>
     
                            <ContContact />
                        </Contents>
                        <Footer />
                    </>
                )}
            </>    
        )
    }
}

export default Portfolio;