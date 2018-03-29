import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Link,hashHistory} from 'react-router'

import './SearchComponent.scss'
export default class SearchComponent extends Component{
    componentDidMount(){
        this.refs.input.value = '';
        this.refs.input.focus();
        document.addEventListener('keyup',(e) => {
            if(e.keyCode == '13'){
                if(this.refs.input){
                    let brand = this.refs.input.value;
                    hashHistory.push('/list?brand='+brand) 
                } 
            }
        })
    }
    fuzzysearch(){
        let brand = this.refs.input.value;
        hashHistory.push('/list?brand='+brand) 
    }
    render(){
        return(
            <div id="index_search">
                <img src='./src/front/img/indexlogo.png'/>
                <i className='fa fa-search'></i>
                <Link to='/gotoSearch'><input type="text" placeholder='超值加购价' ref="input"/></Link>
                <button onClick={this.fuzzysearch.bind(this)}>搜索</button>
            </div>
        )
    }
}