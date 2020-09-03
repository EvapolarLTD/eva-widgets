import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Context from './Context';

const Inject = ({ options, children }) => {
  return (
    <Provider store={options.store}>
      <Context.Provider value={options}>{children}</Context.Provider>
    </Provider>
  );
};

Inject.propTypes = {
  options: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.node.isRequired,
};

export default Inject;
