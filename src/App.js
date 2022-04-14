import {useContext} from 'react'
import './App.scss'
import Navbar from './Components/Nav/Navbar';
import Main from './Components/Main/Main'
import {DarkModeContext} from './context/darkmode/darkmodeContext'
function App() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={darkMode ? 'App darkmode': 'App'}>
      <Navbar />
      <Main></Main>
    </div>
  );
}

export default App;
