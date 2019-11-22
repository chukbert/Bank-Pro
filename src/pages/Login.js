import React from 'react';

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

        const paperStyle = {
            position: "relative",
            top: "50%",
            transform: "translateY(30%)",
            borderRadius: "5px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
            width: "300px",
            margin: "0px auto"

          }
          
        const titleStyle = {
            paddingTop: "30px",
            paddingBottom: "20px",
            textAlign: "center"
        }
         
        const buttonStyle ={
            borderRadius: "5px",
            backgroundColor: "#00c1ec",
            border: "none",
            color: "white",
            padding: "15px 32px",
            textAlign: "center",
            display: "block",
            width : "100%",
            marginBottom: "10px"
        }
          
        const formStyle = {
            paddingLeft: "30px",
            paddingRight: "30px"
          }
          
        const textStyle = {
            borderRadius: "5px",
            borderStyle: "solid",
            borderColor: "#d0d0d0",
            borderWidth: "1px",
            height: "40px",
            paddingLeft: "16px",
            marginBottom: "8px",
            width : "90%"
        }
        
        const headerFont = {
            fontSize : "40px",
            textAlign: "center"
        }

        const header2Font = {
            fontSize : "28px"
        }

        const font = {
            fontSize : "22px"
        }

        return(
            <section style={pageStyle}>
                <h1 style={headerFont}>Bank Pro</h1>
                <div style={paperStyle}>
                    <div style={titleStyle}>
                        <h2 style={header2Font}>Login</h2>
                    </div>
                    <form style={formStyle}>
                        <p style={font}>No. Rekening</p>
                        <input style={textStyle} placeholder= "Input no. rekening" type= "number" onChange= {this.inputNoRekening}></input>
                        <button style={buttonStyle} type= "submit" onClick= {this.cekNoRekening}>Login</button>
                    </form>
                </div>
            </section>
        );
    }
}

export default Login