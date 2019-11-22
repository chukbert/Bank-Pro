import React from 'react';
import BaseCard from '../components/BaseCard';
import InputGroup from '../components/InputGroup'

class Transfer extends React.Component {
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
        const containerStyle = {
            margin:"10px 20%",
            padding:"10px 10px",
            borderRadius:"4px",
            boxShadow: "2px 2px 7px -2px rgba(0,0,0,0.4)",
            background: "azure",
            color: "black",
            width: "60%",
            height: "auto",
            alignItems: "center"
        };
        
        return(
            <section style={pageStyle}>
                <BaseCard style={blueBackground}>
                    <p style={titleStyle}>
                    Transfer Page
                    </p>
                </BaseCard>
                <div className="container" style={containerStyle}>
                    <h2>Recipients Details</h2>
                    <InputGroup title="Name" name="name" type="text" placeholder="Recipient's name" />
                    <InputGroup title="Email" name="email" type="text" placeholder="Recipient's email" />
                    <InputGroup title="Account" name="account" type="text" placeholder="Recipient's account" />
                </div>
                <div className="container" style={containerStyle}>
                    <h2>Amount</h2>
                    <InputGroup name="amount" type="number" placeholder="amount.." />
                </div>
                <div className="container" style={containerStyle}>
                    <h2>Messages</h2>
                    <InputGroup name="messages" type="text" placeholder="put your massages here.." />
                </div>
            </section>
        );
    }
}

export default Transfer