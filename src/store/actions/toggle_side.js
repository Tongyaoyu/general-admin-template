import {TOGGLE_SIDE,CHANGE_STEP_FORM_STATE} from '../constant'

//创建增加一个人的action动作对象
export const create_toggle_side = data => ({type:TOGGLE_SIDE,data:data})

export const change_step_form_state= data => ({type:CHANGE_STEP_FORM_STATE,data:data})



