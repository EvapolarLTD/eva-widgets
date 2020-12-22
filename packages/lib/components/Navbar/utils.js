const getSelectedCountry = (countries, countryCode) => {
  return countries[1].items.find((value) => value.code2 === countryCode);
};

/* eslint-disable-next-line import/prefer-default-export */
export { getSelectedCountry };
