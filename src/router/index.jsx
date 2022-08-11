import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import routesList from './routes.js'
import Loading from '../components/Loading'

const Router = () => {
  const isLogin = localStorage.getItem('user')
  //懒加载需要Suspense   首次加载要loading一下
  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
        {routesList.map(({ path, element }) => {
          return  !!isLogin ? <Route path={path} key={path} element={element} /> :
          <Route path='*' key='/login' element={<Navigate replace to='/login' />} />
        })}
      </Routes>
    </Suspense>
    
  )
}
export default Router;