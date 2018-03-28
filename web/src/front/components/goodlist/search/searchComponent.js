import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Link,hashHistory} from 'react-router'
import './search.scss'
export default class Indexcomponent extends Component{
    componentDidMount(){
        this.refs.input.value = '';
        this.refs.input.focus()
        document.addEventListener('keyup',(e) => {
            if(e.keyCode == '13'){
                if(this.refs.input){
                    let brand = this.refs.input.value;
                    hashHistory.push('/list?brand='+brand) 
                }
                
            }
        })
    }
    search(idx){
        // console.log(idx)
        hashHistory.push('/list?brand='+idx)
    }
    onsearch(){
        let brand = this.refs.input.value;
        hashHistory.push('/list?brand='+brand)        
    }
    render(){
     
        return(
            <div className="hyz_search">
                <div className="search">
                    <Link to="/goodlist">
                        <i className="fa fa-chevron-left" style={{padding:"3px 5px"}}></i>
                    </Link>
                    <input type="text" ref="input" placeholder="请输入搜索信息" id="search"/>
                    <label onClick={this.onsearch.bind(this)} htmlFor="search">搜索</label>
                    <i className="fa fa-search"></i>
                </div>
                <h3>热门搜索</h3>
                <div className="hostSearch">
                    <span onClick={this.search.bind(this,'茅台')}>茅台</span>
                    <span onClick={this.search.bind(this,'五粮液')}>五粮液</span>
                    <span onClick={this.search.bind(this,'剑南春')}>剑南春</span>
                    <span onClick={this.search.bind(this,'泸州老窖')}>泸州老窖</span>
                    <span onClick={this.search.bind(this,'汾酒')}>汾酒</span>
                    <span onClick={this.search.bind(this,'洋河')}>洋河</span>  

                </div>
            </div>
        )
    }
}