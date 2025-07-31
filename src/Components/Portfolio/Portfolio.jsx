import React from 'react'
import './Portfolio.css'

function Portfolio() {
    return (
        <>
            <section className='navbar-section'>
                <div className='nav-container'>
                        
                        <ul className='nav-items'>
                            <li><img src="https://static.vecteezy.com/system/resources/previews/019/166/318/non_2x/lion-head-lion-logo-symbol-gaming-logo-elegant-element-for-brand-abstract-symbols-vector.jpg" alt="Image"  className='logo'/></li>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Education</a>
                            </li>
                            <li>
                                <a href="#">Project</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>                    
                </div>
            </section>
            <section className='hero-section'>
                <div className='hero-sec-data'>
                    <div className='hero-sec-content'>
                        <h3>Hi I'm Lalit Bhagat</h3>
                        <p>As a Java Developer i'm able to  designs, develops, and manages Java-based applications and software.  </p>
                    </div>
                    <div className='hero-sec-img'><img src="https://miro.medium.com/v2/resize:fit:1400/0*28pQuRejOMlv_vB3" alt="Image"/></div>
                </div>
            </section>
        </>
    )
}

export default Portfolio