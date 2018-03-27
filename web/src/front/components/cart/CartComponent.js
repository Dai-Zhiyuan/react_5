import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link,IndexLink} from "react-router";

import './cart.scss'
import HomeNavComponent from '../home/nav/nav.js'

export default class Indexcomponent extends Component{
    componentWillMount(){
        // http.get('',).then((res)=>{
        //     console.log(res);
        // })
    }
    state = {
        
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
                    <ul>
                        <li>
                            <input type="checkbox" />
                            <img src="src/front/img/jiu.png" alt="" />
                            <div className="des">
                                <p>52度 酒鬼原浆酒500ml</p>
                                <p>￥239.00</p>
                                <p id="set">
                                <span id="qty">
                                    <button>+</button>
                                    <span> 1 </span>
                                    <button>-</button>
                                </span>
                                <span> | 删除</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <img src="src/front/img/jiu.png" alt="" />
                            <div className="des">
                                <p>52度 酒鬼原浆酒500ml</p>
                                <p>￥239.00</p>
                                <p id="set">
                                <span id="qty">
                                    <button>+</button>
                                    <span> 1 </span>
                                    <button>-</button>
                                </span>
                                <span> | 删除</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <img src="src/front/img/jiu.png" alt="" />
                            <div className="des">
                                <p>52度 酒鬼原浆酒500ml</p>
                                <p>￥239.00</p>
                                <p id="set">
                                <span id="qty">
                                    <button>+</button>
                                    <span> 1 </span>
                                    <button>-</button>
                                </span>
                                <span> | 删除</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <img src="src/front/img/jiu.png" alt="" />
                            <div className="des">
                                <p>52度 酒鬼原浆酒500ml</p>
                                <p>￥239.00</p>
                                <p id="set">
                                <span id="qty">
                                    <button>+</button>
                                    <span> 1 </span>
                                    <button>-</button>
                                </span>
                                <span> | 删除</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <img src="src/front/img/jiu.png" alt="" />
                            <div className="des">
                                <p>52度 酒鬼原浆酒500ml</p>
                                <p>￥239.00</p>
                                <p id="set">
                                <span id="qty">
                                    <button>+</button>
                                    <span> 1 </span>
                                    <button>-</button>
                                </span>
                                <span> | 删除</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </main>
                <foot id="c_foot">
                    <div className="f_left">
                        <div className="all">
                            <input type="checkbox" className="ipt"/>
                            <span> 全选</span>
                        </div>
                        <div className="price">
                            <p>
                                <b>合计：</b>
                                <span>￥ 0.00</span>
                            </p>
                            <p>
                                优惠：￥ 0.00
                            </p>
                        </div>
                    </div>
                    <div className="f_right"><Link to="/jiesuan">去结算  (0)  </Link></div>
                </foot>
            </div>
        )
    }
}
