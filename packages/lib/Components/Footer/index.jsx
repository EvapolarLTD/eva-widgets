import React, { useState, useContext } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import classnames from 'classnames';
import { useIntl, FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import logoImg from '../../images/logo/logo.svg';
import arrowImg from '../../images/icon_other/arrow.svg';
import fbImg from '../../images/social/social-fb.svg';
import twImg from '../../images/social/social-twitter.svg';
import instImg from '../../images/social/social-instagram.svg';
import { Container } from '../../ui/common';
import LocalizedLink from '../localized-link';
import useStyles, { InputStatus, inputTheme } from './styled';
import { contactUs } from './data';
import Input from '../../ui/Input';
import Spinner from '../../ui/spinner';
import Context from '../Inject/Context';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
  let context;

  try {
    context = useContext(Context);
  } catch (e) {}

  const { subscribeUserUrl = '/api/subscribeUser' } = context || {};
  const intl = useIntl();
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ anim: false, text: '' });

  const onSubmitEmail = async (v) => {
    setStatus({ anim: true, text: '' });

    // request to the server.
    try {
      const res = await axios.post(subscribeUserUrl, { email: v });

      if (res.status === 200)
        setStatus({ anim: false, text: 'footer.subscribing.ok', error: false });
    } catch (e) {
      setStatus({
        anim: false,
        text: 'footer.subscribing.failed',
        error: true,
      });
    }
  };

  return (
    <footer className={classes.root}>
      <Container>
        <Grid container>
          <Grid item md={3} sm={4} xs={12} className={classes.block}>
            <Typography paragraph variant="h6" className={classes.title}>
              {intl.formatMessage({ id: 'footer.learn' })}
            </Typography>
            <LocalizedLink to="shop" className={classes.link}>
              {intl.formatMessage({ id: 'footer.products' })}
            </LocalizedLink>
            <LocalizedLink to="technology" className={classes.link}>
              {intl.formatMessage({ id: 'footer.technology' })}
            </LocalizedLink>
            <Link href="/blog" className={classes.link}>
              {intl.formatMessage({ id: 'footer.blog' })}
            </Link>
          </Grid>
          <Grid item md={3} sm={4} xs={12} className={classes.block}>
            <Typography paragraph variant="h6" className={classes.title}>
              {intl.formatMessage({ id: 'footer.shop' })}
            </Typography>
            <LocalizedLink to="aff-program" className={classes.link}>
              {intl.formatMessage({ id: 'footer.aff-program' })}
            </LocalizedLink>
            <LocalizedLink to="about" className={classes.link} hidden>
              {intl.formatMessage({ id: 'footer.about' })}
            </LocalizedLink>
            <Link href="https://support.evapolar.com" className={classes.link}>
              {intl.formatMessage({ id: 'footer.help' })}
            </Link>
          </Grid>
          <Grid item md={3} sm={4} xs={12} className={classes.block}>
            <Typography paragraph variant="h6" className={classes.title}>
              {intl.formatMessage({ id: 'footer.contact-us' })}
            </Typography>
            <pre style={{ marginTop: 0 }} className={classes.link}>
              {contactUs}
            </pre>
          </Grid>
          <Grid
            item
            md={3}
            sm={12}
            xs={12}
            className={classnames(classes.block, classes.readyBlock)}
          >
            <Typography paragraph variant="h6" className={classes.title}>
              <FormattedHTMLMessage id="footer.ready" />
            </Typography>
            <Typography paragraph variant="h6" className={classes.textSignUp}>
              {intl.formatMessage({ id: 'footer.sign_up' })}
            </Typography>
            <div>
              <Input
                name="email"
                label="footer.email"
                value={email}
                onChange={(_, v) => setEmail(v)}
                autocomplete="email"
                icon={arrowImg}
                theme={inputTheme}
                onIconClick={onSubmitEmail}
              />
              <InputStatus error={status.error}>
                {status.anim && <Spinner />}
                {status.text !== '' && <FormattedMessage id={status.text} />}
              </InputStatus>
            </div>
          </Grid>
        </Grid>

        <Grid container className={classes.container}>
          <Grid item sm={6} xs={12}>
            <img src={logoImg} alt="logo" className={classes.logo} />
            <Typography paragraph variant="h6" className={classes.copyright}>
              {`© Evapolar, 2016–${new Date().getFullYear()}`}
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Grid container>
              <Grid container className={classes.containerSocial}>
                <div>
                  <Link
                    href="https://www.facebook.com/evapolarofficial/"
                    className={classes.link}
                  >
                    <img src={fbImg} className={classes.social} alt="social" />
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://www.instagram.com/evapolar"
                    className={classes.link}
                  >
                    <img
                      src={instImg}
                      className={classes.social}
                      alt="social"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://twitter.com/evapolar_com"
                    className={classes.link}
                  >
                    <img src={twImg} className={classes.social} alt="social" />
                  </Link>
                </div>
              </Grid>
              <Grid container className={classes.containerItems}>
                <LocalizedLink
                  to="terms"
                  className={classnames(classes.text, classes.textBottom)}
                >
                  {intl.formatMessage({ id: 'footer.terms' })}
                </LocalizedLink>
                <LocalizedLink
                  to="privacy-policy"
                  className={classnames(classes.text, classes.textBottom)}
                >
                  {intl.formatMessage({ id: 'footer.privacy' })}
                </LocalizedLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
/* eslint-enable jsx-a11y/anchor-is-valid */

export default Footer;
