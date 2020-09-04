import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Link from '@material-ui/core/Link';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames';
import useStyles from './styled';
import logoImg from '../../images/logo/logo.svg';
import globalImg from '../../images/nav/region-global.svg';
import DropDown from '../../ui/dropdown';
import HideOnScroll from '../../utils/hideonscroll';
import DialogList from '../../ui/dialoglist';
import { items, languages } from './data';
import NavContext from './context';
import LocalizedLink from '../localized-link';
import BasketIcon from './BasketIcon/index';

/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/interactive-supports-focus, jsx-a11y/click-events-have-key-events */
const NavDesktop = () => {
  const {
    countries,
    scrolled,
    onChangeCountry,
    onChangeLanguage,
    getCountry,
    short,
    logoTo,
    hideRight,
  } = useContext(NavContext);

  const countryName = getCountry();
  const locale = useSelector((state) => state.locale.picked).toUpperCase();

  let localeIndex = languages.findIndex((v) => v.shorten === locale);

  if (localeIndex === -1) localeIndex = 0;

  const classes = useStyles();

  const titleClass = classnames(
    classes.title,
    scrolled ? classes.titleScrolled : null
  );
  const logoClass = classnames(
    classes.logo,
    scrolled ? classes.logoScrolled : null
  );

  const NavLeft = () => (
    <LocalizedLink to={logoTo}>
      <img src={logoImg} alt="logo" className={logoClass} />
    </LocalizedLink>
  );

  const NavCenter = () => (
    <>
      <DropDown
        title={<FormattedMessage id="nav.ev_fam" />}
        items={items}
        scrolled={scrolled}
        translate
      />
      <LocalizedLink to="technology" className={titleClass}>
        <FormattedMessage id="nav.technology" />
      </LocalizedLink>
      <Link href="/blog" className={titleClass}>
        <FormattedMessage id="nav.blog" />
      </Link>
      <LocalizedLink to="aff-program" className={titleClass}>
        <FormattedMessage id="nav.af_program" />
      </LocalizedLink>
      <Link href="https://support.evapolar.com/" className={titleClass}>
        <FormattedMessage id="nav.help_center" />
      </Link>
    </>
  );

  const NavRight = () => (
    <>
      <DropDown
        description={<FormattedMessage id="nav.lang" />}
        items={languages}
        scrolled={scrolled}
        shortenTitle
        translate
        selected={localeIndex}
        onItemClick={(value) => onChangeLanguage(value.shorten)}
      />
      <DialogList
        defaultIcon={globalImg}
        title={<FormattedMessage id="nav.country_choose" />}
        customItems={countries}
        scrolled={scrolled}
        selectedValue={countryName}
        onSelect={(value) => onChangeCountry(value.name)}
        fieldSelected="code2"
      />
      <BasketIcon />
    </>
  );

  const NavShort = () => (
    <>
      <div />
      <div className={classnames(classes.navCenter, classes.fixCenterAlign)}>
        <NavLeft />
      </div>
      <div className={classes.navRight}>
        <BasketIcon />
      </div>
    </>
  );

  const NavFull = () => (
    <>
      <div className={classes.navLeft}>
        <NavLeft />
      </div>
      <div className={classes.navCenter}>
        <NavCenter />
      </div>
      <div className={classes.navRight}>{!hideRight && <NavRight />}</div>
    </>
  );

  return (
    <>
      <HideOnScroll>
        <div
          className={classnames(
            classes.root,
            scrolled ? classes.rootScrolled : null
          )}
        >
          <div className={classes.container}>
            {short ? <NavShort /> : <NavFull />}
          </div>
        </div>
      </HideOnScroll>
    </>
  );
};
/* eslint-enable jsx-a11y/anchor-is-valid, jsx-a11y/interactive-supports-focus, jsx-a11y/click-events-have-key-events */

export default NavDesktop;
