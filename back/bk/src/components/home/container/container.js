import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Products from '../../products/products.js'
import ReactUsers from '../../reactUsers/reactUsers.js'
import IndexComponent from '../../../components/index/IndexComponent.js'



import './container.scss'
export default class ContainerComponent extends Component{
    state ={
        proData:[],
        userData:[],
        imgShow:true,

    }
    allData(data){
        
        this.setState({
            proData:data.proData,
            userData:data.userData,
            imgShow:data.imgShow,
        })
       
                
          
    }
  

    render(){
        console.log(this.state)
        return (
            <div>
               <IndexComponent proTake={this.state.imgShow}/>
               <Products proTake={this.state.proData} />
               <ReactUsers proTake={this.state.userData}/>
            </div>
        )
    }
}