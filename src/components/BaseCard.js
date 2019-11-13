import React from 'react';

class BaseCard extends React.Component {
    render() {
        const cardStyle ={
            margin:"24px",
            padding:"32px 24px",
            borderRadius:"4px",
            boxShadow: "2px 2px 7px -2px rgba(0,0,0,0.4)",
            background: "#3e64ff",
            color: "white"
        };
        return(
            <div style={cardStyle}>
                {this.props.children}
            </div>
        );
    }
}

export default BaseCard