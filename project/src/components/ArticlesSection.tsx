import React, { useState, useMemo } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  InputAdornment,
  Chip,
  Stack,
  Paper
} from '@mui/material';
import { Search, FilterList } from '@mui/icons-material';
import ArticleCard, { Article } from './ArticleCard';


const ArticlesSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const articles: Article[] = [
    {
      id: 1,
      title: 'Phương pháp học tập từ vựng Tiếng Anh hiệu quả',
      excerpt: 'Chia sẻ những phương pháp học tập hiệu quả, quản lý thời gian và kỹ thuật ghi nhớ giúp các bạn chuẩn bị tốt nhất cho kỳ thi quan trọng.',
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg',
      author: 'Nguyễn Thanh Nhã',
      date: '12/09/2025',
      category: 'Học tập',
      readTime: '5 phút đọc',
    },
    {
      id: 2,
      title: 'Bạn đã bao giờ tự hỏi: Sau khi tốt nghiệp lớp 12, mình sẽ đi đâu, làm gì, trở thành ai?',
      excerpt: 'Khám phá những cách duy trì động lực học tập, vượt qua áp lực và giữ vững tinh thần qua những lúc khó khăn nhất',
      image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg',
      author: 'Trương Minh Toàn',
      date: '10/09/2025',
      category: 'Động lực',
      readTime: '7 phút đọc',
    },
    {
      id: 3,
      title: 'Khi đam mê chỉ là một phần trong bức tranh cuộc đời',
      excerpt: 'Mỗi người cần có một góc nhìn khác về đam mê trong cuộc sống, theo từng khía cạnh khác nhau và thực tế hơn',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
      author: 'Nguyễn Chu Vân Anh',
      date: '05/09/2025',
      category: 'Động lực',
      readTime: '6 phút đọc',
    },
    {
      id: 4,
      title: 'Thức dậy đi, mùa thi đang gọi chúng ta!',
      excerpt: 'Học tập là hành trình dài, và năm cuối cấp là chặng đường nước rút và làm thế nào để duy trì động lực học tốt nhất.',
      image: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg',
      author: 'Nguyễn Trúc Mai',
      date: '08/09/2025',
      category: 'Thi cử',
      readTime: '8 phút đọc',
    },
    {
      id: 5,
      title: 'Tâm lý tích cực: Chìa khóa thành công',
      excerpt: 'Tìm hiểu về tầm quan trọng của tâm lý tích cực, cách xây dựng tư duy lạc quan và đối mặt với thử thách.',
      image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg',
      author: '',
      date: '05/01/2025',
      category: 'Động lực',
      readTime: '4 phút đọc',
    },
    {
      id: 6,
      title: 'Thông tin xét tuyển đại học năm 2025',
      excerpt: 'Cập nhật thông tin mới nhất về xét tuyển đại học, các phương thức tuyển sinh và lộ trình chuẩn bị hồ sơ.',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
      author: '',
      date: '07/01/2025',
      category: 'Thi cử',
      readTime: '12 phút đọc',
    },
    {
      id: 7,
      title: 'Lộ trình ôn tập các môn khoa học tự nhiên',
      excerpt: 'Hướng dẫn chi tiết về lộ trình ôn tập Lý, Hóa, Sinh một cách khoa học và hiệu quả nhất.',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
      author: '',
      date: '03/01/2025',
      category: 'Học tập',
      readTime: '10 phút đọc',
    },
    {
      id: 8,
      title: 'Hướng dẫn chọn ngành nghề phù hợp với bản thân',
      excerpt: 'Khám phá bản thân, tìm hiểu về các ngành nghề và cách đưa ra quyết định đúng đắn cho tương lai.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      author: '',
      date: '01/01/2025',
      category: 'Kỹ năng',
      readTime: '9 phút đọc',
    },
  ];

  const categories = [
    { value: 'all', label: 'Tất cả', color: '#6B7280' },
    { value: 'học tập', label: 'Học tập', color: '#14B8A6' },
    { value: 'động lực', label: 'Động lực', color: '#8B5CF6' },
    { value: 'kỹ năng', label: 'Kỹ năng', color: '#F97316' },
    { value: 'thi cử', label: 'Thi cử', color: '#EF4444' },
  ];

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || 
                             article.category.toLowerCase() === selectedCategory.toLowerCase();
      return matchesSearch && matchesCategory;
    });
  }, [articles, searchTerm, selectedCategory]);

  return (
    <Box sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            mb: 2,
            fontWeight: 700,
            background: 'linear-gradient(45deg, #14B8A6, #8B5CF6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Bài viết nổi bật 📚
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}
        >
          Những bài viết hữu ích để giúp các bạn học tập tốt hơn và đạt được những mục tiêu cao nhất
        </Typography>

        {/* Search and Filter Section */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            mb: 6,
            backgroundColor: '#F8FAFC',
            borderRadius: 3,
            border: '1px solid #E5E7EB',
          }}
        >
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              placeholder="Tìm kiếm bài viết... (ví dụ: đại học, học tập, động lực)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: '#14B8A6' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  backgroundColor: 'white',
                  '&:hover fieldset': {
                    borderColor: '#14B8A6',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#14B8A6',
                  },
                },
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <FilterList sx={{ color: '#6B7280' }} />
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
              Lọc theo chủ đề:
            </Typography>
          </Box>

          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
            {categories.map((category) => (
              <Chip
                key={category.value}
                label={category.label}
                onClick={() => setSelectedCategory(category.value)}
                variant={selectedCategory === category.value ? 'filled' : 'outlined'}
                sx={{
                  backgroundColor: selectedCategory === category.value ? category.color : 'transparent',
                  color: selectedCategory === category.value ? 'white' : category.color,
                  borderColor: category.color,
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: selectedCategory === category.value ? category.color : `${category.color}20`,
                  },
                }}
              />
            ))}
          </Stack>
        </Paper>

        {/* Results Info */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary">
            {searchTerm || selectedCategory !== 'all' ? (
              <>
                Tìm thấy <strong>{filteredArticles.length}</strong> bài viết
                {searchTerm && (
                  <> cho từ khóa "<strong>{searchTerm}</strong>"</>
                )}
                {selectedCategory !== 'all' && (
                  <> trong chủ đề "<strong>{categories.find(c => c.value === selectedCategory)?.label}</strong>"</>
                )}
              </>
            ) : (
              <>Hiển thị tất cả <strong>{articles.length}</strong> bài viết</>
            )}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <Grid item xs={12} sm={6} lg={4} key={article.id}>
                <ArticleCard article={article} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Paper
                elevation={0}
                sx={{
                  p: 6,
                  textAlign: 'center',
                  backgroundColor: '#F9FAFB',
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                  😔 Không tìm thấy bài viết nào
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Hãy thử tìm kiếm với từ khóa khác hoặc chọn chủ đề khác
                </Typography>
              </Paper>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default ArticlesSection;