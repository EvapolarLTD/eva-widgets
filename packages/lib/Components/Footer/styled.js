import styled from 'styled-components';
import makeStyles from '../../ui/make-styles';
import { colors } from '../../ui/common';

export default makeStyles((theme) => ({
  root: {
    background: '#023F3D',
    padding: '52px 0 110px',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: 77,
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: 64,
    },
  },
  title: {
    margin: '0 0 5px',
    textTransform: 'uppercase',
    color: '#FA7814',
    fontWeight: 500,
    fontSize: '16px !important',
    lineHeight: 2.5,
    letterSpacing: '0.1em',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  block: {
    padding: '25px 0',
  },
  readyBlock: {
    marginTop: 11,
    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
    },
  },
  link: {
    display: 'block',
    padding: '11px 0',
    color: 'white',
    fontFamily: 'inherit !important',
    fontWeight: 'normal !important',
    fontSize: '16px !important',
  },
  textSignUp: {
    lineHeight: '250%',
    color: 'white',
    fontSize: '16px !important',
    marginBottom: 9,
    fontWeight: 400,
    [theme.breakpoints.up('sm')]: {
      marginBottom: 11,
    },
  },
  text: {
    color: 'white',
    fontSize: '14px !important',
    fontWeight: '500 !important',
  },
  logo: {
    width: 120,
    height: 37.65,
    [theme.breakpoints.up('sm')]: {
      marginTop: 10,
    },
  },
  copyright: {
    margin: '4px 0',
    fontSize: '14px !important',
    color: 'white',
  },
  container: {
    marginTop: 36,
    [theme.breakpoints.up('md')]: {
      marginTop: 66,
    },
  },
  social: {
    width: 'auto',
    height: 24,
    marginRight: 37,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 37,
      marginRight: 0,
    },
  },
  textBottom: {
    display: 'inline',
    padding: '8px 0',
    marginRight: 27,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 27,
      marginRight: 0,
      padding: '10px 0',
    },
  },
  containerSocial: {
    marginTop: 52,
    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
      justifyContent: 'flex-end',
    },
  },
  containerItems: {
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end',
    },
  },
}));

export const inputTheme = {
  main: '#fff',
  border: '#fff',
  iconStyle: {
    filter: 'brightness(0) invert(100%)',
    right: '52px',
    top: '27px',
    cursor: 'pointer',
  },
  labelStyle: {
    color: '#fff',
  },
  focusOpacity: 1,
  borderDefault: 'rgba(255, 255, 255, 1.0)',
  height: '74px',
  labelOffY: '30px',
};

export const InputStatus = styled.div`
  margin-top: -15px;
  height: 50px;
  font-size: 16px;
  color: ${(props) => (props.error ? colors.error : 'white')};
`;
