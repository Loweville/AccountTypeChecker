import AccountTypeChecker from './TypeChecker/AccountTypeChecker'
import './App.css';

function App() {
  const accountBalanceHistory = [
    {
      monthNumber: 0,
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1,
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2,
      account: {
        balance: { amount: 200 },
      },
    },
    {
      monthNumber: 3,
      account: {
        balance: { amount: 200 },
      },
    }
  ];

  return (
    <div className="App">
          <AccountTypeChecker accountBalanceHistory={accountBalanceHistory} />
    </div>
  );
}

export default App;
