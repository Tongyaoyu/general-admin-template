/* 
	1.该文件是用于创建一个为sider组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/
import {TOGGLE_SIDE,CHANGE_STEP_FORM_STATE} from './constant'

const initCollapsedState = false //初始化状态
function collapsedReducer(preState=initCollapsedState,action){
	const {type,data} = action
	//根据type决定如何加工数据
	switch (type) {
		case TOGGLE_SIDE: 
            return !preState 
		default:
			return preState
	}
}

const initStepForm = {
	current:0,
	info:{}
}
function stepFormReducer(preState=initStepForm,action){
	const {type,data} = action
	switch (type) {
		case CHANGE_STEP_FORM_STATE: 
            return {
				current:data.current,
				info:data.info 
			}
		default:
			return preState
	}
}

export {collapsedReducer,stepFormReducer}