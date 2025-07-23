import React, { useState } from 'react'
import BlogCards from '../../Components/BlogCards'
import './Home.css'


const cardData = [{
        image: "https://i.pinimg.com/originals/71/28/3b/71283bb49db55cfee5bb6acd1389c465.jpg",
        alt: "Tree Image",
        title: "Java Tree",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjZZG3bRAxFdAIvNZwIQWllddg7SK3wbgv4MxZadqx4Mw1en_8rIMT1jIpAGz8D4MBiFM&usqp=CAU",
                alt:"Tree Image",
                title:"River",
                desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam eaque cupiditate, numquam facere enim a officia deserunt labore vero vel aliquam! Harum, autem. Cupiditate doloremque ut facere eaque ullam."
    },{
        image:"https://images.squarespace-cdn.com/content/v1/6150da9bc04b0a138b3c0600/1634528500503-V7KPRTKGCRB73IY6IKB9/Stone-Circle.jpg",
                alt:"Stone Image",
                title:"Stone",
                desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Adipisci totam eaque cupiditate, numquam facere enim a officia deserunt labore vero vel aliquam! Harum, autem. Cupiditate doloremque ut facere eaque ullam."
    }];

   
function Home() {
    const [viewType, setViewType]=useState('Tile');
    const clickHandler=()=>
    {
        if(viewType==='Tile')
            setViewType('List')
        if(viewType!=='Tile')
            setViewType('Tile')
    }
    return (
        <>
            
            <h1>Home Page</h1>
            <button onClick={clickHandler}>{viewType} View</button>

            <div className={viewType==="Tile"?'tile-view-container main-container':'list-view-container main-container'}>
            {cardData.map((cardsValue,key)=>(
                <BlogCards 
                key={`${cardsValue.title}_${key}`}
                {...cardsValue}
               />
            ))}
            </div>            
        </>
    )
}

export default Home