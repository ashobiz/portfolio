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
                    <div className="hero">
                        {/* Name section */}
                        <div className="hleft">
                            <h3>Howdy!</h3>
                            <h1>I'm Ashok<i>.</i></h1> 
                            <h2>FrontEnd Web Developer</h2>
                            <p>I'm a FrontEnd Developer focused on building exceptional Web Apps. I wrote my first line of Code in 2010 and over the last 10 years I build many websites for clients around the world. </p>
                        </div>
                        <div className="hright">
                            <img src="/images/profile.jpg" alt="Ashok" />
                            <div className="img-back"></div>
                        </div>
                        <div className="clear"></div>
                    </div>

                    <div className="skills">
                        <div className="sub_heading">
                            <h2>Skills</h2>
                        </div>
                        <div className="skill_outer">                            
                            <div className="skill_item">
                                <h3>React.js  <span>90%</span></h3>
                                <div className="progress"><span style={{width: '90%'}}></span></div>
                            </div>
                            <div className="skill_item">
                                <h3>Redux.js  <span>90%</span></h3>
                                <div className="progress"><span style={{width: '90%'}}></span></div>
                            </div>
                            <div className="skill_item">
                                <h3>JavaScript  <span>80%</span></h3>
                                <div className="progress"><span style={{width: '80%'}}></span></div>
                            </div>
                            <div className="skill_item">
                                <h3>TypeScript  <span>65%</span></h3>
                                <div className="progress"><span style={{width: '65%'}}></span></div>
                            </div>
                            <div className="skill_item">
                                <h3>HTML  <span>80%</span></h3>
                                <div className="progress"><span style={{width: '80%'}}></span></div>
                            </div>
                            <div className="skill_item">
                                <h3>CSS  <span>70%</span></h3>
                                <div className="progress"><span style={{width: '70%'}}></span></div>
                            </div>
                            <div className="skill_item">
                                <h3>SASS  <span>60%</span></h3>
                                <div className="progress"><span style={{width: '60%'}}></span></div>
                            </div>
                            <div className="skill_item">
                                <h3>Bootstrap  <span>70%</span></h3>
                                <div className="progress"><span style={{width: '70%'}}></span></div>
                            </div>
                            <div className="skill_item">
                                <h3>Others:</h3>
                                <p>Express.js, MongoDB, Just, React testing library, Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro, Git basics (GUI). </p>
                            </div>
                        </div>                        
                    </div>

                    <div className="works">
                        <div className="sub_heading">
                            <h2>Work Experience</h2>
                        </div>
                        <h3>Current Employer: Photon Infotech, Bangalore</h3>
                        <h3>Position: Senior Software Engineer II</h3>
                        <h3>What I do?</h3>
                        <p>In Photon I build frontends based on the given requirements using React.js, Redux.js, HTML5, CSS3, Bootstrap. As I was working in a enterprise level application, I have used many different React libraries like hook form, redux toolkit, redux thunk, react vix, jest, react testing library, etc.,</p>


<hr />
                        {/* <h3>My Contribution to Open Source Community</h3>
                        <p>I always wanted to give something back to the open source community. So, I built
this small React library called ‘React on the fly pdf’ and released it on github. As the
name indicates, it is a React based PDF document generator. My library will
generate a PDF document based on the given HTML page. It supports header,
footer & auto pagination. For detailed info, please visit the links below.</p>

<p>Github - <a href="https://github.com/ashobiz/react-on-the-fly-pdf">https://github.com/ashobiz/react-on-the-fly-pdf</a></p>
<p>NPM - <a href="https://github.com/ashobiz/react-on-the-fly-pdf">https://www.npmjs.com/package/react-on-the-fly-pdf</a></p> */}


<a href="www.backyardbrains.com">Backyar brains</a> ashobiz-brave.netlify.app
ashobiz-cakefactory.netlify.app ashobiz-flatmania.netlify.app
www.sarahpayne.co.uk nas02.netstring.de/project/zeewolde
www.netekspert.com

                </div>

                <div className="works edu">
                    <div className="two_col">
                        <div className="two_col_inner">
                            
                                <h6>Education</h6>
                            <h3>Degree: B.Tech (Information Technology)</h3>
                            <h3>Year: 2006 - 2011</h3>
                            <h3>Grade: 70.88%</h3>
                            <h3>College: K.L.N College of Engineering, Madurai</h3>
                        </div>

                        <div className="two_col_inner">
                            
                                <h6>Contact</h6>
                            <h3>Email: ashobiz@gmail.com</h3>
                            <h3>Phone: +91-9600869563</h3>
                            <h3>LinkedIn: <a href="https://www.linkedin.com/in/ashobiz/">www.linkedin.com/in/ashobiz/</a></h3>
                            <h3>Github: <a href="https://github.com/ashobiz">www.github.com/ashobiz</a></h3>
                        </div>
                    </div>  

                </div>
            </div>

                
            </CSSTransition>
        </div>
    )
}
