import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginpage.tsx';
import RegisterPage from './pages/registerpage.tsx';
import SettingsPage from './pages/settingspage.tsx';
import Header from './components/Header.tsx';
import HomePage from './pages/homepage.tsx';
import {useState, useEffect } from 'react'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    username: '',
    password:'',
    email:'',
  })
  function storeUser(username, password) {
    setUser({username, password})
  }

  useEffect(() => {
    console.log(user)
    console.log(isLoggedIn)
  }, [user,isLoggedIn])

  function handleLogin(user) {
    setIsLoggedIn(user)

  };

  return (
    <div className="App" >
      <Router>
      <Header user = {user}/>
        <Routes>  
          <Route path='/' element={<LoginPage storeUser={storeUser}/>}/>
          <Route path='/home' element={<HomePage user = {user}/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/settings' element={<SettingsPage user={user} storeUser={storeUser}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
