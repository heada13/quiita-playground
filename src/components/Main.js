import { Route, Routes } from 'react-router-dom';
import Top from './Top';
import Second from './Second';

const Main = () => {
  return(
    <>
        <Routes>
          <Route path='/' element={<Top/>}/>
          <Route path='/mail' element={<Second/>}/>
        </Routes>
    </>
  )
}

export default Main