// https://raw.githubusercontent.com/mui-org/material-ui/master/examples/gatsby/src/components/Link.js

import React from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';

const Link = React.forwardRef(function Link(props, ref) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MuiLink color="inherit" component={GatsbyLink} ref={ref} {...props} />
  );
});

export default Link;
