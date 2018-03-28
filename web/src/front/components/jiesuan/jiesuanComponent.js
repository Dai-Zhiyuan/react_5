import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link,IndexLink} from "react-router";

import './jiesuan.scss'

export default class Indexcomponent extends Component{
    render(){
        return(
            <div id="jiesuan">
                <header id="j_header">
                    <Link to="/cart"><span className="ico">&lt;</span></Link>
                    <span>填写订单</span>
                    <span className="ico"></span>
                </header>
                <div id="j_main">
                    <div className="site">
                        <p></p>
                        <div className="user">
                            <i><span>收货人：dzy</span>
                            <span>132****2244</span></i>
                            <i><span>广东省 广州市 天河区 天河客运站</span>
                            <span>></span></i>
                        </div>
                    </div>
                    <div className="goods">
                        <ul>
                            <li>
                                <img src="src/front/img/jiu.png" />
                                <div className="xinxi">
                                    <i>
                                        <span>52度 酒鬼原浆酒</span>
                                        <span>￥29.00</span>
                                    </i>
                                    <i>
                                        <span>500ml+酒器</span>
                                        <span>x1</span>
                                    </i>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="zhifu">
                        <div className="z_t">
                            <span>支付方式</span>
                            <span><input type="radio" />在线支付</span>
                            <span><input type="radio" />货到付款</span>
                        </div>
                        <div className="z_b">
                            <span>发票信息</span>
                            <span>不需要发票 > </span>
                        </div>
                    </div>
                    <div className="youhui">
                        <div className="h_t">
                            <span>优惠券</span>
                            <span>无优惠券可用 > </span>
                        </div>
                        <div className="h_c">
                            <span> 返&nbsp;&nbsp;现 </span>
                            <span>暂无可用</span>
                        </div>
                        <div className="h_b">
                            <span> 余&nbsp;&nbsp;额 </span>
                            <span>暂无可用</span>
                        </div>
                    </div>
                    <div className="liuyan">
                        <input type="textarea" placeholder="给商家留言，限45字"/>
                        <p><input type="radio" />这是一个礼品单</p>
                    </div>
                    <div className="price">
                        <div className="p_t">
                            <span>商品金额</span>
                            <span className="p">￥29.00 </span>
                        </div>
                        <div className="p_b">
                            <span className="icon iconfont icon-27_zhuyi">运费 </span>
                            <span className="p">+ ￥10.00</span>
                        </div>
                    </div>
                </div>
                <foot id="j_foot">
                    <div className="f_left">
                        <div className="price">
                            <p>
                                实付金额：<span>￥0.00</span>
                            </p>
                        </div>
                    </div>
                    <div className="f_right">
                        <Link to="/zhifu">提交订单</Link>
                    </div>
                </foot>
            </div>
        )
    }
}