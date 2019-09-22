import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardActions, CardText, Button, CardTitle, CardMenu, IconButton} from 'react-mdl'
import Background from '../Component/images/react-image.png'
import Background2 from '../Component/images/backgroundproj1.jpg'
import Background3 from '../Component/images/figmaImage.png'
import Background4 from '../Component/images/bootstrapImage1.png'
import Background5 from '../Component/images/jquery.jpg'




class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {activeTab: 0}
    }
    
    toggleCategories = () => {
        if (this.state.activeTab === 0) {
            return (
                //project1
                <div className="projects-grid">
                
                <Card shadow={5} style={{ minWidth: "550", margin: "auto", height: '550' }}>
                    <CardTitle style={{
                        color: "#fff", height: "176px", backgroundImage: `url(${Background})`, backgroundPosition: "center", backgroundSize: "cover"
                    }}>
                        React Project #1

                    </CardTitle>
                    <CardText>
                        •	Created  a small scale Blog, Signup, Login and Publishpost component.
                        
</CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>LiveDemo</Button>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name='share' />
                        </CardMenu>

                    </CardActions>


                </Card>

                {/*project2*/}
                <Card shadow={5} style={{ minWidth: "550", margin: "auto", height: '550' }}>
                    <CardTitle style={{
                        color: "#fff", height: "176px", backgroundImage: `url(${Background})`, backgroundPosition: "center", backgroundSize: "cover"
                    }}>
                        React Project #2

                    </CardTitle>
                    <CardText>
                        
                        •	I created a clock app using REACT JavaScript.
                        </CardText>
                    <CardActions border>
                            <Button colored> GitHub</Button>
                        <Button colored>LiveDemo</Button>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name='share' />
                        </CardMenu>

                    </CardActions>


                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <Card shadow={5} style={{ minWidth: "550", margin: "auto", height: '550' }}>
                    <CardTitle style={{ color: "#000", height: "176px", backgroundImage: `url(${Background2})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                        HTML5/CSS3 Project #1

                    </CardTitle>
                    <CardText>
                        •	Created  a small scale Blog, Signup, Login, Publishpost component  with REACT JS which hits an end point at NODE JS
and EXPRESS JS backend using the CRUD operation.</CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>codepen</Button>
                        <Button colored>LiveDemo</Button>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name='share' />
                        </CardMenu>

                    </CardActions>


                </Card> 
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <Card shadow={5} style={{ minWidth: "550", margin: "auto", height: '550' }}>
                    <CardTitle style={{
                        color: "#000", height: "176px", backgroundImage: `url(${Background3})`, backgroundPosition: "center", backgroundSize: "cover"
                    }}>
                        Figma Project #1

                    </CardTitle>
                    <CardText>
                        </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>codepen</Button>
                        <Button colored>LiveDemo</Button>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name='share' />
                        </CardMenu>

                    </CardActions>


                </Card>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <Card shadow={5} style={{ minWidth: "550", margin: "auto", height: '550' }}>
                    <CardTitle style={{
                        color: "#000", height: "176px", backgroundImage: `url(${Background4})`, backgroundPosition: "center", backgroundSize: "cover", 
                    }}>
                        Bootstrap Project #1

                    </CardTitle>
                    <CardText>
                        </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>codepen</Button>
                        <Button colored>LiveDemo</Button>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name='share' />
                        </CardMenu>

                    </CardActions>


                </Card>
            )
        }
        else if (this.state.activeTab === 4) {
            return(
                <Card shadow={5} style={{ minWidth: "550", margin: "auto", height: '550' }}>
                    <CardTitle style={{
                        color: "#000", height: "176px", backgroundImage: `url(${Background5})`, backgroundPosition: "center", backgroundSize: "cover"
                    }}>
                        <span style={{marginTop: "200px", fontSize: "120%", fontWeight: "bold"}}>Jquery Project #1</span>

                    </CardTitle>
                    <CardText>
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        
                        <Button colored>LiveDemo</Button>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name='share' />
                        </CardMenu>

                    </CardActions>


                </Card>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>HTML5|CSS3</Tab>
                    <Tab>Figma</Tab>
                    <Tab>Bootstrap</Tab>
                    <Tab>Jquery</Tab>
                </Tabs>
                
                    <Grid>
                        <Cell col={9}>
                            <div className="content"> {this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                   
                
            </div>
        )
    }
}

export default Project;