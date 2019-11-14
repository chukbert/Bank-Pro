import React from 'react';
import BaseCard from './BaseCard';
import TransItem from './TransItem';

class Login extends React.Component {
    render() {
        const pageStyle ={
            padding: "24px"
        };
        const headerStyle ={
            fontSize: "32px",
            padding : "0 32px"
        }
        const titleStyle ={
            fontSize: "24px",
            padding: "0",
            margin: "0"
        };
        const parStyle = {
            fontSize: "22px"
        }
        const inputStyle ={
            fontSize: "18px",
            placeholder: "Input no. rekening",
            type: "number"
        }
        const buttonStyle ={
            fontSize: "18px",
            class: "button",
            type: "submit"
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
                        <input style={inputStyle}></input>
                        <button style={buttonStyle}>Login</button>
                    </form>
                </BaseCard>
            </section>
        );
    }
}

export default Login