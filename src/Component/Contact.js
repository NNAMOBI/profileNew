import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl"
// import profile from '../Component/images/ForMyPROFILE.jpg'
// style = {{ background: "#FC2F00" }}
// import Background from '../Component/images/contactImage.png'
import TouchingImage from '../Component/images/tochingImage.jpg'


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6} style={{
                         height: "100%", backgroundImage: `url(${TouchingImage})`, backgroundPosition: "center",
                        backgroundSize: "cover"
                    }} >
                        
                        {/* <img src={} alt="myprofile" style={{ height: "100%" }} /> */}
                        
                            {/* <h2>Osuagwu Nnamdi</h2> */}
                        
                        {/* <img src={profile} alt="myprofile" style={{ height: "300px", borderRadius: "20%" }} /> */}
                        {/* <p style={{width: "75%", margin: "auto", paddingTop: "1em"}}> Courteous and enthusiastic. I am fascinated by web programming,
                             e.g. developing apps and building websites. I am well versed in 
                             React Components and frameworks .I am able to use Redux to handle
                             app complexities and construct . I also have strong understanding of
                              Express.Js and nodeJs to effectively build server-side 
                              technologies with node package manager libraries and frameworks.
                              I understand the required structure of a full project, making
                               HTTP request and response using CRUD operations ,
                            building API and deployment. </p> */}
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact me </h2>
                        <hr />
<div className="contact-list">
                        <List>
                            <ListItem>
                                    <ListItemContent style={{fontFamily: "Anton", fontSize: "25px"}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"></i>  +234-8167203576
                                        </ListItemContent>
                            </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontFamily: "Anton", fontSize: "25px" }}>
                                        <i className="fa fa-envelope-square" aria-hidden="true"></i>  nnamosuagwu@yahoo.com
                                        </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontFamily: "Anton", fontSize: "25px" }}>
                                        <i className="fa fa-skype" aria-hidden="true"></i>  Nnamdi osuagwu
                                        </ListItemContent>
                                </ListItem>
                               
                                    
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;