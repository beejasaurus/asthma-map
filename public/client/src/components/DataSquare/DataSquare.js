import React from 'react';
import PropTypes from 'prop-types';
import './DataSquare.css';

const DataSquare = ({title, value}) => (
    <fieldset className="komodo-data-square">
        <header className="komodo-data-square-header">{title}</header>
        <main className="komodo-data-square-body">
            {value}
        </main>
    </fieldset>
);

DataSquare.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};

export default DataSquare;