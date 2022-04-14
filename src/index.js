import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.scss'
import { DarkModeContextProvider } from './context/darkmode/darkmodeContext'
const appContainer = document.getElementById('root')
const root = createRoot(appContainer)
root.render(
	<DarkModeContextProvider>
		<App />
	</DarkModeContextProvider>
)
