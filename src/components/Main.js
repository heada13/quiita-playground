import { Route, Router, Routes, createBrowserRouter } from 'react-router-dom';
// import Top from './Top';
// import Second from './Second';
import { lazy, Suspense, useState, useTransition } from 'react';
const LazyTop = lazy(() => import('./Top'))
const LazySecond = lazy(() => import('./Second'))


// const SuspenseRouter = ({ children, history, ...config }) => {
//   const [startTransition, isPending] = useTransition(config,() => ({
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 1 },
//   }));
//   const [suspenseHistory] = useState(() => {
//     const { push, replace, go } = history;

//     history.push = (...args) => {
//       startTransition(() => { push.apply(history, args); });
//     };
//     history.replace = (...args) => {
//       startTransition(() => { replace.apply(history, args); });
//     };
//     history.go = (...args) => {
//       startTransition(() => { go.apply(history, args); });
//     };
//   });

//   suspenseHistory.isPending = isPending;

//   return (
//     <Router history={suspenseHistory}>
//       {children}
//     </Router>
//   );
// };

// const history = createBrowserRouter();

const Main = () => {
  return(
    <>
      {/* <SuspenseRouter history={history} timeoutMs={2000}> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<LazyTop/>}/>
            <Route path='/mail' element={<LazySecond/>}/>
          </Routes>
        </Suspense>
      {/* </SuspenseRouter> */}
    </>
  )
}

export default Main