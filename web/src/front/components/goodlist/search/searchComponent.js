import React,{Component} from 'react'
import ReactDOM from 'react-dom'

export default class Indexcomponent extends Component{
    render(){
        return(
            <div className="hyz_search">
                <div className="search">
                    <input type="text" placeholder="请输入搜索信息"/>
                    <i className="fa fa-search"></i>
                    <span></span>
                </div>
            </div>
        )
    }
}