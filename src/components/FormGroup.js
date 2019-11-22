import React from 'react';

class FormGroup extends React.Component {
    constructor() {
        super()
        this.state = { 
            account: "",
            name: "",
            email: "",
            amount: ""
        };
    }

    inputAccount = (event) => {
        this.setState({account: event.target.value});
        console.log(this.state.account);
    }

    inputName = (event) => {
        this.setState({name: event.target.value});
        console.log(this.state.name);
    }

    inputEmail = (event) => {
        this.setState({account: event.target.value});
        console.log(this.state.email);
    }

    inputAmount = (event) => {
        this.setState({account: event.target.value});
        console.log(this.state.amount);
    }

    redirect = () => {
        // redirect 
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
                        <p>Recipient's Name</p>
                        <input style={inputStyle} placeholder="recipient's name" type="text" name="name" onChange={this.inputName}/>
                        <p>Recipient's Email</p>
                        <input style={inputStyle} placeholder="email@email.com" type="text" name="email" onChange={this.inputEmail}/>
                        <p>Amount</p>
                        <input style={inputStyle} placeholder="amount to transfer" type="text" name="amount" onChange={this.inputAmount}/>
                        <div>
                            <button style={buttonStyle} class="button" type="submit" onClick={this.redirect}>transfer</button>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}

export default FormGroup