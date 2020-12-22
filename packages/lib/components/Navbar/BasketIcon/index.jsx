import React, { useContext } from 'react';
import classnames from 'classnames';
import { calculateItemsCount } from '../../../api/basket';
import NavContext from '../context';
import useStyles from './styled';
import bucketImg from '../../../images/nav/icon-bucket.svg';

/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
const BasketIcon = () => {
  const classes = useStyles();

  const { basket, openBasket, scrolled } = useContext(NavContext);

  const bucketClass = classnames(
    classes.icon,
    scrolled ? classes.iconScrolled : null
  );

  return (
    <div className={classes.wrap} role="button" onClick={openBasket}>
      <img src={bucketImg} alt="bucket" className={bucketClass} />
      <div className={classes.title}>
        {basket.length > 0 && calculateItemsCount(basket)}
      </div>
    </div>
  );
};
/* eslint-enable jsx-a11y/interactive-supports-focus */
/* eslint-enable jsx-a11y/click-events-have-key-events */

export default BasketIcon;
