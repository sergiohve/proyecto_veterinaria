import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1 className="text-center">{this.props.titulo}</h1>
                </header>
            </div>
        );
    }
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;