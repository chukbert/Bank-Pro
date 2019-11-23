import React from 'react';
import {BaseCard, BaseCardAlternate} from '../components/BaseCard';
import FormGroup from '../components/FormGroup'


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
            height: "auto"
        };
        
        return(
            <section style={pageStyle}>
                <BaseCard style={blueBackground}>
                    <p style={titleStyle}>
                    Transfer Page
                    </p>
                </BaseCard>
                <FormGroup />
            </section>
        );
    }
}

export default Transfer