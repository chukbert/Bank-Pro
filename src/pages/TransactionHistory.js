import React from 'react';
import {BaseCard, BaseCardAlternate} from '../components/BaseCard';
import TransItem from '../components/TransItem';
import Cookies from 'js-cookie'
import info from '../soap/info'


class TransactionHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trans : [{account_number: 2
                ,amount: 20000
                ,idTransaksi: 1
                ,time: "2019-11-19 14:52:35"
                ,type: "a"}]
        };
    }
    
    componentDidMount() {
        info(Cookies.get("account")).then((res) => {
            this.setState({
                trans : res.transaksi
            })
            // console.log(this.state.trans[0].type)
        });
    }
    render() {
        const pageStyle ={
            padding: "0 24px"
        };
        const titleStyle ={
            fontSize: "32px",
            padding: "0",
            margin: "0",
            fontWeight: "450"
        };
        const blueBackground ={
            background: "blue"
        };
        
        return(
            <section style={pageStyle}>
                <BaseCard style={blueBackground}>
                    <p style={titleStyle}>
                    Transaction History
                    </p>
                </BaseCard>
                <TransItem date="date" time="time" type="type" amount="amount" account="account"/>
                {this.state.trans.map(tr=><TransItem date={tr.time.split(' ')[0]} time={tr.time.split(' ')[1]} type={tr.type} amount={"Rp"+tr.amount+",00"} account={tr.account_number}/>)}
            </section>
        );
    }
}

export default TransactionHistory