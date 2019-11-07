import React from 'react';
import BaseCard from '../components/BaseCard';
import TransItem from '../components/TransItem';

class TransactionHistory extends React.Component {
    render() {
        const pageStyle ={
            padding: "0 24px"
        };
        const titleStyle ={
            fontSize: "32px",
            padding: "0",
            margin: "0"
        };
        return(
            <section style={pageStyle}>
                <BaseCard>
                    <p style={titleStyle}>
                    Transaction History
                    </p>
                </BaseCard>
                <TransItem date="date" time="time" type="type" amount="amount" account="account"/>
                <TransItem date="23/12/2019" time="09:12" type="debit" amount="Rp220.000,00" account="1230002217609"/>
                <TransItem date="23/12/2019" time="10:11" type="kredit" amount="Rp120.000,00" account="1230004217609"/>
            </section>
        );
    }
}

export default TransactionHistory