import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
// import YoutubeSearch from "../includes/YoutubeSearch";
import YoutubeList from "../includes/YoutubeList";
import Contact from "../layout/Contact";
import ContTitle from "../includes/ContTitle";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import axios from "axios";
import YoutubeCont from "../includes/YoutubeCont";



class Youtube extends React.Component {
    state = {
        isLoading : true,
        list : [],
        searchs: []
    }


    // getRefers = async () => {
    //     const {
    //         data : {
    //             data : {htmlRefer}
    //         }
    //     } = await axios.get("https://webstoryboy.github.io/react2022/src/assets/json/refer.json")

    //     this.setState({refers : htmlRefer, isLoading : false,})
    //     this.mainAnimation();
    // }

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

    getYoutubes = async () => {
        const lists = await axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&type=video&q=%EC%84%B1%EC%8B%9C%EA%B2%BD&key=AIzaSyCqcVXwm-d6_KKvwbfe4dIO4zYp3TKoDRo")
        // console.log(lists)
        this.setState({lists, isLoading : false});
        this.getSite();
    }

    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            this.getYoutubes();
      
        },2000)
    }


    render() {
        const { isLoading, lists } = this.state;
        return (
            <>
                {isLoading ? (
                <Loading color ="black" />
                ) : (
                <>
                    <Header />
                    <Contents>
                        <ContTitle title={["Youtube", "reference"]}/>
                        {/* <YoutubeSearch /> */}
                        <YoutubeCont lists={lists} />
                        {/* <Contact /> */}
                    </Contents>
                    <Footer />
                </>
                )}
          </>
        )
    }
}


// class Youtube extends React.Component {
//     state = {
//         isLoading: true,
//         ports: [],
//     }

//     mainAnimation = () => {
//         setTimeout(() => {
//             gsap.to("#header", {
//                 duration: 0.4,
//                 top: 1,
//             });
//             gsap.to("#footer", {
//                 duration: 0.4,
//                 bottom: 1,
//             });
//             gsap.to(".cont__title strong", {
//                 duration: 0.5,
//                 x:0,
//                 y:0,
//                 opacity:1,
//                 delay:1.0,
//                 scale:1,
//             })
//             gsap.to(".cont__title em", {
//                 duration: 0.5,
//                 x:0,
//                 y:0,
//                 opacity:1,
//                 delay:1.0,
//                 scale:1,
//             })
          
//         },10)
//     }

//     getPorts = async () => {
//         // const {data : {data: {ports}}} = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json");

//         // this.setState({ports: ports})
//         // console.log(ports)


//         setTimeout(() => {
//             console.log("두번째 시작")
//             this.setState({isLoading: false});
//             this.mainAnimation()
//         },1600)
//     }


//     componentDidMount(){
//         setTimeout(() => {
//             console.log("첫번째 시작")
//             document.getElementById("loading").classList.remove("loading__active");
//             document.querySelector("body").style.background = "#000";
//             this.getPorts();
//         }, 2000)
//     }

//     render(){
//         const {isLoading, ports} = this.state

//         console.log(ports)
//         return (
//             <>
//                 {isLoading ? (
//                     <Loading />
//                 ) : (
//                     <>
//                         <Header />
//                         <Contents>
//                             <ContTitle title={["Youtube", "book"]}/>
//                             <ScriptCont />
//                             <Contact />
//                         </Contents>
//                         <Footer />
//                     </>
//                 )}
//             </>    
//         )
//     }
// }

export default Youtube;