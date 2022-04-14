import React from 'react'
import './CountryCard.scss'
const CountryCard = ({ data, onChange }) => {
	return (
		<li className='countryCard' key={data.name.common} onClick={() => onChange(data.name.common)}>
			<img src={data.flags.svg} alt={`flag of ${data.name.common}`} />
			<div className='countryDetails'>
				<p className='countryName'>{data.name.common}</p>
				<p className='countryPopulation'>
					<span>Population:</span> {data.population}
				</p>
				<p className='countryRegion'>
					<span>Region:</span> {data.region}
				</p>
				<p className='countryCapital'>
					<span>Capital:</span> {data.capital}
				</p>
			</div>
		</li>
	)
}

export default CountryCard
