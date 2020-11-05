import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import Arrow from './arrow';
import LocalizedLink from '../components/localized-link';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-weight: normal;
  user-select: none;

  &:hover {
    cursor: pointer;
    text-shadow: 1px 0 0 #fff;
  }
`;

const List = styled.ul`
  visibility: ${({ opened }) => (opened ? 'visible' : 'hidden')};
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  text-align: left;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background: #fff;
  color: #013e3e;
  margin: 0;
  padding: 8px 0 10px;
  li {
    display: block;
  }
  a {
    display: block;
    font-size: 12px;
    text-transform: none;
    letter-spacing: normal;
    transition: 0s all;
    color: inherit;
    text-decoration: none;
    font-weight: normal;
    padding: 11px 26px;
    white-space: nowrap;
  }
  &:focus {
    cursor: pointer;
  }
`;
const Title = styled.span`
  display: block;
  font-weight: bold;
  font-size: 10px;
  padding: 12px 26px;
`;
const Control = styled.span`
  font-size: 14px;
  ${(props) => props.scrolled && `color: #013e3e`};
`;
const Link = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
const CustomizedMenu = ({
  title,
  description,
  items,
  selected,
  scrolled,
  shortenTitle,
  translate,
  onItemClick,
  className,
}) => {
  const intl = useIntl();
  const node = useRef();
  const [opened, setToggled] = useState(false);
  const onToggle = () => setToggled((value) => !value);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) return;

    setToggled(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  let finalText = '';

  if (items[selected]) {
    const selectedText = items[selected].name;

    if (selectedText) {
      finalText = translate
        ? intl.formatMessage({ id: selectedText })
        : selectedText;

      if (shortenTitle)
        finalText = items[selected].shorten || finalText.substr(0, 2);
    }
  }

  const itemTitle = title !== '' ? title : finalText;

  return (
    <Wrapper scrolled={scrolled} ref={node} className={className}>
      <List opened={opened}>
        {description !== '' && (
          <li>
            <Title>{description}</Title>
          </li>
        )}
        {items.map((value) => {
          const Text = (
            <span>
              {translate ? intl.formatMessage({ id: value.name }) : value.name}
            </span>
          );

          const onItemClicked = () => {
            if (onItemClick) onItemClick(value);
          };

          const linkProps = value.href ? { href: value.href } : {};

          return (
            <li key={value.name}>
              {value.link ? (
                <LocalizedLink to={value.link}>{Text}</LocalizedLink>
              ) : (
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                <Link {...linkProps} onClick={onItemClicked}>
                  {Text}
                </Link>
              )}
            </li>
          );
        })}
      </List>
      <Control onClick={onToggle} scrolled={scrolled}>
        {itemTitle}
        <Arrow opened={opened} scrolled={scrolled} />
      </Control>
    </Wrapper>
  );
};
/* eslint-enable jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

CustomizedMenu.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  selected: PropTypes.number,
  items: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  scrolled: PropTypes.bool,
  shortenTitle: PropTypes.bool,
  translate: PropTypes.bool,
  onItemClick: PropTypes.func,
  className: PropTypes.string,
};

CustomizedMenu.defaultProps = {
  title: '',
  description: '',
  selected: 0,
  scrolled: false,
  shortenTitle: false,
  translate: false,
  onItemClick: null,
  className: '',
};

export default CustomizedMenu;
