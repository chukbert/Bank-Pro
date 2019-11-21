import React from 'react';

class InputGroup extends React.Component {
    render() {
        const inputStyle = {
            width:"100%"
        }
        return (  
            <div className="form-group">
                <p className="form-labelS">{this.props.name}</p>
                <input style={inputStyle}
                className="form-input"
                id={this.props.name}
                name={this.props.name}
                type={this.props.type}
                value={this.props.value}
                onChange={this.props.handleChange}
                placeholder={this.props.placeholder} 
                />
            </div>
        );
    }
}

export default InputGroup