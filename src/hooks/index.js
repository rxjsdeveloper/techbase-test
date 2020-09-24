import { useContext } from 'react';
import { StateContext } from '../context';

export async function getData(search) {
	const data = await fetch(
		'https://api.covid19api.com/summary',
		{
			headers: {
				'X-Access-Token': '5cf9dfd5-3449-485e-b5ae-70a60e997864'
			}
		}
	);
	const countriesData = await data.json();
	const countries = countriesData.Countries
		.filter(country => search.length ? country.Country.toLowerCase() === search.toLowerCase(): true)
		.map(f => ({
			name: f.Country,
			key: f.CountryCode,
			newConfirmed: f.NewConfirmed,
			newDeaths: f.NewDeaths,
			newRecovered: f.NewRecovered,
			confirmed: f.TotalConfirmed,
			deaths: f.TotalDeaths,
			recovered: f.TotalRecovered,
		}));
	const totals = countriesData.Global;
	return [countries, totals];
}

export function useCountries() {
	const { dispatch } = useContext(StateContext);

	const setCountries = countries => {
		dispatch({
			type: 'SET_COUNTRIES',
			payload: {
				countries,
			},
		});
	};

	const setTotals = totals => {
		dispatch({
			type: 'SET_TOTALS',
			payload: {
				totals,
			},
		});
	};

	return {
		setCountries,
		setTotals,
	};
}

export function useSearch() {
	const { dispatch, state } = useContext(StateContext);

	const setSearch = search => {
		dispatch({
			type: 'SET_SEARCH',
			payload: {
				search,
			},
		});
	};

	return {
		setSearch,
		search: state.search,
	};
}
