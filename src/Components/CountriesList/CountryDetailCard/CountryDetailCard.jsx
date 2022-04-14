import React from 'react'

const CountryDetailCard = ({data, onChange}) => {
  return (
    <li className='countryDetailCard'>
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
        <button onClick={onChange}>Back</button>
    </div>
</li>
  )
}

export default CountryDetailCard