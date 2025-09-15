// ArticleCard.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Box } from '@mui/material';
import { CalendarToday, Person } from '@mui/icons-material';
import Cool from "../des/icon";
import { useNavigate } from "react-router-dom";
import { Article } from './ArticleCard';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const navigate = useNavigate();

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'học tập': return '#14B8A6';
      case 'động lực': return '#8B5CF6';
      case 'kỹ năng': return '#F97316';
      case 'thi cử': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const handleNavigate= () => {
  navigate(`/page${article.id}`);
};

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover .card-media': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Box sx={{ overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="240"
          image={article.image}
          alt={article.title}
          className="card-media"
          sx={{ transition: 'transform 0.3s ease' }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        {/* Category chip */}
        <Box sx={{ mb: 2 }}>
          <Chip
            label={article.category}
            size="small"
            sx={{
              backgroundColor: getCategoryColor(article.category),
              color: 'white',
              fontWeight: 600,
            }}
          />
        </Box>

        {/* Title */}
        <Typography
          variant="h6"
          component="h3"
          sx={{
            mb: 2,
            fontWeight: 600,
            lineHeight: 1.4,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {article.title}
        </Typography>

        {/* Excerpt */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 3,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.6,
          }}
        >
          {article.excerpt}
        </Typography>

        {/* Author + Date */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2,
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Person sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="caption" color="text.secondary">
              {article.author}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <CalendarToday sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="caption" color="text.secondary">
              {article.date}
            </Typography>
          </Box>
        </Box>

        <Typography variant="caption" color="text.secondary" sx={{ mb: 3 }}>
          ⏱️ {article.readTime}
        </Typography>

        {/* 👉 Cool giữ nguyên, chỉ thêm onClick navigate */}
        <div onClick={handleNavigate}>
          <Cool category={article.category} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
