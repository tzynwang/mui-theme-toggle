import React, { memo } from 'react';
import { styled } from '@mui/material/styles';
import type { LayerProps } from './types';

const Base = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  height: '100%',
  margin: '0 auto',
  padding: '0 24px',
  [theme.breakpoints.up('lg')]: {
    maxWidth: '960px',
  },
}));

function BaseLayout(props: LayerProps): React.ReactElement {
  const { children } = props;
  return <Base className="BaseLayout">{children}</Base>;
}

export default memo(BaseLayout);
