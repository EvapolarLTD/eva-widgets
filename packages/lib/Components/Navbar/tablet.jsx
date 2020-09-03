import React, { useState, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logoImg from '../../images/logo/logo.svg';
import {
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from '../../ui/accordion';
import { DialogContext, ItemExtended } from '../../ui/dialoglist';
import HideOnScroll from '../../utils/hideonscroll';
import { items, languages } from './data';
import useStyles from './styled';
import NavContext from './context';
import genKey from '../../utils/gen-key';
import LocalizedLink from '../localized-link';
import BasketIcon from './BasketIcon/index';
import isServerRender from '../../utils/isServerRender';
import { LangItem } from './tabletStyled';

/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/interactive-supports-focus, jsx-a11y/click-events-have-key-events */
const NavTablet = () => {
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

  const [menuOpened, setMenuOpened] = useState(false);

  const onToggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  let isScrolled = scrolled;

  /* enable or disable scroll */
  if (!isServerRender()) {
    if (menuOpened) {
      isScrolled = true;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  const classes = useStyles();

  const logoClass = classnames(
    classes.logo,
    isScrolled ? classes.logoScrolled : null
  );
  const menuClass = classnames(
    classes.menuButton,
    isScrolled ? classes.menuButtonScrolled : null
  );
  const titleClass = classnames(
    classes.title,
    isScrolled ? classes.titleScrolled : null,
    classes.tabletTitle
  );
  const titleDescClass = classnames(
    classes.title,
    isScrolled ? classes.titleScrolled : null,
    classes.tabletTitle,
    classes.tabletTitleDesc
  );

  const countryName = getCountry();

  const jsxHeader = (
    <HideOnScroll>
      <div
        className={classnames(
          classes.root,
          isScrolled ? classes.rootScrolled : null
        )}
      >
        <Grid
          container
          wrap="nowrap"
          alignItems="center"
          justify="space-between"
          maxwidth="md"
          className={classes.tabletContainer}
        >
          <Grid item>
            {!short && (
              <>
                <IconButton
                  edge="start"
                  className={menuClass}
                  color="inherit"
                  aria-label="menu"
                  onClick={() => onToggleMenu()}
                >
                  <MenuIcon />
                </IconButton>
              </>
            )}
          </Grid>
          <Grid item className={short && classes.fixCenterAlign}>
            <LocalizedLink to={logoTo}>
              <img src={logoImg} alt="logo" className={logoClass} />
            </LocalizedLink>
          </Grid>
          <Grid item>{!hideRight && <BasketIcon />}</Grid>
        </Grid>
      </div>
    </HideOnScroll>
  );

  const jsxMenu = (
    <div className={classes.tabletMenuWrap}>
      <div className={classes.tabletMenuContainer}>
        <LocalizedLink to="about" className={titleClass} hidden>
          <FormattedMessage id="nav.about" />
        </LocalizedLink>
        <div className={titleClass}>
          <AccordionItem expanded>
            <AccordionHeader>
              <FormattedMessage id="nav.ev_fam" />
            </AccordionHeader>
            <AccordionPanel>
              {items.map((value) => (
                <div key={value.name} className={classes.tabletTitleDescBlock}>
                  <LocalizedLink to={value.link} className={titleDescClass}>
                    <FormattedMessage id={value.name} />
                  </LocalizedLink>
                </div>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </div>
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
        <div className={titleClass}>
          <AccordionItem>
            <AccordionHeader>
              <FormattedMessage id="nav.lang" />
            </AccordionHeader>
            <AccordionPanel>
              {languages.map((value) => (
                <div key={value.name} className={classes.tabletTitleDescBlock}>
                  <LangItem
                    onClick={() => onChangeLanguage(value.shorten)}
                    className={titleDescClass}
                  >
                    <FormattedMessage id={value.name} />
                  </LangItem>
                </div>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </div>
        <div className={titleClass}>
          <AccordionItem>
            <AccordionHeader>
              <FormattedMessage id="nav.country" />
            </AccordionHeader>
            <AccordionPanel>
              <DialogContext.Provider
                value={{
                  selectedValue: countryName,
                  onSelect: (value) => onChangeCountry(value.name),
                  translate: false,
                }}
              >
                {countries.map((value, i) => (
                  <ItemExtended
                    key={genKey()}
                    value={value}
                    last={countries.length - 1 === i}
                  />
                ))}
              </DialogContext.Provider>
            </AccordionPanel>
          </AccordionItem>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {jsxHeader}
      {menuOpened && jsxMenu}
    </>
  );
};
/* eslint-enable jsx-a11y/anchor-is-valid, jsx-a11y/interactive-supports-focus, jsx-a11y/click-events-have-key-events */

export default NavTablet;
