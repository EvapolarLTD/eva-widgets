import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const Inject = ({ options, children }) => {
  return <Context.Provider value={options}>{children}</Context.Provider>;
};

Inject.propTypes = {
  options: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired,
};

Inject.defaultProps = {
  options: {},
};

export default Inject;
