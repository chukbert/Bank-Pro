import React from 'react';

class TransItem extends React.Component {
    render() {
        const itemStyle ={
            borderBottomStyle:"solid",
            borderWidth:"1px",
            margin:"8px 72px",
            display:"flex",
            maxWidth:"1340px",
            justifyContent:"space-between",
            padding:"8px"
        };
        const itemDiv={
            width:"130px"
        }
        return(
            <div style={itemStyle}>
                <div style={itemDiv}>
                    {this.props.date}
                </div>
                <div style={itemDiv}>
                    {this.props.time}
                </div>
                <div style={itemDiv}>
                    {this.props.type}
                </div>
                <div style={itemDiv}>
                    {this.props.amount}
                </div>
                <div style={itemDiv}>
                    {this.props.account}
                    {/* 1230002217609 */}
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default TransItem