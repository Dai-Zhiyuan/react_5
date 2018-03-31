import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link,IndexLink} from "react-router";

import './cart.scss'
import http from '../../utils/httpclient.js'

export default class Cartcomponent extends Component{
    state = {
       dataset : [],
       being:null,
       total: 0,
       alltotal: null,
       being1:null
   }

    componentWillMount(){
        var total = 0;
        var p_arr = [];
        // console.log(sessionStorage.getItem('username'))
        //http://10.3.136.55:8181/update?db=cart&_id=7&qty=2
        http.get('http://10.3.136.55:8181/getCart?username='+sessionStorage.getItem('username')).then((res)=>{
            this.setState({
                dataset: res.data
            })
            
            res.data.forEach(function(item){
                total+=item.price*item.qty
                
            })
            this.setState({
                being:total
            })
            
        })
      
    }
    All(e){

        if(e.target.checked){
            var allqty = 0;
            var allprice = 0;
            var alltotal = 0;

            for(var i=0;i<this.refs.ipt.children.length;i++){
                this.refs.ipt.children[i].children[0].checked="checked";
                alltotal += this.refs.ipt.children[i].childNodes[2].childNodes[2].childNodes[0].childNodes[1].innerText * (this.refs.ipt.children[i].childNodes[2].childNodes[1].innerText).substring(1)
                    // console.log(alltotal)
            }
            this.setState({
                total:alltotal
            })
        }else if(!e.target.checked){
            for(var i=0;i<this.refs.ipt.children.length;i++){
                this.refs.ipt.children[i].children[0].checked=false;
            }
            this.setState({
                total:0
            })
        }
    }
    One(e){
        var gouxuan = 0;
        for(var i=0;i<this.refs.ipt.children.length;i++){
            // console.log(this.refs.ipt.children[i].children[0].checked)
            // console.log(this.refs.allcheck.checked)
            if(this.refs.ipt.children[i].children[0].checked==false){
                this.refs.allcheck.checked=false;
            }else{
                gouxuan++;
            }
        }
        if(this.refs.ipt.children.length==gouxuan){
            this.refs.allcheck.checked=true;
        }
        if(e.target.checked){
            var oneTotal = null;
            var OnePrice = e.target.nextSibling.nextSibling.childNodes[1].innerText;
            OnePrice = OnePrice.substring(1)
            // console.log(OnePrice);
            var OneQty = e.target.nextSibling.nextSibling.childNodes[2].childNodes[0].childNodes[1].innerText;
            // console.log(OneQty)
            oneTotal += OnePrice*OneQty
            this.state.being1 += oneTotal;
            // console.log(this.state.being1)
            this.setState({
                total:0
            })
            this.setState({
                total:this.state.being1
            })

        }else if(!e.target.checked){
            var oneTotal = null;
            var OnePrice = e.target.nextSibling.nextSibling.childNodes[1].innerText;
            OnePrice = OnePrice.substring(1)
            // console.log(OnePrice);
            var OneQty = e.target.nextSibling.nextSibling.childNodes[2].childNodes[0].childNodes[1].innerText;
            // console.log(OneQty)
            oneTotal += OnePrice*OneQty
            this.state.being1 -= oneTotal;
            // console.log(this.state.being1)
            this.setState({
                total:0
            })
            this.setState({
                total:this.state.being1
            })
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
        var total = null
        http.get('http://10.3.136.55:8181/delete?db=cart&_id='+e.target.parentNode.parentNode.parentNode.id).then((res)=>{
            this.setState({
                dataset: res.data
            })

        })
        
        http.get('http://10.3.136.55:8181/getCart?username='+sessionStorage.getItem('username')).then((res)=>{
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

        // for(var i=0;i<this.refs.ipt.children.length;i++){

        // }
        if(this.refs.ipt.children.length==1){
             this.refs.allcheck.checked=false;
        }

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
                                    <input type="checkbox" className="input" data-id={idx} onClick={this.One.bind(this)}/>
                                    <img src={item.img} alt="" />
                                    <div className="des">
                                        <p>{item.name}</p>
                                        <p id="price">￥<span className="pri" ref="price">{item.price}</span></p>
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
                            <input type="checkbox" ref="allcheck" className="ipt" onClick={this.All.bind(this)}/>
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
