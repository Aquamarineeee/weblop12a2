import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { TrendingUp, People, MenuBook, EmojiEvents } from '@mui/icons-material';
import { motion } from 'framer-motion';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: People,
      value: '41',
      label: 'Học sinh',
      color: '#14B8A6',
      bgColor: '#F0FDFA',
    },
    {
      icon: MenuBook,
      value: '8+',
      label: 'Bài viết hướng dẫn',
      color: '#8B5CF6',
      bgColor: '#FAF5FF',
    },
    // {
    //   icon: TrendingUp,
    //   value: '95%',
    //   label: 'Tỷ lệ đỗ đại học',
    //   color: '#F97316',
    //   bgColor: '#FFF7ED',
    // },
    // {
    //   icon: EmojiEvents,
    //   value: '28',
    //   label: 'Giải thưởng',
    //   color: '#EF4444',
    //   bgColor: '#FEF2F2',
    // },
  ];

  const MotionPaper = motion(Paper);

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            mb: 6,
            fontWeight: 700,
            background: 'linear-gradient(45deg, #14B8A6, #8B5CF6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Thông tin lớp học 🏆
        </Typography>
        <Grid container spacing={4}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <MotionPaper
                  elevation={0}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    backgroundColor: stat.bgColor,
                    border: `2px solid ${stat.color}20`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.05)',
                      boxShadow: `0 20px 40px ${stat.color}20`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      backgroundColor: stat.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                    }}
                  >
                    <IconComponent sx={{ color: 'white', fontSize: 32 }} />
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: stat.color,
                      mb: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                    {stat.label}
                  </Typography>
                </MotionPaper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
