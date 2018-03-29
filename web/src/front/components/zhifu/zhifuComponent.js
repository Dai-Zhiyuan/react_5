import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link,IndexLink} from "react-router";

import './zhifu.scss'

import SucceedComponent from './succeedComponent'

export default class zhifucomponent extends Component{
    state={
        show:false
    }
    showup(){
        this.setState({
            show:true
        })
    }
    filldata(obj){
        this.setState({
            show:false
        }) 
    }
    render(){
        return(
            <div id="zhifu">
                <header id="z_header">
                    <Link to="/jiesuan"><span className="ico"> &nbsp;x</span></Link>
                    <span>支付中心</span>
                    <span className="ico"></span>
                </header>
                <div id="z_main">
                    <p>订单已生成，请您尽快付款</p>
                    <div className="zf_price">
                        <span>支付金额</span>
                        <span id="zfp">￥{sessionStorage.getItem('total')*1+10}</span>
                    </div>
                    <div className="way">
                        <p>支付方式</p>
                        <ul>
                            <li>
                                <div className="w_l">
                                    <img src="src/front/img/zi.png" alt="" />
                                    <div className="zfw">
                                        <span className="z_t">支付宝</span><br />
                                        <span className="z_b">支持大额支付</span>
                                    </div>
                                </div>
                                <div className="w_r">
                                    >
                                </div>
                            </li>
                            <li>
                                <div className="w_l">
                                    <img src="src/front/img/wei.png" alt="" />
                                    <div className="zfw">
                                        <span className="z_t">微信支付</span><br />
                                        <span className="z_b">更快，更便捷支付</span>
                                    </div>
                                </div>
                                <div className="w_r">
                                    >
                                </div>
                            </li>
                            <li>
                                <div className="w_l">
                                    <img src="src/front/img/hua.png" alt="" />
                                    <div className="zfw">
                                        <span className="z_t">花呗</span><br />
                                        <span className="z_b">这月花，下月还</span>
                                    </div>
                                </div>
                                <div className="w_r">
                                    >
                                </div>
                            </li>
                            <li>
                                <div className="w_l">
                                    <img src="src/front/img/yin.png" alt="" />
                                    <div className="zfw">
                                        <span className="z_t">银联在线</span><br />
                                        <span className="z_b">支持个种信用卡支付</span>
                                    </div>
                                </div>
                                <div className="w_r">
                                    >
                                </div>
                            </li>
                            <li>
                                <div className="w_l">
                                    <img src="src/front/img/yi.png" alt="" />
                                    <div className="zfw">
                                        <span className="z_t">翼付宝</span><br />
                                        <span className="z_b">电信旗下支付品牌</span>
                                    </div>
                                </div>
                                <div className="w_r">
                                    >
                                </div>
                            </li>
                        </ul>
                    </div>
                    <p className="tishi">安全提醒：酒仙网不会以任何理由，要求您点击链接进行退款或重新付款，谨防诈骗。有关订单和售后问题，酒仙网客服仅会通过电话: <span>010-60157999</span>与您沟通</p>
                    <div className="main_b">
                        <input type="button" value="支    付" onClick={this.showup.bind(this)}/>
                    </div>
                </div>
                <SucceedComponent show={this.state.show}/>
            </div>
        )
    }
}