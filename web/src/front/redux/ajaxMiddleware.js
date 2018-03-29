import http from '../utils/httpclient'

export default function middleware(api){
    return function(dispatch){
        return function(action){
            let {type, types, method = 'get', data = {}, url} = action;

            if(!url){
                return dispatch(action)
            }

            api.dispatch({type});
            if(url){
                return new Promise((resolve, reject) => {
                    http[method](url, data).then(res => {
                        api.dispatch({
                            type,
                            result: res.data
                        })
                        resolve(res.data)
                    }).catch(error => {
                        api.dispatch({
                            type,
                            result: error
                        })
                        reject(error)
                    })
                })

            }
        }
        
    }
}