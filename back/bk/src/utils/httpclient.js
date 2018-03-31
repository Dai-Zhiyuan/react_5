import http from 'superagent'

const apiBaseUrl = 'http://localhost:88/';

function filterUrl(url){
    if(url.startsWith('http')){
        return url;
    } else {
        return apiBaseUrl + url;
    }
}

export function get(url, params){
        return new Promise((resolve, reject) => {
            http.get(filterUrl(url)).query(params || {}).end((error, res) => {
                if(error){
                    reject(error)
                } else {
                    resolve(res.body)
                }
            })
        })
    }



export function post(url, params){
        return new Promise((resolve, reject) => {
            http.post(filterUrl(url))
            .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            .send(params || {})
            .end((error, res) => {
                if(error){
                    reject(error)
                } else {
                    resolve(res.body)
                }
            })
        })
    }
