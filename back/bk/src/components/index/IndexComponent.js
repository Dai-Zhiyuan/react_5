import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default class Indexcomponent extends Component{
    render(){
        var html = (<div className="imgWrap"></div>)
              
           
       return  this.props.proTake ? html :null;
        
    }
}