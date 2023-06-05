import { FC } from 'react';
import { Button as MuiButton } from '@mui/material';
import React from 'react';

export interface IListButtonProps {
  className?: string;
  text?: string | React.ReactNode;
  handleClick?: any;
  disabled?: boolean;
  href?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Button: FC<IListButtonProps> = ({
  className,
  text,
  handleClick,
  disabled = false,
  href,
  startIcon,
  endIcon,
}) => {

  return (
    <MuiButton
      className={className}
      href={href}
      disabled={disabled}
      variant="contained"
      color="primary"
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={handleClick}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
