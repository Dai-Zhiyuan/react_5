import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Indexcomponent from '../login/LoginComponent.js'
import HeaderComponent from './header/header.js'
import ContainerComponent from './container/container.js'
import NavComponent from './nav/nav.js'

import './home.css'

export default class HomeComponent extends Component{
  
    changeState(data){
       
        this.refs.cont.allData(data);

    }

    componentWillMount(){
        if(window.sessionStorage.getItem("username")){
            console.log(666789789);
        }else{
             this.props.router.push('/login')
        }
    }
   
    render(){
        
        return (
            <div>
                <div className="header">
                    <HeaderComponent  />
                </div>
                <div className="body">
                    <div  className="nav">
                        <NavComponent change={this.changeState.bind(this)} />
                    </div>

                    <div  className="container"  >
                        <ContainerComponent ref="cont" />
                    </div>
                    
                </div>
                
            </div>
        )
    }
}