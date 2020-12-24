import React from 'react'
import {CSSTransition} from 'react-transition-group'

export default function Works() {
    return (
        <div>
            <CSSTransition
                in={true}
                timeout={1000}
                classNames="fade"
                appear
            >
                <div className="works">
                    <h2>My Works</h2>
                    <p>Here are some of my <strong>React.js</strong> works & <strong>Web Design</strong> works. Source code is available in <a href="https://github.com/ashobiz">Github</a>.</p>
                    <div className="works-inner">
                        {/* Individual works */}
                        <div className="work">
                            <a href="https://ashobiz-tictactoe.netlify.app/" target="_blank">
                                <img src="/images/tictactoe.jpg" alt="tictactoe" />
                            </a>
                            <h3>React.js - TicTacToe game</h3>
                        </div>
                        <div className="work">
                            <a href="https://ashobiz-finance.netlify.app/" target="_blank">
                                <img src="/images/finance.jpg" alt="finance" />
                            </a>
                            <h3>React.js - Income/Expenses calculator</h3>
                        </div>
                        <div className="work">
                            <a href="https://ashobiz-ecom.netlify.app/" target="_blank">
                                <img src="/images/ecom.jpg" alt="ecom" />
                            </a>
                            <h3>React.js - Simple Ecommerce Web App</h3>
                        </div>
                        <div className="work">
                            <a href="https://ashobiz-weather.netlify.app/" target="_blank">
                                <img src="/images/weather.jpg" alt="weather" />
                            </a>
                            <h3>React.js - Weather Web App</h3>
                        </div>
                        <div className="work">
                            <a href="https://ashobiz-todo.netlify.app/" target="_blank">
                                <img src="/images/todo.jpg" alt="todo" />
                            </a>
                            <h3>React.js - ToDo Web App</h3>
                        </div>
                        <div className="work">
                            <a href="https://ashobiz-brave.netlify.app/" target="_blank">
                                <img src="/images/brave.jpg" alt="brave" />
                            </a>
                            <h3>Web Design - Brave theme</h3>
                        </div>
                        <div className="work">
                            <a href="https://ashobiz-cakefactory.netlify.app/" target="_blank">
                                <img src="/images/cakefactory.jpg" alt="cakefactory" />
                            </a>
                            <h3>Web Design - Cakefactory theme</h3>
                        </div>
                        <div className="work">
                            <a href="https://ashobiz-flatmania.netlify.app/" target="_blank">
                                <img src="/images/flatmania.jpg" alt="flatmania" />
                            </a>
                            <h3>Web Design - Flatmania theme</h3>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}
