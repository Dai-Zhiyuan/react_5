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
                        
                        <IndexLink to="/home" activeClassName="active" className="sy"><i className="fa fa-home"></i>
                            首页
                        </IndexLink>
                    </li>
                    <li>
                        
                        <Link to="/goodlist" activeClassName="active"><i className="fa fa-th-large"></i>分类</Link>
                    </li>
                    <li>
                        
                        <Link to="/community" activeClassName="active"><i className="fa fa-th-large"></i>社区</Link>
                    </li>
                    <li>
                        
                        <Link to="/cart" activeClassName="active"><i className="fa fa-shopping-cart"></i>购物车</Link>
                    </li>
                    <li>
                        
                        <Link to="/mine" activeClassName="active"><i className="fa fa-user-o"></i>我的</Link>
                    </li>
                </ul>
            </div>
        )
    }
}