const router = require('express').Router();
const {
    getTransactions,
    getStatistics,
    getBarChart,
    getPieChart,
    getCombinedData
} = require('../controllers/transactionController');

// Route for getting transaction data
router.get('/transactions', getTransactions);

// Route for getting statistics by month
router.get('/statistics', getStatistics);

// Route for getting bar chart data
router.get('/bar-chart', getBarChart);

// Route for getting pie chart data
router.get('/pie-chart', getPieChart);

// Route for getting combined data from all three APIs
router.get('/combined-data', getCombinedData);

module.exports = router;
