import React, { useEffect, useState } from 'react';
import 'react-dropdown/style.css';
import { StyledWrapper } from './styled';
import { getData, useSearch } from '../../hooks';
import { Input } from 'antd';
import { Col, Row, Card, Statistic } from 'antd';
import Table from '../table';

const { Search } = Input;
const useCoronaVirusData = () => {
	const { search } = useSearch();
	const [fetchedCountries, setFetchedCountries] = useState([]);
	const [fetchedTotals, setFetchedTotals] = useState({});

	useEffect(() => {
		getData(search).then(([countries, totals]) => {
			setFetchedCountries(countries);
			setFetchedTotals(totals);
		});
	}, [search]);

	return [fetchedCountries, fetchedTotals];
};

const Content = props => {
	const [countries, totals] = useCoronaVirusData();
	const [searchTerm, setSearchTerm] = useState();

	const filteredData = countries.filter(({ name }) =>
		searchTerm
			? name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
			: true,
	);
	return (
		<div>
			<Row>
				<Col span={4} align="center">
					<Card bordered={false}>
						<Statistic
							title="New confirmed"
							groupSeparator="."
							value={totals.NewConfirmed}
							valueStyle={{ color: 'blue' }}
						/>
					</Card>
				</Col>
				<Col span={4} align="center">
					<Card bordered={false}>
						<Statistic
							title="Confirmed"
							groupSeparator="."
							value={totals.TotalConfirmed}
							valueStyle={{ color: 'darkblue' }}
						/>
					</Card>
				</Col>
				<Col span={4} align="center">
					<Card bordered={false}>
						<Statistic
							title="New deaths"
							groupSeparator="."
							value={totals.NewDeaths}
							valueStyle={{ color: 'crimson' }}
						/>
					</Card>
				</Col>
				<Col span={4} align="center">
					<Card bordered={false}>
						<Statistic
							title="Deaths"
							groupSeparator="."
							value={totals.TotalDeaths}
							valueStyle={{ color: 'darkred' }}
						/>
					</Card>
				</Col>
				<Col span={4} align="center">
					<Card bordered={false}>
						<Statistic
							title="New recovered"
							groupSeparator="."
							value={totals.NewRecovered}
							valueStyle={{ color: 'greenyellow' }}
						/>
					</Card>
				</Col>
				<Col span={4} align="center">
					<Card bordered={false}>
						<Statistic
							title="Recovered"
							groupSeparator="."
							value={totals.TotalRecovered}
							valueStyle={{ color: 'green' }}
						/>
					</Card>
				</Col>

			</Row>
			<Row justify="center">
				<Col span={8}>
					<Search
						size="large"
						placeholder="Search by country name"
						onChange={element => setSearchTerm(element.target.value)}
					/>
				</Col>
			</Row>
			<StyledWrapper>
				<Table dataSource={filteredData} />
			</StyledWrapper>
		</div>
	);
};

export default Content;
