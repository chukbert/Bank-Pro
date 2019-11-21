import React from 'react';
import BaseCard from '../components/BaseCard';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            no_rekening: ""
        };
    }

    inputNoRekening = (event) => {
        this.setState({no_rekening: event.target.value});
        console.log(this.state.no_rekening);
    }

    cekNoRekening = () => {
        // akes ws-bank SOAP
    }

    render() {
        const pageStyle ={
            padding: "24px"
        }
        const headerStyle ={
            fontSize: "32px",
            padding : "0 32px"
        }
        const titleStyle ={
            fontSize: "24px",
            padding: "0",
            margin: "0"
        }
        const parStyle = {
            fontSize: "22px"
        }
        const inputStyle ={
            fontSize: "18px"
        }
        const buttonStyle ={
            fontSize: "18px"
        }
        
        return(
            <section style={pageStyle}>
                <h1 style={headerStyle}>Bank Pro</h1>
                <BaseCard>
                    <p style={titleStyle}>
                    Login
                    </p>
                </BaseCard>
                <BaseCard>
                    <form>
                        <p style={parStyle}>No. Rekening</p>
                        <input style={inputStyle} placeholder= "Input no. rekening" type= "number" onChange= {this.inputNoRekening}></input>
                        <button style={buttonStyle} type= "submit" onClick= {this.cekNoRekening}>Login</button>
                    </form>
                </BaseCard>
            </section>
        );
    }
}

export default Login