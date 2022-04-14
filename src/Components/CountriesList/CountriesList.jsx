import React, { useState } from 'react'
import './CountriesList.scss'
import CountryCard from './CountryCard/CountryCard'
import CountryDetailCard from './CountryDetailCard/CountryDetailCard'
const CountriesList = ({ data, onVisibility }) => {
	const [detailsDisplay, setDetailsDisplay] = useState('')
	const [detailCardIsVisible, setDetailCardIsVisible] = useState(false)
	const changeHandler = el => {
		setDetailsDisplay(el)
		setDetailCardIsVisible(true)
		onVisibility(detailCardIsVisible)
	}
	const clearDetailsDisplay = () => {
		setDetailsDisplay('')
		setDetailCardIsVisible(false)
		onVisibility(detailCardIsVisible)
	}
	return (
		<ul className='countriesList'>
			{data.map(e => {
				if (e.name.common === detailsDisplay) {
					return (
						<CountryDetailCard key={e.name.common} data={e} onChange={clearDetailsDisplay} />
					)
				}
					return !detailCardIsVisible && <CountryCard key={e.name.common} data={e} onChange={changeHandler} />
			})}
		</ul>
	)
}

export default CountriesList
