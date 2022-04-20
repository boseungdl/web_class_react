import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import MainCont from "../includes/MainCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

// function Main(){
//     return (
//         <>
//             <Header />
//             <Contents>
//                 <MainCont />
//             </Contents>
//             <Footer />
//         </>
//     )
// }

class Main extends React.Component {
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
            gsap.to(".main__inner > div:nth-child(1)", {
                duration: 0.4,
                opacity: 1,
                y:0,
                delay: 1.0,
                ease: "bounce.out"
            });
            gsap.to(".main__inner > div:nth-child(2)", {
                duration: 0.4,
                opacity: 1,
                y:0,
                delay: 1.4,
                ease: "bounce.out"
            });
            gsap.to(".main__inner > div:nth-child(3)", {
                duration: 0.4,
                opacity: 1,
                y:0,
                delay: 1.8,
                ease: "bounce.out"
            });
            gsap.to(".main__inner > div:nth-child(4)", {
                duration: 0.4,
                opacity: 1,
                y:0,
                delay: 2.2,
                ease: "bounce.out"
            });
        }, 1000)
    }

    getMain = () => {
        setTimeout(() => {
            console.log("두번째 시작")
            this.setState({isLoading: false});
            this.getSite()
        },1600)
    }

  

    componentDidMount(){
        setTimeout(() => {
            // this.setState({isLoading:false})
            this.getMain();
        }, 3000)
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
                            <MainCont />
                        </Contents>
                        <Footer />
                    </>
                )}
            </>    
        )
    }
}

export default Main;