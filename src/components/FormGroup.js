import React from 'react';
import transfer from '../soap/transfer'
import Cookies from 'js-cookie'


class FormGroup extends React.Component {
    constructor() {
        super()
        this.state = { 
            account: "",
            amount: "",
            status: ""
        };
    }

    inputAccount = (event) => {
        this.setState({account: event.target.value});
        // console.log(this.state.account);
    }

    inputAmount = (event) => {
        this.setState({amount: event.target.value});
        // console.log(this.state.amount);
    }

    sendMoney = () => {
        // sendMoney
        transfer(Cookies.get("account"), this.state.account, this.state.amount).then((res) => {
            if(res.return == "SUCCEED" || res.return== "SUCCEEDVA"){
                this.setState({status:"transaction successful"})
            } else {
                this.setState({status:"transaction failed"})
            }
        })
        console.log(this.state)
    }

    render() {
        const paperStyle = {
            margin:"10px 20%",
            padding:"10px 10px",
            paddingLeft: "3%",
            paddingRight: "3%",
            borderRadius:"4px",
            boxShadow: "2px 2px 7px -2px rgba(0,0,0,0.4)",
            background: "azure",
            color: "black",
            width: "50%",
            height: "auto",
            alignItems: "center"
        }
        const inputStyle = {
            width:"100%"
        }
        const buttonStyle = {
            marginTop: "10px",
            fontSize: "18px"
        }
        return (
            <div class="paper" style={paperStyle}>
                <div>
                    <div class="title">
                        <h2>Transfer Details</h2>
                    </div>
                    <form class="form" enctype="multipart/form-data">
                        <p>Recipient's Account</p>
                        <input style={inputStyle} placeholder="11 1111 1111 111" type="text" name="account" onChange={this.inputAccount}/>
                        <p>Amount</p>
                        <input style={inputStyle} placeholder="amount to transfer" type="text" name="amount" onChange={this.inputAmount}/>
                    </form>
                    <div>
                            <button style={buttonStyle} class="button" onClick={this.sendMoney}>Transfer</button>
                    </div>
                    <div>
                        <p>{this.state.status}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormGroup