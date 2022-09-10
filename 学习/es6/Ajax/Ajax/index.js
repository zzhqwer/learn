import Ajax from './Ajax.js'
import {
    ERROR_HTTP_CODE,
    ERROR_HTTP_CODE_TEXT,
    ERROR_REQUEST_CODE,
    ERROR_REQUEST_CODE_TEXT,
    ERROR_TIMEOUT_CODE,
    ERROR_TIMEOUT_CODE_TEXT,
    ERROR_ABORT_CODE,
    ERROR_ABORT_CODE_TEXT
} from './constants.js'
const ajax = (url, options) => {
    // return new Ajax(url, options).getXHR()
    let xhr
    const p = new Promise((resolve, reject) => {
        xhr = new Ajax(url, {
            ...options,
            ...{
                success(response) {
                    resolve(response)
                },
                httpCOdeError(status) {
                    reject({
                        type: ERROR_HTTP_CODE,
                        text: `${ERROR_HTTP_CODE_TEXT}${status}`
                    })
                },
                error(xhr) {
                    reject({
                        type: ERROR_REQUEST_CODE,
                        text: `${ERROR_REQUEST_CODE_TEXT}${xhr}`
                    })
                },
                abort(xhr) {
                    reject({
                        type: ERROR_ABORT_CODE,
                        text: `${ERROR_ABORT_CODE_TEXT}${xhr}`
                    })
                },
                timeout(xhr) {
                    reject({
                        type: ERROR_TIMEOUT_CODE,
                        text: `${ERROR_TIMEOUT_CODE_TEXT}${xhr}`
                    })
                }
            }
        }).getXHR()
    })
    p.xhr = xhr
    p.ERROR_HTTP_CODE = ERROR_HTTP_CODE
    p.ERROR_REQUEST_CODE = ERROR_REQUEST_CODE
    p.ERROR_TIMEOUT_CODE = ERROR_TIMEOUT_CODE
    p.ERROR_ABORT_CODE = ERROR_ABORT_CODE
    return p
}
const get = (url, options) => {
    return new Ajax(url, { ...options, method: 'GET' }).getXHR()
}

const getJSON = (url, options) => {
    return ajax(url, { ...options, method: 'GET', responseType: 'json' })
}

const post = (url, options) => {
    return ajax(url, { ...options, method: 'POST' })
}
export { ajax, get, getJSON, post }