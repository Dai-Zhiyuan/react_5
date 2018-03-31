import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'

import './IndexNavComponent.scss'


export default class IndexComponent extends Component {
    render(){
        return(
            <div id="indexnav">
                <ul>
                    <li><Link to='list?type=白酒'><img src="./src/front/img/indexnav1.png"/></Link></li>
                    <li><Link to='list?type=葡萄酒'><img src="./src/front/img/indexnav2.png"/></Link></li>
                    <li><Link to='list?type=洋酒'><img src="./src/front/img/indexnav3.png"/></Link></li>
                    <li><Link to='list?type=白酒'><img src="./src/front/img/indexnav4.png"/></Link></li>
                    <li><Link to='list?type=葡萄酒'><img src="./src/front/img/indexnav5.png"/></Link></li>
                    <li><Link to='list?type=白酒'><img src="./src/front/img/indexnav6.png"/></Link></li>
                    <li><Link to='list?type=洋酒'><img src="./src/front/img/indexnav7.png"/></Link></li>
                    <li><Link to='list?type=葡萄酒'><img src="./src/front/img/indexnav8.png"/></Link></li>
                    <li><Link to='list?type=洋酒'><img src="./src/front/img/indexnav9.png"/></Link></li>
                    <li><Link to='list?type=白酒'><img src="./src/front/img/indexnav10.png"/></Link></li>
                </ul>
            </div>
        )
    }
}
    
