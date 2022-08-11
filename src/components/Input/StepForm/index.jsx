import React from 'react'
import {connect} from 'react-redux'
import {change_step_form_state} from '../../../store/actions/toggle_side'
import TypingCard from '../../typingCard'
import { Steps, Card } from 'antd'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import '../../../style/form.less'

const { Step } = Steps;


const StepForm = (props) => {
    // return (
    //     <div>StepForm</div>
    // );
    
    const {stepFormState,changeState} = props;
    const {current,info} = stepFormState;
    const showStep = () => {
        switch (current) {
          case 1: return <Step2 />
          case 2: return <Step3 />
          default: return <Step1 />
        }
    }
    return (
        <div>
          <TypingCard source='将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成' />
          <Card title='分步表单' bordered={false} style={{ minHeight: 600 }}>
            <Steps style={styles.steps} current={current}>
              <Step title="填写转账信息" />
              <Step title="确认转账信息" />
              <Step title="完成" />
            </Steps>
            <div>{showStep()}</div>
          </Card>
        </div>
    )
}

const styles = {
    steps: {
      maxWidth: 750,
      margin: '16px auto'
    },
    desc: {
      padding: '0 56px',
    }
}


export default connect(
	state => ({
		stepFormState:state.stepFormState,
	}),
	{
		changeState:change_step_form_state,
	}
)(StepForm);