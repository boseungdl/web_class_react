import React, {useEffect, useState} from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ContContact from "../includes/ContContact";
import ContTitle from "../includes/ContTitle";
import Loading from "../basics/Loading";
import YoutubeSearch from "../includes/YoutubeSearch";
import YoutubeList from "../includes/YoutubeList";
import { gsap } from "gsap";
// import YoutubeCont from "../includes/YoutubeCont";

//require('dotenv').config() npm i dotenv


function Youtube(){
    const [videos, setVideos] = useState([])

    const mainanimation = () => {
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");

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
            gsap.to(".youtube__list", {
                duration: 0.5,
                x:0,
                y:0,
                opacity:1,
                delay:1.0,
                scale:1,
            })
            gsap.to(".youtube__search", {
                duration: 0.5,
                x:0,
                y:0,
                opacity:1,
                delay:1.0,
                scale:1,
            })
                   
        }, 1000)
    }
    mainanimation()

    const search = (query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&type=video&q=${query}&key=${process.env.REACT_APP_API}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setVideos(result.items)
               
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&type=video&q=%EC%84%B1%EC%8B%9C%EA%B2%BD&key=${process.env.REACT_APP_API}`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => setVideos('error', error));
    }, [])

   
     
    return (

            <>
                <Loading />
                <Header />
                <Contents>
                    <ContTitle title={["Youtube", "reference"]}/>
                    <YoutubeSearch onSearch={search} />
                    <YoutubeList videos={videos} />
                    <ContContact />
                </Contents>
                <Footer />
            </>
        )           
}



















// class Youtube extends React.Component {
//     state = {
//         isLoading : true,
//         list : [],
//         searchs: []
//     }


//     // getRefers = async () => {
//     //     const {
//     //         data : {
//     //             data : {htmlRefer}
//     //         }
//     //     } = await axios.get("https://webstoryboy.github.io/react2022/src/assets/json/refer.json")

//     //     this.setState({refers : htmlRefer, isLoading : false,})
//     //     this.mainAnimation();
//     // }

//     getSite = () => {
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
            
//         }, 1000)
//     }

//     getYoutubes = async (query) => {
//         const searchs = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&type=video&q=${query}&key=AIzaSyCqcVXwm-d6_KKvwbfe4dIO4zYp3TKoDRo`)

//         const lists = await axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&type=video&q=%EC%84%B1%EC%8B%9C%EA%B2%BD&key=AIzaSyCqcVXwm-d6_KKvwbfe4dIO4zYp3TKoDRo")
//         // console.log(lists)
//         this.setState({lists, searchs, isLoading : false});
//         this.getSite();
//     }

//     componentDidMount(){
//         setTimeout(() => {
//             document.getElementById("loading").classList.remove("loading__active");
//             this.getYoutubes();
      
//         },2000)
//     }


//     render() {
//         const { isLoading, searchs, lists } = this.state;
//         return (
//             <>
//                 {isLoading ? (
//                 <Loading color ="black" />
//                 ) : (
//                 <>
//                     <Header />
//                     <Contents>
//                         <ContTitle title={["Youtube", "reference"]}/>
//                         <YoutubeSearch searchs={searchs} />
//                         <YoutubeCont lists={lists} />
//                         {/* <Contact /> */}
//                     </Contents>
//                     <Footer />
//                 </>
//                 )}
//           </>
//         )
//     }
// }


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