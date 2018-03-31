import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import './header.css'

export default class HeaderComponent extends Component{
   
    render(){
        return (
             <div className="header">
                <h1>第五组后台管理系统</h1>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" >中英文切换</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" >
                        
                        <option value="en">en</option>
                        <option value="cn">cn</option>
                    </select>
                    
                </div>
            </div>
        )
    }
}