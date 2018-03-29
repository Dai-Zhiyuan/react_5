import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'

import './succee.scss'

export default class SucceedComponent extends Component{
    render(){
        
        let content = null;

        let html =(
            <div id="Modal" onClick={this.props.ob}>
                <div className="zhezhao">
                    <ul className="ModalList-box">
                        <div className="m-t">
                            <Link to="/cart">
                            支付成功!</Link>
                        </div>
                        <div className="m-b">
                            <Link to="/mine">
                            我 的 酒 仙>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        )
        return this.props.show ? html : null;
    }
}