import React, { useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Quaylai from "../des/quaylai";
import Clickk from "../des/clickk";

const Page4 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{ px: "2cm", py: "1cm", fontFamily: "Palatino Linotype" }}
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Nút quay lại */}
      <Box sx={{ mb: 3, cursor: "pointer" }} onClick={() => navigate("/")}>
        <Quaylai />
      </Box>
      {/* Tiêu đề chính */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Montserrat",
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
          background: "linear-gradient(270deg, #14B8A6, #8B5CF6, #14B8A6)",
          backgroundSize: "600% 600%",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "gradientMove 6s ease infinite",
          "@keyframes gradientMove": {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
        }}
      >
        Thức dậy đi, mùa thi đang gọi chúng ta!
      </Typography>

      {/* Nội dung bài */}
      <Grid container spacing={3} sx={{ mb: 3 }} alignItems="center">
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // căn giữa theo chiều dọc ảnh
            px: 2, // padding trái phải
          }}
        >
          <Typography sx={{ fontSize: "20px", lineHeight: 1.8 }}>
            🌱 Mỗi người đều có một ngọn lửa trong tim. Học tập là hành trình dài, 
            và năm cuối cấp là chặng đường nước rút. Sẽ có lúc bạn thấy mệt mỏi, 
            thấy kiến thức sao mà khó quá, thấy mình thua kém người khác, thấy tương lai mờ mịt. 
            Nhưng bạn ơi, đó không phải là dấu chấm hết, mà chỉ là khoảnh khắc bạn đang leo dốc – 
            và mọi người leo dốc đều thở dốc. Đừng để vài điểm số làm bạn nghi ngờ giá trị của mình.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://i.pinimg.com/1200x/48/1f/ee/481fee755f683c0045b07b01e3b26779.jpg"
            alt="Mùa thi"
            sx={{
              width: "100%",
              height: "500px", // điều chỉnh chiều cao
              objectFit: "cover",
              borderRadius: "10px",
            }}
          >
            
            </Box>
        </Grid>
      </Grid>



      {/* Hình ảnh minh họa */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        
        <Grid item xs={12} md={6}>
          <Typography sx={{ fontSize: "17px", lineHeight: 1.8 }}>
            🌟 Tương lai được viết từ hôm nay. Bạn có thể chưa biết mình muốn làm gì trong tương lai. 
            Nhưng bạn có thể bắt đầu bằng việc làm tốt nhất những gì mình đang có. Mỗi công thức toán học bạn học hôm nay, 
            mỗi đoạn văn bạn phân tích, mỗi từ vựng bạn ghi nhớ – đều là viên gạch xây nên cây cầu đi đến ước mơ.
          </Typography>
        </Grid>
      </Grid>

      <Typography sx={{ fontSize: "20px", mb: 3, lineHeight: 1.8 }}>
        💪 Bạn mạnh mẽ hơn mình nghĩ. Bạn đã từng vượt qua bao lần kiểm tra bất ngờ, bao buổi thuyết trình run rẩy, bao kỳ thi căng thẳng – vậy tại sao lại nghĩ mình không thể vượt qua kỳ thi này? 
        Hãy nhìn lại hành trình 12 năm học – bao nhiêu lần bạn ngã, rồi lại đứng dậy? Bao nhiêu lần bạn định bỏ cuộc, nhưng vẫn tiếp tục? 
        Bạn là chiến binh – dù không mang giáp sắt, nhưng luôn mang ý chí.
      </Typography>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ fontSize: "20px", lineHeight: 1.8 }}>
            🌈 Tương lai không ở đâu xa – nó đang chờ bạn ở cuối chặng đường này. 
            Bắt đầu ngay hôm nay – vì bạn xứng đáng có một cái kết rực rỡ cho hành trình 12 năm đèn sách. 
            “Không ai biết ngày mai sẽ ra sao, nhưng người dũng cảm là người vẫn học chăm hôm nay.”
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://cdn2.tuoitre.vn/471584752817336320/2024/3/22/8857720-17110949064572087082205.jpg"
            alt="Tương lai"
            sx={{  height: "400px", objectFit: "cover" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page4;
