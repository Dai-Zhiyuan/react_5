import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './nav.css'
import { BrowserRouter as Router, Link,IndexLink} from "react-router";
export default class Indexcomponent extends Component{
    render(){
        return(
            <div className="nnav">
                <ul>
                    <li>
                        
                        <IndexLink to="/home" activeClassName="active" className="sy"><i className="icon iconfont icon-shouye"></i>
                            首页
                        </IndexLink>
                    </li>
                    <li>
                        
                        <Link to="/goodlist" activeClassName="active"><i className="icon iconfont icon-fenlei"></i>分类</Link>
                    </li>
                    <li>
                        
                        <Link to="/community" activeClassName="active"><i className="icon iconfont icon-taolun"></i>社区</Link>
                    </li>
                    <li>
                        
                        <Link to="/cart" activeClassName="active"><i className="icon iconfont icon-gouwuche1"></i>购物车</Link>
                    </li>
                    <li>
                        
                        <Link to="/mine" activeClassName="active"><i className="icon iconfont icon-wode"></i>我的</Link>
                    </li>
                </ul>
            </div>
        )
    }
}