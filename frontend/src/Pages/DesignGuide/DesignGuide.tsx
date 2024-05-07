import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";
import { CompanyKeyMetrics } from "../../company";
import { testIncomeStatementData } from "../../Components/Table/TestData";

type Props = {};

const tableConfig = [
	{
		label: "Market Cap",
		render: (company: any) => company.marketCapTTM,
		subTitle: "Total value of all a company's shares of stock",
	},
];

const DesignPage = (props: Props) => {
	return (
		<>
			<h1>
				Design Guide - This is Finshark's design page. This is where we will
				house variable design aspects of the app
			</h1>
			<RatioList data={testIncomeStatementData} config={tableConfig} />
			<Table data={testIncomeStatementData} config={tableConfig} />
		</>
	);
};

export default DesignPage;
