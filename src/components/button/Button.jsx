import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ onClick, label }) {
    return (
        <button onClick={onClick} type="button" className="btn btn-primary">
            {label}
        </button>
    )
}
Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
  };