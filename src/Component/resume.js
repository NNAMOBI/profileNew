import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import educationProfile from '../Component/images/nesaprofile.jpg'
import Education from './education'
import Experience from './experience'
import Skills from './skills'


class Resume extends Component {
    render() {
        
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: "center" }}>
                            <img src={educationProfile} alt="edu" style={{ height: '300px', width: "100%", borderRadius: "40%" }} />
                        </div>

                        <h2 style={{ paddingTop: "2em"}}>Osuagwu Nnamdi</h2>
                        <h4 style={{ color: "grey"}}>Full-stack developer</h4>
                        <hr style={{borderTop: "3px solid #833fb2", width: "50%"}} />

                        <p style={{ fontFamily: "'Oxygen', sans-serif", fontSize: "115%"}}>
                            Courteous and enthusiastic. I am fascinated by web programming, e.g. developing apps and building websites.
                             I am well versed in React Components and frameworks .
                             I am able to use Redux to handle app complexities and construct. 
                             I also have strong understanding of Express.Js and nodeJs to effectively build server-side technologies
                             with node package manager libraries and frameworks. I understand the required structure of a full project, 
                            making HTTP request and response using CRUD operations, building API and deployment.
                        </p>
                        <hr style={{borderTop: "3px solid #833fb2", width: "50%"}} />
                        <h5>Address</h5>
                        <p>6 Fola Ojikutu Street, Ago palace way, Okota, Lagos State</p>
                        <h5>Phone</h5>
                        <p>(+234) 8167203576</p>
                        <h5>Email</h5>
                        <p>nnamosuagwu@yahoo.com</p>
                        <h5>website</h5>
                        <p>In progress</p>
                        <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                        </Cell>
                    
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear="2019"
                            endYear="current"
                            schoolName="Nesa by Makers"
                            schoolDescription="Learning Front-end Web application development using HTML/HTML5, CSS, JavaScript,
                            REACT using Bootstrap classes in HTML5, CSS3, Bootstrap tools and Figma and Back-end Web 
                            application development using Express for Node JavaScript ,Mongo DB for dataHandling and
                            Version control tool (Git)"
                        />

                        <Education
                            startYear="2002"
                            endYear="2007"
                            schoolName="Enugu State University of Science and Technology| Enugu State"
                            schoolDescription="B.Eng. (Hons) Civil Engineering "
                            class="Second Class"
                        />

                        <Education
                            startYear="1998"
                            endYear="2001"
                            schoolName="Lagos State Model College Ikorodu, Ikorodu, Lagos State."
                            schoolDescription="WAEC and NECO "
                            
                        />
                        <hr style={{ borderTop: "3px solid #e22947" }} />
                        
                        <h2>Experience</h2>

                        <Experience
                            startYear="2019"
                            endYear="present"
                            jobName="Fullstack Web developer | side projects"
                            jobDescription="•	Currently building a dev-connector web App  that builds a profile 
                            ,signup and login into social network for devs, share post and get help from other developers 
                            .(MERN full stack),  hosted on github but in private mode."
                            jobDescription2="•	Co-developed an E-Commerce website by creating API’s using the necessary Http requests (Post, Get, Put and Delete) to send and obtain product information’s. 

"
                            jobDescription3="•	Created a Blog post component with REACT JS which hits an end point at NODE JS and 
                            EXPRESS JS backend using the CRUD operation, yet to be hosted on github."
                            jobDescription4="•	I created a clock app using REACT JavaScript"
                            jobDescription5= "•	I developed a weather app that outputs the weather report of any state in Nigeria with JQUERY"
                        />

                        <hr style={{ borderTop: "3px solid #e22947" }} />

                        <h2>Skills</h2>
                        
                        <Skills
                            skill="HTML/ CSS"
                            progress={40}
                            
                        />

                        <Skills
                            skill="JAVASCRIPT"
                            progress={25}
                        />
                        <Skills
                            skill="REACT"
                            progress={30}
                        />
                        <Skills
                            skill="JQUERY"
                            progress={10}
                        />

                        <Skills
                            skill="FIGMA"
                            progress={15}
                        />
                        <Skills
                            skill="BOOTSTRAP"
                            progress="15"
                        />

                        <Skills
                            skill="EXPRESS"
                            progress="25"
                        />

                        <Skills
                            skill="MongoDb"
                            progress="25"
                        />
                    </Cell>

                   
               </Grid>
            </div>
        )
    }
}

export default Resume;