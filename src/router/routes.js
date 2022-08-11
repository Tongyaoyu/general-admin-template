import React, { lazy } from 'react'

//Home Charts Animation OP1-4
const Home = lazy(() => import('../components/Home'))
const Tables = lazy(() => import('../components/Tables'))
const Charts = lazy(() => import('../components/Charts'))
const BasicForm = lazy(() => import('../components/Input/BasicForm'))
const StepForm = lazy(() => import('../components/Input/StepForm'))
const Upload = lazy(() => import('../components/Input/Upload'))
const OP1 = lazy(() => import('../components/Nest/OP1'))
const OP3 = lazy(() => import('../components/Nest/OP3'))
const OP4 = lazy(() => import('../components/Nest/OP4'))

const routesList = [
    { path : '/',element : <Home/> },
    { path : '/tables',element : <Tables/> },
    { path : '/charts',element : <Charts/> },
    { path : '/input/form/basic',element : <BasicForm/> },
    { path : '/input/form/step',element : <StepForm/> },
    { path : '/input/upload',element : <Upload/> },
    { path : '/nest/op1',element : <OP1/> },
    { path : '/nest/op2/op3',element : <OP3/> },
    { path : '/nest/op2/op4',element : <OP4/> },
]

export default routesList
