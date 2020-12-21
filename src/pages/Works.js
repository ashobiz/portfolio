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
                    <p>Here are some of my <strong>React.js</strong> based web apps. Source code is available in <a href="https://github.com/ashobiz">Github</a>.</p>
                    <div className="works-inner">
                        {/* Individual works */}
                        <div className="work">
                            <a href="https://ashobiz-ecom.netlify.app/" target="_blank">
                                <img src="/images/ecom.jpg" alt="ecom" />
                            </a>
                            <h3>Simple Ecommerce Web App</h3>
                        </div>
                        <div className="work">
                            <a href="https://ashobiz-tictactoe.netlify.app/" target="_blank">
                                <img src="/images/tictactoe.jpg" alt="tictactoe" />
                            </a>
                            <h3>TicTacToe game using React.js</h3>
                        </div>
                        <div className="work">
                            <a href="https://ashobiz-finance.netlify.app/" target="_blank">
                                <img src="/images/finance.jpg" alt="finance" />
                            </a>
                            <h3>Simple Income/Expenses calculator</h3>
                        </div>
                        <div className="work">
                            <a href="https://ashobiz-weather.netlify.app/" target="_blank">
                                <img src="/images/weather.jpg" alt="weather" />
                            </a>
                            <h3>React.js Weather App</h3>
                        </div>
                        <div className="work">
                            <a href="https://ashobiz-todo.netlify.app/" target="_blank">
                                <img src="/images/todo.jpg" alt="todo" />
                            </a>
                            <h3>ToDo App using React.js</h3>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}
