import { useState, FC } from 'react'
import './App.css'
import Login from './components/Login/Login';

interface AppProps {
  title: string;
}

const App: FC<AppProps> = ({ title }) => {
  // const [count, setCount] = useState(0)
  const token = null;
  if (!token) {
    return <Login />
  }

  return (
    <>
      <h1>{title}</h1>
      Hello vite
    </>
  )
}

export default App
