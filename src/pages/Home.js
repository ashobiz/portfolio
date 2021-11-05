import React from 'react'
import {CSSTransition} from 'react-transition-group'

export default function Home() {
    return (
        <>

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
                        <h3>Dec 2020 - Present: Photon Infotech, Bangalore</h3>
                        <p>Currently I am working as a Senior Software Engineer in Photon. I use <strong>React.js, Redux, Javascript, HTML5, CSS3</strong> to build frontend based on the given requirement. Along with the said technologies, I have also used many libraries namely, hook form, react vix, redux thunk, react tabs, jspdf, jest &amp; react testing library. </p>

                        <h3>Achievement in Photon</h3>
                        <p>I built a React Component which generates PDF based on the HTML, on the fly. There aren’t many React libraries which generate PDF, so I built a custom library. </p>

                        <hr />

                        <h3>2016 - 2020: Freelance Frontend Developer</h3>
                        <p>As Javascript technologies like Angular &amp; React became very popular, I added React to my skill set. Over the years, I built many web apps using <strong>React.js, Javascript, HTML5, CSS3, Sass</strong>. </p>

                        <hr />

                        <h3>2012 - 2016: Freelance Web Designer</h3>

                        <p>I started my career as a freelance web designer. Initially I worked part time while doing my Engineering. After graduation, I became a full time freelancer. I design websites using <strong>HTML, CSS, JavaScript, jQuery, Bootstrap and LESS</strong>. I am one of the early adopters of Responsive web designing and Bootstrap. </p>

<hr />
                        {/* <h3>My Contribution to Open Source Community</h3>
                        <p>I always wanted to give something back to the open source community. So, I built
this small React library called ‘React on the fly pdf’ and released it on github. As the
name indicates, it is a React based PDF document generator. My library will
generate a PDF document based on the given HTML page. It supports header,
footer & auto pagination. For detailed info, please visit the links below.</p>

<p>Github - <a href="https://github.com/ashobiz/react-on-the-fly-pdf">https://github.com/ashobiz/react-on-the-fly-pdf</a></p>
<p>NPM - <a href="https://github.com/ashobiz/react-on-the-fly-pdf">https://www.npmjs.com/package/react-on-the-fly-pdf</a></p> */}

<h3>Some of my works</h3>

<ul>
    <li><a href="www.backyardbrains.com">Backyard brains</a></li>
    <li><a href="ashobiz-brave.netlify.app">Brave</a></li>
    <li><a href="ashobiz-cakefactory.netlify.app">Cakefactory</a></li>
    <li><a href="ashobiz-flatmania.netlify.app">Flatmania</a></li>
    <li><a href="www.sarahpayne.co.uk">Sarah payne</a> </li>
    <li><a href="nas02.netstring.de/project/zeewolde">NetString</a></li>
    <li><a href="www.netekspert.com">NetekSPert</a></li>
</ul>


                </div>

                <div className="works">
                        <div className="sub_heading">
                            <h2>Achievements</h2>
                        </div>

<p>
1. Solved many coding problems in FireCode.io and LeetCode. Currently I am a Level 4 programmer in FireCode.io. 
                    
    </p>

    <p>

    2. I had my own web designing company under the name ‘AshoApps’ between 2014 to 2016. I lead a team of two people in my company.          
    </p>

    <p>
    3. I attended many web designing contests while doing my Engineering and won many prizes. 
                    
    </p>

                
                </div>


                <div className="works text-center">
                        <div className="sub_heading">
                            <h2>Education</h2>
                        </div>

<p>

                    Degree: B.Tech (Information Technology) <br />
                    Year: 2006 - 2011 <br />
                    Grade: 70.88% <br />
                    College: K.L.N College of Engineering, Madurai
    </p>

                
                </div>
 
                <div className="works text-center">
                        <div className="sub_heading">
                            <h2>Contact</h2>
                        </div>
                            
                            <p>Email: ashobiz@gmail.comp <br />
                            Phone: +91-9600869563 <br />
                            LinkedIn: <a href="https://www.linkedin.com/in/ashobiz/">www.linkedin.com/in/ashobiz/</a> <br />
                            Github: <a href="https://github.com/ashobiz">www.github.com/ashobiz</a></p>

                  </div>  
            
            </div>

                

            </CSSTransition>
        </div>
        </>
        
    )
}
