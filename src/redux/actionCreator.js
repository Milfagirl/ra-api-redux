export const ADD_SERVICE = 'ADD_SERVICE'
export const REMOVE_SERVICE = 'REMOVE_SERVICE'
export const CHANGE_SERVICE_FIELD = 'CHANGE_SERVICE_FIELD'
export const CHANGE_SERVICE = 'CHANGE_SERVICE'
export const CANCEL_CHANGE_SERVICE = 'CANCEL_CHANGE_SERVICE'

export const FETCH_SERVICES_REQUEST = 'FETCH_SERVICES_REQUEST'
export const FETCH_SERVICES_ERROR = 'FETCH_SERVICES_ERROR'
export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS'

export const DELETE_SERVICES_REQUEST = 'DELETE_SERVICES_REQUEST'
export const DELETE_SERVICES_SUCCESS = 'DELETE_SERVICES_SUCCESS'
export const DELETE_SERVICES_ERROR = 'DELETE_SERVICES_ERROR'

//button save
export function fetchServicesRequest() {
   return {type: FETCH_SERVICES_REQUEST}
   
}
export function fetchServicesSuccess(items) {
    return {type: FETCH_SERVICES_SUCCESS, payload: {items}}
}

export function fetchServicesError(error) {
    return {type: FETCH_SERVICES_ERROR, payload: {error}}
}

export function deleteServicesRequest() {
    return {type: DELETE_SERVICES_REQUEST}
    
}
export function deleteServicesSuccess() {
    return {type: DELETE_SERVICES_SUCCESS}
}

 export function deleteServicesError(error) {
     return {type: DELETE_SERVICES_ERROR, payload: {error}}
 }

//button delete
export function removeService(id) {
    return {type: REMOVE_SERVICE, payload : {id}}
}

//изменение input
export function changeServiceField(name, value) {  
    return {type: CHANGE_SERVICE_FIELD, payload : {name, value}}
}
 //редактирование данных
 export function changeService(id) {
    return {type: CHANGE_SERVICE, payload : {id}}
}

//отмена редактирования данных
export function cancelChangeService(flag) {
    return {type: CANCEL_CHANGE_SERVICE, payload : {flag}}
}

