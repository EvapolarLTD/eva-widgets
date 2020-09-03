import makeStyles from '../../../ui/make-styles';
import { scrolledColorFilter } from '../styled';

export default makeStyles(() => ({
  wrap: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  icon: {
    display: 'block',
    width: 21,
    height: 'auto',
    filter: 'brightness(95%)',
    '&:hover': {
      filter: 'brightness(100%)',
    },
  },
  title: {
    color: '#FA7814',
    fontSize: 10,
    paddingLeft: 10,
  },
  iconScrolled: {
    filter: `${scrolledColorFilter}`,
    '&:hover': {
      filter: `${scrolledColorFilter}`,
    },
  },
}));
