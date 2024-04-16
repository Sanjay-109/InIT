import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages & Components
// import IntroPage from './pages/IntroPage'
// import LoginPage from './pages/LoginPage'
// import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import OSPage from './pages/OSPage'
import OScourse from './pages/OScourse'
import DBMSPage from './pages/DBMSPage'
import DBMScourse from './pages/DBMScourse'
import CNPage from './pages/CNPage'
import CNcourse from './pages/CNcourse'
import CAPage from './pages/CAPage'
import CAcourse from './pages/CAcourse'
import DSAPage from './pages/DSAPage'
import DSAcourse from './pages/DSAcourse'
import AdminPage from './pages/AdminPage'
import OSQp from './pages/OSQp'
import DBMSQp from './pages/DBMSQp'
import DSAQp from './pages/DSAQp'
import CNQp from './pages/CNQp'
import CAQp from './pages/CAQp'
import AdminQp from './pages/AdminQp'
import AdminCourses from './pages/AdminCourses'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            {/* <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/> */}
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='/adminqps' element={<AdminQp/>}/>
            <Route path='/admincourses' element={<AdminCourses/>}/>
            {/* <Route path='/home' element={<HomePage/>}/> */}
            <Route path='/os' element={<OSPage/>}/>
            <Route path='/dbms' element={<DBMSPage/>}/>
            <Route path='/cn' element={<CNPage/>}/>
            <Route path='/ca' element={<CAPage/>}/>
            <Route path='/dsa' element={<DSAPage/>}/>
            <Route path='/osqp' element={<OSQp/>}/>
            <Route path='/dbmsqp' element={<DBMSQp/>}/>
            <Route path='/cnqp' element={<CNQp/>}/>
            <Route path='/caqp' element={<CAQp/>}/>
            <Route path='/dsaqp' element={<DSAQp/>}/>
            <Route path='/oscourse' element={<OScourse/>}/>
            <Route path='/cacourse' element={<CAcourse/>}/>
            <Route path='/dsacourse' element={<DSAcourse/>}/>
            <Route path='/cncourse' element={<CNcourse/>}/>
            <Route path='/dbmscourse' element={<DBMScourse/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
