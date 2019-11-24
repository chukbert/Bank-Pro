import React from 'react';
import {BaseCard, BaseCardAlternate} from '../components/BaseCard';
import TransItem from '../components/TransItem';
import transfer from '../assets/transfer.png'
import history from '../assets/history.png'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import info from '../soap/info'


class TransactionHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: "name",
            acc: "0",
            bl : "0"
        };
    }
    
    componentDidMount() {
        info(Cookies.get("account")).then((res) => {
            this.setState({
                nama: res.namaNasabah,
                acc: res.no_rekening,
                bl : res.balance
            })
        });
    }

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
                        {/* {Cookies.get('account')} */}
                        {/* {this.getInfo()["nama"]} */}
                        {this.state.nama}
                        </div>
                        <div style={infoDiv}>
                            Account Number
                            <div style={info}>{this.state.acc}</div>
                        </div>
                        <div style={infoDiv}>
                            Balance
                            <div style={info}>Rp{this.state.bl}.-</div>
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
