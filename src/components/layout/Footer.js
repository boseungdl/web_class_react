import React from "react";

function Footer(props){
    return (
        <footer id="footer" className={props.color}>
            <div className="footer__email">
                <h4>email</h4>
                <a href="mailto:96tmdqh@naver.com">96tmqqh@naver.com</a >
            </div>
            <div className="footer__kakao">
                <h4>kakao</h4>
                <a href="#">boseungdl</a>
            </div>
            <div className="footer__social">
                <h4>social</h4>
                <ul>
                    <li><a href="/">Youtube</a></li>
                    <li><a href="/">Instargram</a></li>
                    <li><a href="/">Github</a></li>
                    <li><a href="/">Reference</a></li>
                    <li><a href="/">Tutorials</a></li>           
                </ul>
            </div>
        </footer>
    )
}

export default Footer;