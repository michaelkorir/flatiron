import React from 'react';
import AccountContainer from './components/AccountContainer';

function App() {
  function handleOnSearch(search, setTransactions) {
    setTransactions((transactions) => {
      transactions.filter((transaction) =>
        transaction.description.includes(search)
      );
    });
  }

  return (
    <div className='ui raised segment'>
      <div className='ui segment violet inverted'>
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer handleSearch={handleOnSearch} />
    </div>
  );
}

export default App;