import makeStyles from '../../ui/make-styles';

export const scrolledColor = '#013E3E';
export const scrolledColorFilter =
  'brightness(50%) sepia(100) saturate(100) hue-rotate(180deg)';

export default makeStyles((theme) => ({
  root: {
    padding: '20px 0',
    zIndex: 4,
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    background: '#0000',
    boxShadow: 'none',
    color: 'white !important',
  },
  rootScrolled: {
    background: '#fff',
    boxShadow: '0px 7px 20px rgba(0, 0, 0, 0.05)',
    color: scrolledColor,
  },
  menuButton: {
    color: '#fff',
  },
  menuButtonScrolled: {
    color: '#013E3E',
  },
  container: {
    display: 'flex',
    margin: '0 auto',
    maxWidth: 1140,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navLeft: {},
  navCenter: {
    display: 'flex',
  },
  navRight: {
    display: 'flex',
  },
  title: {
    color: 'white !important',
    textDecoration: 'none !important',
    fontSize: '14px !important',
    paddingLeft: 40,
    textTransform: 'none',
    '&:hover': {
      textShadow: '1px 0 0 #fff',
      background: '#0000',
    },
  },
  titleScrolled: {
    color: `${scrolledColor} !important`,
  },
  logo: {
    width: 120,
    height: 37.65,
  },
  logoScrolled: {
    filter: `${scrolledColorFilter}`,
  },
  tabletContainer: {
    padding: '0 100px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 15px',
    },
  },
  tabletMenuWrap: {
    position: 'fixed',
    width: '100%',
    height: '100vh',
    backgroundColor: '#fff',
    zIndex: 3,
    top: 0,
    left: 0,
    overflowY: 'scroll',
  },
  tabletMenuContainer: {
    display: 'flex',
    flexDirection: 'column',
    color: '#013E3E',
    position: 'absolute',
    top: 125,
    left: 0,
  },
  tabletTitle: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: '20px !important',
  },
  tabletTitleDescBlock: {
    paddingTop: '20px !important',
  },
  fixCenterAlign: {
    transform: 'translateX(15px)',
  },
  support: {
    marginLeft: 40,
  },
}));
