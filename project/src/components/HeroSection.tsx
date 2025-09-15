import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { TrendingUp, EmojiEvents, Group } from '@mui/icons-material';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const MotionTypography = motion(Typography);
  const MotionBox = motion(Box);

  const itemsRight = [
    { icon: TrendingUp, title: 'Tiến bộ mỗi ngày', desc: 'Phát triển kỹ năng học tập' },
    { icon: EmojiEvents, title: 'Thành tích xuất sắc', desc: 'Đạt kết quả cao trong học tập' },
    { icon: Group, title: 'Đoàn kết', desc: 'Cùng nhau vượt qua thử thách' },
  ];

  return (
    <Box sx={{ position: 'relative', color: 'white', py: 12, overflow: 'hidden' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="https://www.pexels.com/vi-vn/download/video/33289535/" type="video/mp4" />
      </video>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          {/* LEFT TEXT */}
          <Grid item xs={12} md={8}>
            <MotionTypography
              variant="h1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                mb: 3,
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Chào mừng đến với trang web hướng nghiệp của tập thể học sinh lớp 12A2
            </MotionTypography>

            <MotionTypography
              variant="h5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              sx={{ mb: 4, opacity: 0.9, lineHeight: 1.6 }}
            >
              Nơi chia sẻ kiến thức, truyền cảm hứng và đồng hành cùng các bạn trên con đường chinh phục ước mơ đại học!
            </MotionTypography>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #FF5252, #26C6DA)',
                  },
                }}
              >
                Khám phá bài viết
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Tham gia cộng đồng
              </Button>
            </MotionBox>
          </Grid>

          {/* RIGHT ICONS */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {itemsRight.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                  >
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <IconComponent sx={{ color: '#FFD700' }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8, color: '#ffffff' }}>
                        {item.desc}
                      </Typography>
                    </Box>
                  </MotionBox>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
