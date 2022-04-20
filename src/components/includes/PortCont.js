import React from "react";



function PortInfo({image, title, link, category}){
    return (
        <article className="port__item">
            <figure className="img">
                <a href={link}><img src={image} alt="" /></a>
            </figure>
            <div className="text">
                <h3>{title}</h3>
                <p>{category}</p>
            </div>
        </article>
    )
}




function PortCont({data}){
    return (
        <section className="port__cont">
            <div className="container">
                <div className="port__inner">
                    {data.map(data => (
                        <PortInfo key = {data.title} image = {data.image} link = {data.link} title = {data.title} category = {data.category}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PortCont;