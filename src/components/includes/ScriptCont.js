import React from 'react'

const scripttxt = [
    {
        image : "img/script01.jpg",
        title : "animationRequestFrame",
        desc01 : "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
        desc02 : "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다."
    },
    {
        image : "img/script02.jpg",
        title : "animationRequestFrame",
        desc01 : "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
        desc02 : "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다."
    },
    {
        image : "img/script03.jpg",
        title : "animationRequestFrame",
        desc01 : "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
        desc02 : "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다."
    }
]

function ScriptInfo(props){
    return (
        <div className="script">
            <figure>
                <img src={props.image} alt="" />
            </figure>
            <div className="number">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
            </div>
            <h3>{props.title}</h3>
            <div className="script_cont">
                <p>{props.desc01}</p>
                <p>{props.desc02}</p>
            </div>
        </div>
    )
}

function ScriptCont() {
  return (
    <section className="script__cont container">
        <div className="script__inner">
            {scripttxt.map(txt => (
                <ScriptInfo 
                    key = {txt.image}
                    image = {txt.image}
                    title = {txt.title}
                    desc01 = {txt.desc01}
                    desc02 = {txt.desc02}
                />
            ))}
        </div>
    </section>
  )
}

export default ScriptCont