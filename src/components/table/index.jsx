import React from 'react';
import { Table } from 'antd';
import { flag } from 'country-emoji';

const order = (a, b) => parseInt(a) - parseInt(b);

const withFlag = countryName => flag(countryName) ?  `${flag(countryName)} ${countryName}` :  countryName;

const CustomTable = ({ dataSource }) => {
	const columns = [
		{
			title: 'Country',
			dataIndex: 'name',
			key: 'name',
			render: countryName => (
				<span>{withFlag(countryName)}</span>
			),
		},
		{
			title: 'New confirmed',
			dataIndex: 'newConfirmed',
			key: 'newConfirmed',
			sorter: {
				compare: (a, b) => order(a.newConfirmed, b.newConfirmed),
			},
		},
		{
			title: 'Total confirmed',
			dataIndex: 'confirmed',
			key: 'confirmed',
			sorter: {
				compare: (a, b) => order(a.confirmed, b.confirmed),
			},
		},
		{
			title: 'New deaths',
			dataIndex: 'newDeaths',
			key: 'newDeaths',
			sorter: {
				compare: (a, b) => order(a.newDeaths, b.newDeaths),
			},
		},
		{
			title: 'Total deaths',
			dataIndex: 'deaths',
			key: 'deaths',
			sorter: {
				compare: (a, b) => order(a.deaths, b.deaths),
			},
		},
		{
			title: 'New recovered',
			dataIndex: 'newRecovered',
			key: 'newRecovered',
			sorter: {
				compare: (a, b) => order(a.newRecovered, b.newRecovered),
			},
		},
		{
			title: 'Total recovered',
			dataIndex: 'recovered',
			key: 'recovered',
			sorter: {
				compare: (a, b) => order(a.recovered, b.recovered),
			},
		},
	];

	return <Table pagination={true} columns={columns} dataSource={dataSource}/>;
};

export default CustomTable;
