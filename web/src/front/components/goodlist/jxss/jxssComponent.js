import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import DatagridComponent from '../datagrid/datagridComponent'

export default class Indexcomponent extends Component{
    render(){
        return(
            <div>
                <DatagridComponent type={{type:'酒仙食尚'}}/>
            </div>
        )
    }
}