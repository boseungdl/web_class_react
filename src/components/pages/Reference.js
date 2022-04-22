
import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ContTitle from "../includes/ContTitle";
import ContContact from "../includes/ContContact";
import ReferCont from "../includes/ReferCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import axios from "axios";

// class Reference extends React.Component {
//     state = {
//         isLoading: true,
//         refers: [],
//     }
//     mainAnimation = () => {
//         setTimeout(() => {
//             gsap.to("#header", {
//                 duration: 0.8,
//                 top: 0,
//             });
//             gsap.to("#footer", {
//                 duration: 0.8,
//                 bottom: 0,
//                 delay: 0.2,
//             });
//             gsap.to(".cont__title strong", {
//                 duration: 0.7,
//                 y: 0,
//                 opacity: 1,
//                 delay: 1.0,
//                 ease: "power4.out",
//                 scale : 1,
//             });
//             gsap.to(".cont__title em", {
//                 duration: 0.7,
//                 y: 0,
//                 opacity: 0.9,
//                 delay: 1.3,
//                 ease: "power4.out",
//                 scale : 1,
//             });
//             gsap.to(".refer__inner", {
//                 duration: 0.7,
//                 y: 0,
//                 opacity: 1,
//                 delay: 1.5,
//                 ease: "power4.out"
//             });
//         }, 1000)
//     }
//     getSite = async () => {
//         const {
//             data: {
//                 data: {htmlRefer},
//             },
//         } = await axios.get("https://webstoryboy.github.io/react2022/src/assets/json/refer.json");
//         this.setState({refers: htmlRefer, isLoading: false})
//         this.mainAnimation();
//     }
//     componentDidMount(){
//         setTimeout(() => {
//             document.getElementById("loading").classList.remove("loading__active");
//             document.querySelector("body").style.background = "#F0EEEB";
//             this.getSite();
//         }, 2000);
//     }
//     render(){
//         const {isLoading, refers} = this.state;
//         return (
//             <>
//                 {isLoading ? (
//                     <Loading color="light" />
//                 ) : (
//                     <>
//                         <Header color="light" />
//                         <Contents>
//                             <ContTitle title={["Reference","book"]} color="light" />
//                             <ReferCont refers={refers} color="light" />
//                             <ContContact />
//                         </Contents>
//                         <Footer color="light" />
//                     </>
//                 )}
//             </>
//         )
//     }
// }
// export default Reference;


class Reference extends React.Component {
    state = {
        isLoading : true,
        refers :[],
    }

    mainAnimation = () => {
        setTimeout(() => {
            gsap.to("#header", {
                                 duration: 0.8,
                                 top: 0,
                             });
                             gsap.to("#footer", {
                                 duration: 0.8,
                                 bottom: 0,
                                 delay: 0.2,
                             });
                             gsap.to(".cont__title strong", {
                                 duration: 0.7,
                                 y: 0,
                                 opacity: 1,
                                 delay: 1.0,
                                 ease: "power4.out",
                                 scale : 1,
                             });
                             gsap.to(".cont__title em", {
                                 duration: 0.7,
                                 y: 0,
                                 opacity: 0.9,
                                 delay: 1.3,
                                 ease: "power4.out",
                                 scale : 1,
                             });
                             gsap.to(".refer__inner", {
                                 duration: 0.7,
                                 y: 0,
                                 opacity: 1,
                                 delay: 1.5,
                                 ease: "power4.out"
                             });
        }, 10)
    }

    getRefers = async () => {
        const {
            data : {
                data : {htmlRefer}
            }
        } = await axios.get("https://webstoryboy.github.io/react2022/src/assets/json/refer.json")

        this.setState({refers : htmlRefer, isLoading : false,})
        this.mainAnimation();
    }

    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            this.getRefers();
        },2000)
    }

    render(){
        const {isLoading, refers} = this.state;

        return (
            <>
                {isLoading ? (
                    <Loading color="light" />
                ) : (
                    <>
                        <Header color="light" />
                        <Contents>
                            <ContTitle title={["Reference","book"]} color="light"/>
                            <section className="refer__cont light">
                                <div className="container">
                                    <div className="refer__inner">
                                        <h2>CSS</h2>
                                        <ul className="refer__list">
                                            {refers.map((refer) => (
                                                  <ReferCont 
                                                        key = {refer.id}
                                                        id = {refer.id}
                                                        title = {refer.title}
                                                        desc = {refer.desc}
                                                        use = {refer.use}

                                                        desc2 = {refer.desc2}
                                                        element = {refer.element}
                                                        tag = {refer.tag}
                                                        version = {refer.version}
                                                        view = {refer.view}
                                                        image = {refer.image}
                                                        link = {refer.link}
                                                        Definition = {refer.Definition}
                                                        Accessibility = {refer.Accessibility}
                                                        Related = {refer.Related}
                                                        mdn = {refer.mdn}
                                                        w3c = {refer.w3c}
                                                        
                                                  />
                                            ))}
                                                                            
                                            {/* <li>
                                                <a href="/">
                                                    <span></span>
                                                </a>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            {/* <ReferCont refers={refers} color="light" /> */}
                            <ContContact color="light" />
                        </Contents>
                        <Footer color="light" />
                    </>
                )}
            </>
        )
    }
}

export default Reference