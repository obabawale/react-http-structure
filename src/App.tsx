import { FC } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/dashboard/Dashboard';
interface AppProps {
  title: string;
}

const App: FC<AppProps> = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
