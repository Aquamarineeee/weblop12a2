import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4A628A',   // xanh navy nhẹ
      light: '#7AB2D3',  // xanh dương pastel
      dark: '#2F3E5C',   // xanh đậm hơn
    },
    secondary: {
      main: '#B9E5E8',   // xanh mint nhạt
      light: '#DFF2EB',  // xanh pastel sáng
      dark: '#7AB2D3',   // xanh pastel đậm hơn
    },
    error: {
      main: '#FFE3E3',   // đỏ pastel
    },
    warning: {
      main: '#FEF9F2',   // vàng kem nhẹ
    },
    success: {
      main: '#C9E9D2',   // xanh lá nhạt pastel
    },
    background: {
      default: '#FEF9F2', // nền sáng kem
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1F2937',
      secondary: '#4A628A', // đồng bộ màu chữ phụ
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Palatino Linotype", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      color: '#4A628A',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.3,
      color: '#7AB2D3',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: 1.4,
      color: '#4A628A',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#1F2937',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#4A628A',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
          // background: 'linear-gradient(45deg, #7AB2D3, #4A628A)',
          color: '#fff',
          '&:hover': {
            background: 'linear-gradient(45deg, #B9E5E8, #4A628A)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow:
            '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow:
              '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
          },
        },
      },
    },
  },
});
