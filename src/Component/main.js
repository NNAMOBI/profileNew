import React from 'react'
import LandingPage from './LandingPage'
import { Switch, Route } from 'react-router-dom'
import Contact from './Contact'
import Resume from './resume'
import AboutMe from './aboutMe'
import Project from './project'


const Main = () => (
    <Switch>
        <Route exact path='/' component={LandingPage}></Route>
        <Route  path='/aboutme' component={AboutMe}></Route>
        <Route  path='/contact' component={Contact}></Route>
        <Route  path='/projects' component={Project}></Route>
        <Route  path='/resume' component={Resume}></Route>
        
    </Switch>
)

export default Main; 
