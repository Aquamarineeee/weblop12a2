import React, { useEffect } from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Quaylai from "../des/quaylai";
import Clickk from "../des/clickk";

const Page3 = () => {
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
        Khi đam mê chỉ là một phần trong bức tranh cuộc đời
      </Typography>

      {/* Nội dung chính */}
      <Typography sx={{ fontSize: "20px", mb: 3, lineHeight: 1.8 }}>
        Bạn đã bao giờ tự hỏi: “Nếu mình chưa biết đam mê của mình là gì thì có nên chọn ngành, chọn nghề không? Liệu mình có đi sai đường?” Đây là băn khoăn của rất nhiều học sinh hiện nay – đặc biệt là thế hệ 200x.
        <br />
        Câu chuyện: Thế hệ 200x – Phải tìm ra đam mê
        <br />
        L. đến với tôi khi em còn ở lớp 10, mang theo nỗi lo: “Con chưa biết đam mê của mình là gì. Con sợ sẽ chọn sai ngành học và chán lúc vào đại học.” Và L. không phải là người duy nhất, rất nhiều bạn đồng trang lứa cũng có cùng mối bận tâm.
        <br />
        Cha mẹ của các bạn trẻ sinh ra trong những năm 2000 – thế hệ 0x – thường khẳng định: “Mình chẳng ép con học gì đâu, con thích gì thì học cái đó.” Nhưng điều khiến họ lo lắng lại là: dù có quyền tự quyết, con cái vẫn bối rối vì “chẳng tìm ra được đam mê của bản thân.”
        <br />
        Khi được hỏi về “đam mê”, nhiều bạn học sinh không thể đưa ra định nghĩa rõ ràng. Phần lớn thường nhắc đến những video của các nhân vật nổi tiếng trên mạng, với lời khuyên rằng: “Phải làm công việc mình đam mê thì mới hạnh phúc và thành công.” Tôi gọi vui đây là “hội chứng đam mê.”
      </Typography>
      <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://i.pinimg.com/736x/f8/f7/2d/f8f72db32fb076c5cc99b9ef79381165.jpg"
            alt="Hình minh họa 2"
            sx={{ width: "100%", borderRadius: "10px", objectFit: "cover", height: "500px", mb: 3}}
          />
        </Grid>
      <Grid container spacing = {2}>
        <Grid item xs = {12} md = {6}>
          <Typography sx = {{fontSize :"20px", mb : "2cm"}}>
            <br /><br />
            Thực tế, truyền thông hiện đại dễ khiến thế hệ 0x hiểu sai về khái niệm này:
            <ul>
              <li>Thứ nhất, để biết mình yêu thích điều gì cần một quá trình dài: thăm dò, trải nghiệm, chiêm nghiệm, rồi lại thử lại. Vì vậy, đam mê không phải là điều kiện tiên quyết để chọn nghề, mà thường là kết quả sau hành trình học tập và làm việc.</li>
              <li>Thứ hai, không phải ai cũng có thể kiếm sống từ đam mê. Ví dụ, một bạn rất giỏi đánh trống nhưng vì trách nhiệm gia đình nên chọn con đường kinh doanh. Đam mê đánh trống chỉ còn là sở thích buổi tối cuối tuần – nhưng vẫn mang lại niềm vui.</li>
              <li>Thứ ba, không phải ai cũng đặt “đam mê nghề nghiệp” làm trung tâm cuộc đời. Nhiều người chỉ cần một công việc ổn định, môi trường thân thiện, đồng nghiệp tốt. Hạnh phúc của họ đến từ gia đình, con cái, hoặc những giá trị ngoài công việc. Vì thế, việc “cứ phải tìm đam mê trước rồi mới chọn nghề” chưa chắc đã đúng với tất cả mọi người.</li>
            </ul>
            Nguồn: huongnghiepsongan
      </Typography>
        </Grid>
        
      </Grid>
      

      {/* Hình ảnh minh họa */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://i.pinimg.com/736x/bc/5f/cf/bc5fcf6702d80b12b36c9d5e55b6fe4e.jpg"
            alt="Hình minh họa 1"
            sx={{ width: "100%", borderRadius: "10px"}}
          />
        </Grid>
      </Grid>

      {/* Kết luận */}
      <Typography sx={{ fontSize: "20px", lineHeight: 1.8, mb: 3 }}>
        Tóm lại, học tập và chọn nghề không nhất thiết phải bắt đầu bằng việc tìm ra “đam mê.” Quan trọng hơn là sự chủ động trải nghiệm và tinh thần trách nhiệm trong từng lựa chọn.
        <br />
        Hãy thử tự hỏi: “5 năm nữa, mình muốn trở thành ai? Và mình có thể bắt đầu từ đâu, ngay hôm nay?” Có lẽ câu trả lời không nằm ở việc ép mình tìm ra đam mê, mà ở việc dám đi, dám thử, và kiên nhẫn đồng hành với chính bản thân trên hành trình trưởng thành.
      </Typography>

      {/* Ví dụ Clickk nếu muốn */}
      <Box sx={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>
        <Clickk />
      </Box>
    </Box>
  );
};

export default Page3;
