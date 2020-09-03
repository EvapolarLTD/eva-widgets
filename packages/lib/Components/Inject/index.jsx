import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Context from './Context';
import { injectStore } from '../../store';

const Inject = ({ options, children }) => {
  useEffect(() => {
    injectStore(options.store);
  }, []);

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
