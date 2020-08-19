import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import Link from './link';

function LocalizedLink({ to, children, className, hidden }) {
  const intl = useIntl();
  const { locale } = intl;

  return (
    <Link className={className} to={`/${locale}/${to}/`} hidden={hidden}>
      {children}
    </Link>
  );
}

LocalizedLink.propTypes = {
  to: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
  hidden: PropTypes.bool,
};

LocalizedLink.defaultProps = {
  hidden: false,
};

export default LocalizedLink;
