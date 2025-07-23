import React from 'react'
import './BlogCards.css'

function BlogCards(props) {
    console.log(props);
    
    return (
        <>
            <div className='card-container'>
                <img src={props.image} alt={props.alt} />
                <div className='card-content'>
                    <h3 className='title'>{props.title}</h3>
                    <p className='desc'>{props.desc}</p>
                </div>
            </div>
        </>
    )
}

export default BlogCards