import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import Input from '../Input/Input'
import Filter from '../Filter/Filter'
import CountriesList from '../CountriesList/CountriesList'
import debounce from 'lodash.debounce'
import './Main.scss'
const Main = () => {
	const [apiURL, setApiURL] = useState('https://restcountries.com/v3.1/all')
	const [loading, setLoading] = useState('true')
	const [data, setData] = useState([])
	const [filterState, setFilterState] = useState('All')
	const [detailCardIsVisible, setDetailCardIsVisible] = useState(true)
	useEffect(() => {
		setLoading(true)
		let cancel
		axios
			.get(apiURL, {
				cancelToken: new axios.CancelToken(c => (cancel = c)),
			})
			.then(res => {
				setData(res.data)
				setLoading(false)
			})

		return () => {
			cancel()
		}
	}, [apiURL])
	const filteredData = data.filter(e => {
		if (filterState === 'All') {
			return data
		}
		return e.region === filterState
	})
	const filterHandler = event => {
		setFilterState(event.target.value)
	}
	const searchHandler = event => {
		if (event.target.value === '') {
			return setApiURL('https://restcountries.com/v3.1/all')
		}
		setApiURL(`https://restcountries.com/v3.1/name/${event.target.value}`)
	}
	const debounceChangeHandler = useCallback(debounce(searchHandler, 500), [])
	const filterAndInputVisiblityHandler = el => {
		setDetailCardIsVisible(el)
	}

	return (
		<section className='mainContent'>
			{detailCardIsVisible && (
				<header>
					<Input onSearch={debounceChangeHandler} />
					<Filter onFilter={filterHandler} region={filterState} />
				</header>
			)}
			<main>
				{loading ? (
					<p className='loading'>Loading please wait...</p>
				) : (
					<CountriesList data={filteredData} onVisibility={filterAndInputVisiblityHandler} />
				)}
			</main>
		</section>
	)
}

export default Main
