import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import { Menu as MenuIcon, School, Home, Article, Info, ContactMail } from '@mui/icons-material';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'Trang chủ', icon: Home },
    { label: 'Bài viết', icon: Article },
    { label: 'Giới thiệu', icon: Info },
    { label: 'Liên hệ', icon: ContactMail },
  ];

  return (
    <AppBar 
      position="sticky" 
      sx={{
        background: 'linear-gradient(135deg, #14B8A6 0%, #7AB2D3 100%)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Toolbar>
        <School sx={{ mr: 2, fontSize: 28 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
          Lớp 12A2 - Hành trình thành công
        </Typography>

        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <MenuItem key={index} onClick={handleMenuClose}>
                    <IconComponent sx={{ mr: 1 }} />
                    {item.label}
                  </MenuItem>
                );
              })}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Button
                  key={index}
                  color="inherit"
                  startIcon={<IconComponent />}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;