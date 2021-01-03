import { createStore, combineReducers } from 'redux'
import serviceAdd from './reducers/serviceAdd'
import serviceList from './reducers/serviceList'

const reducer = combineReducers({
    serviceAdd,
    serviceList
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store