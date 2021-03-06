import React from 'react';
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import { gsap } from "gsap";

// function ReferDetail(props) {
//     console.log(props)
//   return (
//     <div>ReferDetail</div>
//   )
// }

function Definition(props){
    return (
        <li className='Definition__li'>{props.definition}</li>
    )
}

function Access(props){
    return (
        <li className='Access__li'>{props.access}</li>
    )
}

class ReferDetail extends React.Component {
    componentDidMount(){
        const access = document.querySelector(".refer_info ul:nth-of-type(2)");
        const accessH3 = document.querySelector(".refer_info h3:nth-of-type(2)");
        console.log(accessH3)
        if(access.innerText === ''){
            console.log(accessH3)
            access.style.display = "none"
            accessH3.style.display = "none"
        }
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/reference");
        }
        this.mainAnimation();
    }
    mainAnimation = () => {
        gsap.to("#header", {
            duration: 0.8,
            top: 0,
        });
        gsap.to("#footer", {
            duration: 0.8,
            bottom: 0,
            delay: 0.2
        });
    }

  
    render(){
        const {location} = this.props;
       

        if(location.state === undefined){
            return <div>잘못된 페이지입니다.</div>
        } else {
            return (
                <>
                    <Header color="light" />
                    <Contents color="light">
                        <section className="refer__cont light">
                            <div className="container">
                                <div className="refer__inner">
                                    <div className="refer__table">
                                        <h3>{location.state.title}</h3>
                                        <p>{location.state.desc}</p>
                                        <table className='table'>
                                            <thead>
                                                <tr>
                                                    <th>특징</th>
                                                    <th>설명</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>요소</th>
                                                    <td>{location.state.element}</td>
                                                </tr>
                                                <tr>
                                                    <th>닫는 태그</th>
                                                    <td>{location.state.tag}</td>
                                                </tr>
                                                <tr>
                                                    <th>버전</th>
                                                    <td>{location.state.version}</td>
                                                </tr>
                                                <tr>
                                                    <th>시각적 표현</th>
                                                    <td>{location.state.view}</td>
                                                </tr>
                                                <tr>
                                                    <th>사용성</th>
                                                    <td>{location.state.use}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="refer_info">
                                        <h3>정의(Definition)</h3>
                                        <ul className='ul'>
                                            {location.state.Definition.map(el => (
                                                <Definition 
                                                key = {el}
                                                definition = {el}
                                                />
                                            ))}
                                        </ul>
                                        <h3>접근성(Accessibility)</h3>
                                        <ul className='ul'>
                                            {location.state.Accessibility.map(el => (
                                                <Access 
                                                key = {el}
                                                access = {el}
                                                />
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="site">
                                        <ul>
                                            <li><a href={location.state.mdn}>MDN</a></li>
                                            <li><a href={location.state.w3c}>W3C</a></li>
                                            <li><a href="./Reference">목록보기</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Contents>
                    <Footer color="light" />
                </>
            )
        }
    }
}
export default ReferDetail;