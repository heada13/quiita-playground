import { Route, Routes } from 'react-router-dom';
// import Top from './Top';
// import Second from './Second';
import { lazy, Suspense } from 'react';

const LazyTop = lazy(() => import('./Top'))
const LazySecond = lazy(() => import('./Second'))

const Main = () => {
  return(
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<LazyTop/>}/>
          <Route path='/mail' element={<LazySecond/>}/>
        </Routes>
      </Suspense>
    </>
  )
}

export default Main