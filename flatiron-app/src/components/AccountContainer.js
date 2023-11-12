import React, { useEffect, useState } from 'react';
import TransactionList from './TransactionList';
import Search from './Search';
import AddTransactionForm from './AddTransactionForm';

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        setSearchQuery(data);
      })
      .catch((err) => console.log(err));
  }, []);
console.log(transactions)
  function handleSearch(e) {
    setTransactions(
      searchQuery.filter((transactions) => {
        return (transactions.description
          .toLowerCase()
          .includes(e.target.value.toLowerCase()))
      })
    );
    return transactions
  }
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm transactions={transactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;