import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link,IndexLink} from "react-router";

import './cart.scss'
import http from '../../utils/httpclient.js'

export default class Cartcomponent extends Component{
    state = {
        dataset : [],
        total: null
    }
    componentWillMount(){
        var total = 0;
        //http://10.3.136.55:8181/update?db=cart&_id=7&qty=2
        http.get('http://10.3.136.55:8181/getCart?username=hyz').then((res)=>{
            this.setState({
                dataset: res.data
            })
            
            res.data.forEach(function(item){
                total+=item.price*item.qty
                
            })
            this.setState({
                total:total
            })
            
        })
    }
    All(e){
        if(e.target.checked){
            for(var i=0;i<this.refs.ipt.children.length;i++){
                this.refs.ipt.children[i].children[0].checked="checked";
            }
        }else if(!e.target.checked){
            for(var i=0;i<this.refs.ipt.children.length;i++){
                this.refs.ipt.children[i].children[0].checked=false;
            }
        }
    }
    carAdd(e){
        if(e.target.className=="jia"){
            e.target.previousSibling.innerText++;

        } else if (e.target.className=="jian"){
            if(e.target.nextSibling.innerText==1){
                return
            }
            e.target.nextSibling.innerText--;
        }
    }
    del(e){
        http.get('http://10.3.136.55:8181/delete?db=cart&_id='+e.target.parentNode.parentNode.parentNode.id).then((res)=>{
            this.setState({
                dataset: res.data
            })
        })
        var total = 0;
        //http://10.3.136.55:8181/update?db=cart&_id=7&qty=2
        http.get('http://10.3.136.55:8181/getCart?username=hyz').then((res)=>{
            this.setState({
                dataset: res.data
            })
            // console.log(res.data)
            res.data.forEach(function(item){
                total+=item.price*item.qty
                
            })
            this.setState({
                total:total
            })
        })
    }
    jiesuan(){
        sessionStorage.setItem('total', this.state.total);
    }
    render(){
        return(
            <div id="cart">
                <header id="c_header">
                <Link to="/index"><span className="ico">&lt;</span></Link>
                    <span>购物车</span>
                    <span className="ico iconfont icon-liebiao"></span>
                </header>
                <main id="c_main">
                    <ul ref="ipt">
                        {
                        this.state.dataset.map((item,idx) => {
                            return(
                                <li key={item.id} id={item._id} data-id={idx} ref="li" onClick={this.carAdd}>
                                    <input type="checkbox" className="input" />
                                    <img src={item.img} alt="" />
                                    <div className="des">
                                        <p>{item.name}</p>
                                        <p id="price">￥<span>{item.price}</span></p>
                                        <p id="set">
                                        <span id="qty">
                                            <button className="jian">-</button>
                                            <span className="qty" ref="qty"> {item.qty} </span>
                                            <button className="jia">+</button>
                                        </span>
                                        <span onClick={this.del.bind(this)}> | 删除</span>
                                        </p>
                                    </div>
                                </li>
                            )
                        })
                        }
                    </ul>
                </main>
                <foot id="c_foot">
                    <div className="f_left">
                        <div className="all">
                            <input type="checkbox" className="ipt" onClick={this.All.bind(this)}/>
                            <span> 全选</span>
                        </div>
                        <div className="price">
                            <p>
                                <b>合计：</b>￥
                                <span> {this.state.total}</span>
                            </p>
                            <p>
                                优惠：￥ 20.00
                            </p>
                        </div>
                    </div>
                    <div className="f_right"><Link to="/jiesuan" onClick={this.jiesuan.bind(this)}>去结算 > </Link></div>
                </foot>
            </div>
        )
    }
   
}
