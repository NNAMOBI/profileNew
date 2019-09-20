import React, { Component } from 'react'; 
import { Grid, Cell } from 'react-mdl'
import ProfileImage from '../Component/profileImage2.jpg'


class Landingpage extends Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="Landing-grid">
                    <Cell col={12}>

                        <img src={ProfileImage} alt="me" className="my-image"/>
                        <div className="banner-text">
                            <h1>Full Stack Web developer</h1>

                            <hr />
                            <p>
                                HTML | CSS | Bootstrap | Javascript | React | Express | NodeJs | MongoDB
                            </p>
                            <div className="social-links">
                                {/* linkedin*/}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />

                                    {/* github*/}
                                </a>
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* heroku*/}
                                {/* <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-heroku-square" aria-hidden="true" />
                                </a> */}
                            </div>
                        </div>
                       
                    </Cell>
                    </Grid>
              
            </div>
        )
    }
}

export default Landingpage;