import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const getTypeButtonClass = (props) => {
  const { primary, success, warn, danger } = props;

  return (
    (primary && "primary ") ||
    (success && "success ") ||
    (warn && "warn ") ||
    (danger && "danger ") ||
    ""
  );
};

const ButtonBehavior = (props) => {
  const { label, className, onClick, disabled } = props;
  return (
    <button
      className={`${className}  ${getTypeButtonClass(props)}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

const Button = styled(ButtonBehavior)`
  padding: 6px 10px;
  border: none;
  outline: none;
  color: #333;
  border-radius: 4px;
  background-color: ${(props) => props.theme.gray};
  font-size: 1em;

  &:hover {
    background-color: ${(props) => props.theme.dark_gray};
    cursor: pointer;
  }
  &.primary {
    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};

    &:hover {
      background-color: ${(props) => props.theme.dark_blue};
    }
  }
  &.success {
    background-color: ${(props) => props.theme.green};
    color: ${(props) => props.theme.white};

    &:hover {
      background-color: ${(props) => props.theme.dark_green};
    }
  }
  &.warn {
    background-color: ${(props) => props.theme.orange};
    color: ${(props) => props.theme.white};

    &:hover {
      background-color: ${(props) => props.theme.dark_orange};
    }
  }
  &.danger {
    background-color: ${(props) => props.theme.red};
    color: ${(props) => props.theme.white};

    &:hover {
      background-color: ${(props) => props.theme.dark_red};
    }
  }
  &:disabled {
    background-color: ${(props) => props.theme.gray};
    color: ${(props) => props.theme.white};
    cursor: not-allowed;

    &:hover {
      background-color: ${(props) => props.theme.gray};
      cursor: not-allowed;
    }
  }
`;

Button.defaultProps = {
  label: "",
  onClick: () => {},
  className: "",
  primary: false,
  success: false,
  warn: false,
  error: false,
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  warn: PropTypes.bool,
  error: PropTypes.bool,
};

export default Button;
