import { legacy_createStore as createStore,combineReducers} from 'redux'
import {collapsedReducer,stepFormReducer} from './reducers'

//汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
	collapsed:collapsedReducer,
	stepFormState:stepFormReducer
})
const store = createStore(allReducer)
export default store
