import { useContext } from 'react'
import './Navbar.scss'
import { DarkModeContext } from '../../context/darkmode/darkmodeContext'
const Navbar = () => {
	const { darkMode, dispatch } = useContext(DarkModeContext)
	return (
		<nav className='navbar'>
			<h1>Where in the world?</h1>
			<button
				onClick={() => {
					dispatch({ type: 'TOGGLE' })
				}}>
				{darkMode ? 'Light mode' : 'Dark mode'}
			</button>
		</nav>
	)
}

export default Navbar
