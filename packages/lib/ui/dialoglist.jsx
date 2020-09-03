import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames';
import Link from '@material-ui/core/Link';
import Arrow from './arrow';
import makeStyles from './make-styles';
import genKey from '../utils/gen-key';
import { colors } from './common';

const useStyles = makeStyles(() => ({
  root: {
    display: 'none',
    position: 'absolute',
    width: 230,
    left: '50%',
    top: 30,
    transform: 'translateX(-50%)',
    backgroundColor: '#fff',
    boxShadow: '0px 7px 20px rgba(0, 0, 0, 0.05)',
    boxSizing: 'boredr-box',
    borderRadius: 4,
    padding: 24,
    color: colors.text,
  },
  rootOpened: {
    display: 'block',
  },
  rootScrolled: {
    top: 45,
  },
  wrap: {
    position: 'relative',
    userSelect: 'none',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 10px',
    height: 20,
    fontSize: 14,
    '&:hover': {
      cursor: 'pointer',
      textShadow: '1px 0 0 #fff',
    },
  },
  headerScrolled: {
    color: colors.text,
  },
  title: {
    fontSize: '12px !important',
    fontWeight: 'bold !important',
    color: `${colors.text} !important`,
    margin: 0,
  },
  content: {
    height: 220,
    overflowY: 'scroll',
    marginTop: 10,
  },
  desc: {
    fontWeight: 'bold !important',
    fontSize: '10px !important',
    margin: '8px 0',
    color: `${colors.text} !important`,
  },
  item: {
    display: 'block',
    fontWeight: 'normal',
    fontSize: '12px !important',
    padding: '12px 0',
    lineHeight: 1,
    textDecoration: 'none !important',
    textTransform: 'none',
    color: `${colors.text} !important`,
  },
  itemSelected: {
    fontWeight: 'bold',
  },
  divider: {
    opacity: 0.4,
    margin: '9px 0 21px',
    width: '100%',
    height: 1,
    background: colors.text,
  },
}));

export const DialogContext = React.createContext();

const Divider = () => {
  const classes = useStyles();

  return <div className={classes.divider} />;
};

/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
const Item = ({ value = {} }) => {
  const classes = useStyles();
  const { name = '' } = value;
  const { selectedValue = '', onSelect, translate } = useContext(DialogContext);
  const memoizedCallback = useCallback(() => {
    if (onSelect !== undefined) onSelect(value);
  }, [value]);

  const classesList = classnames(
    classes.item,
    name === selectedValue && classes.itemSelected
  );

  const text = translate ? <FormattedMessage id={name} /> : name;

  return (
    <Link
      key={name}
      href="#"
      className={classesList}
      onClick={memoizedCallback}
    >
      {text}
    </Link>
  );
};

export const ItemExtended = ({ value, last }) => {
  const classes = useStyles();

  return (
    <>
      {value.title && (
        <Typography paragraph variant="h5" className={classes.desc}>
          <FormattedMessage id={value.title} />
        </Typography>
      )}
      {value.items && value.items.map((v) => <Item key={genKey()} value={v} />)}
      {!last && <Divider />}
    </>
  );
};

const DialogList = ({
  defaultIcon,
  title,
  description,
  scrolled,
  items,
  translate,
  selectedValue,
  width,
  onSelect,
  customItems,
  fieldSelected,
}) => {
  const classes = useStyles();
  const node = useRef();
  const [opened, setToggled] = useState(false);
  const onToggle = () => setToggled((value) => !value);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) return;

    setToggled(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const showDefaultIcon = selectedValue === '';

  const state = {
    selectedValue,
    onSelect,
    translate,
  };

  let selectedWrapText = selectedValue;

  if (typeof fieldSelected !== 'undefined') {
    if (customItems) {
      customItems.forEach((value) => {
        value.items.forEach((v) => {
          if (v.name === selectedValue) {
            selectedWrapText = v[fieldSelected];
          }
        });
      });
    }
  }

  return (
    <DialogContext.Provider value={state}>
      <div ref={node} className={classes.wrap}>
        <div
          onClick={onToggle}
          style={{ width }}
          className={classnames(
            classes.header,
            scrolled ? classes.headerScrolled : null
          )}
        >
          <div>
            {showDefaultIcon ? (
              <img src={defaultIcon} alt="icon" />
            ) : (
              selectedWrapText
            )}
          </div>
          <div>
            <Arrow opened={opened} scrolled={scrolled} />
          </div>
        </div>
        <div
          className={classnames(
            classes.root,
            opened ? classes.rootOpened : null,
            scrolled ? classes.rootScrolled : null
          )}
        >
          <Typography paragraph variant="h5" className={classes.title}>
            {title}
          </Typography>
          <div className={classes.content}>
            {customItems === undefined && (
              <Typography paragraph variant="h5" className={classes.desc}>
                {description}
              </Typography>
            )}
            {customItems
              ? customItems.map((v, i) => (
                  <ItemExtended
                    key={genKey()}
                    value={v}
                    last={customItems.length - 1 === i}
                  />
                ))
              : items.map((v) => <Item key={genKey()} value={v} />)}
          </div>
        </div>
      </div>
    </DialogContext.Provider>
  );
};
/* eslint-enable jsx-a11y/anchor-is-valid */
/* eslint-enable jsx-a11y/click-events-have-key-events */
/* eslint-enable jsx-a11y/no-static-element-interactions */
/* eslint-enable react/prop-types */

DialogList.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  description: PropTypes.string,
  items: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  customItems: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  scrolled: PropTypes.bool,
  defaultIcon: PropTypes.string,
  translate: PropTypes.bool,
  selectedValue: PropTypes.string,
  width: PropTypes.number,
  onSelect: PropTypes.func,
  fieldSelected: PropTypes.string,
};

DialogList.defaultProps = {
  description: '',
  scrolled: false,
  defaultIcon: undefined,
  translate: false,
  selectedValue: '',
  width: 70,
  items: [],
  customItems: undefined,
  onSelect: undefined,
  fieldSelected: undefined,
};

export default DialogList;
