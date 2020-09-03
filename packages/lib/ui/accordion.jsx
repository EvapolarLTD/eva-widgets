import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Arrow from './arrow';
import makeStyles from './make-styles';

const useStyles = makeStyles(() => ({
  accordionPanel: {
    display: 'none',
  },
  accordionPanelOpened: {
    display: 'block',
  },
  accordionBtn: {
    width: '100%',
    padding: 0,
    border: 0,
    outline: 0,
    backgroundColor: 'transparent',
    textAlign: 'left',
    cursor: 'pointer',
    fontSize: '14px !important',
    fontWeight: '700 !important',
    color: '#013E3E',
  },
}));

const AccordionItemContext = React.createContext({
  expanded: false,
  toggleExpansion: () => {},
});

const AccordionItem = (props) => {
  const { children, expanded } = props;
  const [enabled, setExpanded] = useState(expanded);

  const state = {
    expanded: enabled,
    toggleExpansion: () => setExpanded(!enabled),
  };

  return (
    <AccordionItemContext.Provider value={state}>
      <div>{children}</div>
    </AccordionItemContext.Provider>
  );
};

AccordionItem.propTypes = {
  expanded: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]).isRequired,
};

AccordionItem.defaultProps = {
  expanded: false,
};

export { AccordionItem };

const AccordionHeader = ({ children }) => {
  const classes = useStyles();

  return (
    <AccordionItemContext.Consumer>
      {({ expanded, toggleExpansion }) => (
        <div>
          <button
            type="button"
            className={classnames(classes.accordionBtn)}
            onClick={toggleExpansion}
          >
            {children}
            <Arrow scrolled opened={expanded} />
          </button>
        </div>
      )}
    </AccordionItemContext.Consumer>
  );
};

AccordionHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
};

export { AccordionHeader };

const AccordionPanel = ({ children }) => {
  const classes = useStyles();

  return (
    <AccordionItemContext.Consumer>
      {({ expanded }) => (
        <div
          className={classnames(
            classes.accordionPanel,
            expanded ? classes.accordionPanelOpened : null
          )}
        >
          {children}
        </div>
      )}
    </AccordionItemContext.Consumer>
  );
};

AccordionPanel.propTypes = {
  children: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export { AccordionPanel };
