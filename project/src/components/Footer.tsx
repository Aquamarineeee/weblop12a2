import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {School,Email,Phone,LocationOn,Facebook,Instagram,YouTube} from '@mui/icons-material';
import Social from '../des/social';
import Tooltip from '../des/motivate';
const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
        color: 'white',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <School sx={{ mr: 2, fontSize: 32, color: '#14B8A6' }} />
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Lớp 12A2 - THPT Đức Trọng
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.9, lineHeight: 1.7, color: '#ffffff' }}>
              Cùng nhau xây dựng một môi trường học tập tích cực, nơi mỗi học sinh đều có thể phát huy tối đa tiềm năng của mình.
            </Typography>
            <Box>

            </Box>
            
           <Box sx={{ display: 'flex', gap: 2 }}>
              {[
                { icon: Facebook, color: '#1877F2' },
                { icon: Instagram, color: '#E4405F' },
                { icon: YouTube, color: '#FF0000' },
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <IconButton
                    key={index}
                    sx={{
                      backgroundColor: social.color,
                      color: 'white',
                      '&:hover': {
                        backgroundColor: social.color,
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <IconComponent />
                  </IconButton> 
                  
                );
              })}
            </Box>
            <Box sx = {{mt: "3cm"}}><Tooltip/></Box>


             
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Liên kết nhanh
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                'Trang chủ',
                'Bài viết học tập',
                'Thông tin lớp học',
                'Liên hệ',
                'Tài liệu ôn tập',
              ].map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: 0.8,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                      color: '#14B8A6',
                      paddingLeft: 1,
                    },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" sx = {{mt : "2.5cm"}}>
                <Social />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Thông tin liên hệ
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2,  }}>
              {[
                { icon: LocationOn, text: 'Tập thể lớp 12A2, Trường THPT Đức Trọng, Lâm Đồng' },
                { icon: Email, text: 'emerldforever1609@gmail.com' },
                { icon: Phone, text: '0987706319' },
              ].map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5,  }}>
                    <IconComponent sx={{ color: '#14B8A6', fontSize: 20 }} />
                    <Typography variant="body2" sx={{ opacity: 0.9, color: '#ffffff' }}>
                      {contact.text}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 , color: '#ffffff'}}>
            © 2025 Lớp 12A2.<p/> 
           Biên soạn nội dung bởi toàn thể học sinh 12A2 - THPT Đức Trọng <p/> Designed by Anh :3<p></p>
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7, fontsize: 50 , color: '#ffffff'}}>
            "Học tập không bao giờ là quá muộn" - Aristotle
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;