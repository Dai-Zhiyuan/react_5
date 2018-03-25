import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import './Home.css'
import HomeNavComponent from './nav/nav.js'

export default class HomeComponent extends Component{
    render(){
        return(
            <div className="box">
                <div className="home_cont">
                    {this.props.children}
                </div>
                <div className="home_nav">
                    <HomeNavComponent/>
                </div>
            </div>
        )
    }
}