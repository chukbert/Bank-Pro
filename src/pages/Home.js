import React from 'react';
import {BaseCard, BaseCardAlternate} from '../components/BaseCard';
import TransItem from '../components/TransItem';
import transfer from '../assets/transfer.png'
import history from '../assets/history.png'
import {Link} from 'react-router-dom'

class TransactionHistory extends React.Component {
    render() {
        const pageStyle ={
            padding: "0 72px"
        };
        const titleStyle ={
            fontSize: "32px",
            padding: "0",
            margin: "0",
            fontWeight: "450",
            flexGrow: "2",
            paddingTop : "2px"
        };
        const blueBackground ={
            background: "blue",
        };
        const flexStyle = {
            display : "flex",
            justifyContent : "space-between"
        }
        const flexOpt = {
            display : "flex",
            justifyContent : "space-around"
        }
        const info ={
            fontWeight: "450",
            fontSize: "24px"
        }
        const infoDiv = {
            margin : "0 16px"
        }
        const options = {
            width : "100%"
        }
        const logo = {
            width: "36px"
        }
        
        return(
            <section style={pageStyle}>
                <BaseCardAlternate>
                    <div style={flexStyle}>
                        <div style={titleStyle}>
                        Bariansyah
                        </div>
                        <div style={infoDiv}>
                            Account Number
                            <div style={info}>1</div>
                        </div>
                        <div style={infoDiv}>
                            Balance
                            <div style={info}>Rp200.000.-</div>
                        </div>
                    </div>
                </BaseCardAlternate>
                <div style={flexOpt}>
                    <Link to="/transfer">
                        <BaseCard>
                            <img src={transfer} style={logo}/>
                            Transfer
                        </BaseCard>
                    </Link>
                    <Link to="/history">
                        <BaseCard >
                            <img src={history} style={logo}/>
                            History
                        </BaseCard>
                    </Link>
                </div>
            </section>
        );
    }
}

export default TransactionHistory
