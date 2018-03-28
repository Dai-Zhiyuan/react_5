import React,{Component} from 'react'
import ReactDOM from 'react-dom'

export default class Indexcomponent extends Component{
    state = {
        height:'100%'
    }
    render(){
        return(
            <div style={{height:this.state.height}}>
                {this.props.children}
            </div>
        )
    }
}