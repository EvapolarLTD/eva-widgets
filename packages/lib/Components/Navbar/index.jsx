import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import intersectWith from 'lodash/intersectionWith';
import NavTablet from './tablet';
import NavDesktop from './desktop';
import NavContext from './context';
import { LaptopMax, LaptopMin } from '../../utils/mediaCheck';
import useLocale from '../../hooks/use-locale';

const NavBarHandler = () => {
  return (
    <>
      <LaptopMin>
        <NavDesktop />
      </LaptopMin>
      <LaptopMax>
        <NavTablet />
      </LaptopMax>
    </>
  );
};

const commonCountriesCodes = [
  'AU',
  'DE',
  'FR',
  'GB',
  'US',
  'ES',
  'IT',
  'NL',
  'BE',
  'CA',
  'SG',
  'AE',
];

const NavBar = (props) => {
  const {
    forcedScrolled,
    short,
    logoTo,
    children,
    hideRight,
    onApplyLocale,
    onApplyCountry,
    onSetBasketState,
    onFetchItems,
  } = props;

  const localeManager = useLocale();
  const [scrolled, setScrolled] = useState(0);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    setScrolled(winScroll);
  };

  const isScrolledNav = () => scrolled > 100;

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);

    return () => {
      window.removeEventListener('scroll', listenToScroll);
    };
  }, []);

  useEffect(() => {
    if (onFetchItems) onFetchItems();
  }, []);

  const isScrolled = isScrolledNav();

  const { countries, basket, country } = useSelector((state) => ({
    countries: state.countries.list,
    basket: state.basket.list,
    country: state.countries.picked,
  }));

  const commonCountries = intersectWith(
    countries,
    commonCountriesCodes,
    (value, code) => code === value.code2
  );
  commonCountries.sort((a, b) => a.name.localeCompare(b.name));
  const wrapCountries = [
    {
      title: 'nav.country_common',
      items: commonCountries,
    },
    {
      title: 'nav.country_all',
      items: [...countries],
    },
  ];

  const state = {
    basket,
    countries: wrapCountries,
    scrolled: forcedScrolled || isScrolled,
    short,
    logoTo,
    hideRight,
    onChangeCountry: (name) => {
      /* change country, apply some changes */
      if (onApplyCountry) onApplyCountry(name);

      /* apply locale */
      if (onApplyLocale) onApplyLocale(localeManager, name);
    },
    onChangeLanguage: (code) => {
      localeManager(code.toLowerCase());
    },
    getCountry: () => {
      return country || '';
    },
    openBasket: () => {
      if (onSetBasketState) onSetBasketState(true);
    },
  };

  return (
    <>
      <NavContext.Provider value={state}>
        <NavBarHandler />
        {children}
      </NavContext.Provider>
    </>
  );
};

NavBar.propTypes = {
  short: PropTypes.bool,
  logoTo: PropTypes.string,
  forcedScrolled: PropTypes.bool,
  children: PropTypes.node,
  hideRight: PropTypes.bool,
  onApplyLocale: PropTypes.func,
  onApplyCountry: PropTypes.func,
  onSetBasketState: PropTypes.func,
  onFetchItems: PropTypes.func,
};

NavBar.defaultProps = {
  short: false,
  logoTo: '/',
  forcedScrolled: false,
  children: React.createElement('div'),
  hideRight: false,
  onApplyLocale: null,
  onApplyCountry: null,
  onSetBasketState: null,
  onFetchItems: null,
};

export default NavBar;
