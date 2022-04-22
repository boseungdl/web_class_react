import React from 'react';

function ContContact(props){
    return (
        <section className={`cont__contact ${props.color}`}>
            <p>Let's create something new</p>
            <h3>LET's Get IN<em>TOUCH</em></h3>
            <a href="/" className="btn">contact me</a>
        </section>
    )
}
export default ContContact;
