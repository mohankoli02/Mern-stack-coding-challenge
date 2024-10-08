import React from 'react';

const StatisticsBox = ({ statistics }) => {
  return (
    <div className="statistics-box">
      <h2>Statistics</h2>
      <div className="stat">
        <strong>Total Sales:</strong> ${statistics.totalSale}
      </div>
      <div className="stat">
        <strong>Sold Items:</strong> {statistics.soldCount}
      </div>
      <div className="stat">
        <strong>Unsold Items:</strong> {statistics.unsoldCount}
      </div>
    </div>
  );
};

export default StatisticsBox;
