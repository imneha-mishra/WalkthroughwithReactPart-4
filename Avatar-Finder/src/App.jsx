import { Route, Routes } from 'react-router-dom'
import Logo from './Component/Logo'
import Users from './Component/Routes/Users'
import UserInfo from './Component/Routes/UserInfo'

function App() {
  return (
    <div>
      <div className=' app min-h-screen flex pr-20 pl-20 pt-2'>
        <div className='container  py-3'> 
          <Logo/> 
          <Routes>
            <Route path='/' element={<Users/>}> </Route>
            <Route path='/:login' element={<UserInfo/>}> </Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
