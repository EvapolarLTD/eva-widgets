import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import MaskedInput from 'react-input-mask';
import { Wrap, Label, Error, Icon, Tooltip } from './styled';
import { colors } from '../common';

const Index = React.forwardRef((props, ref) => {
  const {
    type,
    name,
    value,
    onChange,
    onBlur,
    onIconClick,
    label,
    error,
    icon,
    tooltip,
    additional,
    autocomplete,
    theme,
  } = props;
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };
  const handleBlur = () => {
    if (onBlur) onBlur(name, value);
  };
  const handleIconClick = () => {
    if (onIconClick) onIconClick(value);
  };
  return (
    <Wrap error={error} ref={ref} theme={theme}>
      {additional.mask ? (
        <MaskedInput
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete={autocomplete}
          maskChar=""
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...additional}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete={autocomplete}
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...additional}
        />
      )}
      <Label fixed={value !== ''} theme={theme} style={theme.labelStyle}>
        <FormattedMessage id={label} />
      </Label>
      {icon && (
        <Icon style={theme.iconStyle}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
          <img src={icon} alt="" onClick={handleIconClick} />
          {tooltip && (
            <Tooltip>
              <FormattedMessage id={tooltip} />
            </Tooltip>
          )}
        </Icon>
      )}
      <Error>{error && <FormattedMessage id={error} />}</Error>
    </Wrap>
  );
});
export default Index;

Index.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.string,
  tooltip: PropTypes.string,
  autocomplete: PropTypes.string,
  additional: PropTypes.objectOf(PropTypes.string),
  theme: PropTypes.objectOf(PropTypes.any),
  onIconClick: PropTypes.func,
};
Index.defaultProps = {
  type: 'text',
  onBlur: null,
  value: '',
  label: '',
  error: '',
  icon: '',
  tooltip: '',
  additional: {},
  autocomplete: 'off',
  theme: {
    height: '46px',
    main: '#000',
    border: colors.main,
    iconStyle: {},
    focusOpacity: 0,
    borderDefault: 'rgba(1, 62, 62, 0.2)',
    labelStyle: { color: colors.text },
    labelOffY: '15px',
  },
  onIconClick: null,
};
