import React, { memo, useContext } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import Layout from '@Components/Base/Layout';
import { ColorModeContext } from '@Components/App';

const HeaderBase = styled('div')(({ theme }) => ({
  height: '60px',
  width: '100%',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));
const HeaderContent = styled('div')(() => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
const Button = styled(IconButton)(() => ({
  color: 'inherit',
}));

function Header(): React.ReactElement {
  // States
  const theme = useTheme();
  const currentContext = useContext(ColorModeContext);

  // Main
  return (
    <HeaderBase className="HeaderBase">
      <Layout>
        <HeaderContent>
          <div>普通文組</div>
          <ButtonBase onClick={currentContext.toggleColorMode}>
            current theme: {theme.palette.mode}
          </ButtonBase>
          <div className="AlignItemsCenter">
            <Button>
              <RssFeedIcon />
            </Button>
            <Button>
              <EmailIcon />
            </Button>
            <Button>
              <GitHubIcon />
            </Button>
          </div>
        </HeaderContent>
      </Layout>
    </HeaderBase>
  );
}

export default memo(Header);
