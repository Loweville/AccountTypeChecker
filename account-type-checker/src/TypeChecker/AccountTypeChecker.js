import React from 'react';

class AccountTypeChecker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accountType: this.getAccountType(props.accountBalanceHistory)
        };
    }

    getAccountType(accountBalanceHistory) {
        accountBalanceHistory.sort((a,b) => (a.monthNumber > b.monthNumber) ? 1 : -1);

        let result;
        let difference = 0;
        for (let index = 0; index < accountBalanceHistory.length; index++) {
            const elementAmount = accountBalanceHistory[index].account.balance.amount;
            
            if(index < accountBalanceHistory.length - 1) {
                const nextElementAmount = accountBalanceHistory[index+1].account.balance.amount;
                result = difference === (nextElementAmount - elementAmount);
                difference = nextElementAmount - elementAmount;

                if (index > 1 && !result) {
                    break;
                }
            }
        }

        return result ? "A" : "B";
    }

    render() {
        return (<p>{this.state.accountType}</p>);
    }
}

export default AccountTypeChecker;