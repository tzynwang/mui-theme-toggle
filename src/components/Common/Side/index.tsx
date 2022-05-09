import React, { memo } from 'react';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const Base = styled('div')(({ theme }) => ({
  height: '60px',
  width: '60px',
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  transitionProperty: 'height, width',
  transitionDuration: `${theme.transitions.duration.enteringScreen}ms`,
  transitionTimingFunction: theme.transitions.easing.easeInOut,
  [theme.breakpoints.up('sm')]: {
    height: '100%',
    width: '100%',
    position: 'static',
    borderRadius: '0%',
  },
}));

function Side(): React.ReactElement {
  return (
    <Base>
      <MenuIcon />
    </Base>
  );
}

export default memo(Side);
