import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import StatisticsBox from './components/StatisticsBox';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import './App.css';
import axios from 'axios';

const App = () => {
  const [month, setMonth] = useState('3'); // Default month as number
  const [transactions, setTransactions] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [priceRangeData, setPriceRangeData] = useState({});
  const [categoryData, setCategoryData] = useState({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10); // Default pagination limit
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch data based on month and page change
  useEffect(() => {
    fetchData();
  }, [month, page, searchTerm]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/combined-data?month=${month}`, {
        params: {
          month, 
          page,
          limit,
          search: searchTerm,
        }
      });

      const {
        transactions,
        totalTransactionsCount,
        salesStatistics,
        barChart,
        pieChart,
      } = response.data;

      setTransactions(transactions);
      setStatistics(salesStatistics);
      setPriceRangeData(barChart);
      setCategoryData(pieChart);
      setTotalTransactions(totalTransactionsCount);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (
    <div className="dashboard">
      <h1>Transaction Dashboard</h1>
      <div className="controls">
        <label>Select Month: </label>
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>

      <StatisticsBox statistics={statistics} />
      <TransactionTable 
        transactions={transactions} 
        totalTransactions={totalTransactions} 
        page={page} 
        limit={limit}
        onPageChange={setPage} 
        onSearch={setSearchTerm}
      />
      <BarChart data={priceRangeData} />
      <PieChart data={categoryData} />
    </div>
  );
};

export default App;
