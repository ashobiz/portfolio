import React from 'react'
import {CSSTransition} from 'react-transition-group'

export default function Skills() {
    return (

        <div>
            <CSSTransition
                in={true}
                timeout={1000}
                classNames="fade"
                appear
            >
                <div className="skills">
                    <h2>My Frontend Skills</h2>
                    <p>I build dynamic and reactive web apps using <strong>React.js, Javascript</strong>.</p>
                    <hr />
                    <h2>My Web Design Skills</h2>
                    <p>I design professional and user friendly websites using <strong>HTML5, CSS3, Sass, JavaScript, jQuery, Photoshop, Bootstrap, TailWind CSS</strong>. My designs are mobile friendly and pixel perfect.</p>
                    <hr />
                    <h2>Other Skills</h2>
                    <p>Here are some of my other skills - <strong>Vue.js, Adobe Premiere Pro, Adobe After Effects, Git Basics, NPM Basics</strong>.</p>
                </div>
            </CSSTransition>
        </div>
    )
}
