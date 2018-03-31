import http from '../utils/httpclient'
import * as constants from '../component/datagrid/datagridconstants'

export default function(api){
    return function(dispatch){
        //dispatch
        return function(action){
            let {type, types, url, data, method = 'get', name} = action;
            // console.log(JSON.stringify(action));
            if(!url){
                //手动调用 reducer
               return dispatch(action)
            }

            dispatch({type: constants.Requesting})

            http[method](url, data).then((res) => {
                let _action = {
                    type: constants.Requested,
                    name,
                    result: res.data
                }
                dispatch(_action)
            }).catch((error) => {
                dispatch({type: constants.RequestError})
            })
        }
    }
}