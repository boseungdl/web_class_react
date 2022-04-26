import React, {useEffect, useState} from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ContTitle from "../includes/ContTitle";
import MovieSearch from "../includes/MovieSearch";
import MovieList from "../includes/MovieList";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
// import axios from "axios";



function Movie(){
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
            gsap.to(".movie__list", {
                duration: 0.5,
                x:0,
                y:0,
                opacity:1,
                delay:1.0,
                scale:1,
            })
            gsap.to(".movie__search", {
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
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=${query}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setVideos(result.results)
               
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=mission`, requestOptions)
          
            .then(response => response.json())
            .then(result => setVideos(result.results))
            .catch(error => setVideos('error', error));
    }, [])

   console.log(videos);
     
    return (

            <>
                <Loading />
                <Header />
                <Contents>
                    <ContTitle title={["movie", "reference"]}/>
                    <MovieSearch onSearch={search} />
                    <MovieList videos={videos} />
                    {/* <ContContact /> */}
                </Contents>
                <Footer />
            </>
        )           
}

// class Script extends React.Component {
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

//     getScript = async () => {
//         const lists = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=e1383d5ea3d2afa574cfbb0b263da6a3&query=mission")
//         console.log(lists)
//         this.setState({lists, isLoading : false});
//         this.getSite();
//     }

//     componentDidMount(){
//         setTimeout(() => {
//             document.getElementById("loading").classList.remove("loading__active");
//             this.getScript();
      
//         },2000)
//     }


//     render() {
//         const { isLoading, lists } = this.state;
//         return (
//             <>
//                 {isLoading ? (
//                 <Loading color ="black" />
//                 ) : (
//                     <>
//                         <Header />
//                         <Contents>
//                             <ContTitle title={["script", "javascript"]}/>
//                             <ScriptCont lists={lists} />
//                         </Contents>
//                         <Footer />
//                     </>
//                 )}
//           </>
//         )
//     }
// }




export default Movie;