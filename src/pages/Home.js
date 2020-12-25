import React from 'react'
import {CSSTransition} from 'react-transition-group'

export default function Home() {
    return (
        <div>
            <CSSTransition
                in={true}
                timeout={1000}
                classNames="fade"
                appear
            >
                <div className="home fade">
                    {/* Name section */}
                    <div className="hleft">
                        <h1>Ashok<i>.</i></h1>
                        <h2>FrontEnd Web Developer</h2>
                        <p>Hello, I'm a FrontEnd Developer focused on producing exceptional digial experience. I wrote my first line of Code in 2010. Right now I am concentrating fully on React.js.</p>
                    </div>
                    <div className="hright">
                        <img src="/images/profile.jpg" alt="Ashok" />
                        <div className="img-back"></div>
                    </div>
                    <div className="clear"></div>
                </div>
            </CSSTransition>
        </div>
    )
}
