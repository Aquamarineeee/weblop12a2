import React, { useEffect } from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Quaylai from "../des/quaylai";

const Page1 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        px: "2cm",
        py: "1cm",
        fontFamily: "Palatino Linotype",
      }}
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
        Bạn đã bao giờ tự hỏi: Sau khi tốt nghiệp lớp 12, mình sẽ đi đâu, làm gì, trở thành ai?
      </Typography>

      {/* Đoạn mở đầu */}
      <Typography sx={{ fontSize: "17px", mb: 3, lineHeight: 1.8 }}>
        Đây không chỉ là câu hỏi của riêng bạn, mà là nỗi băn khoăn chung của hầu hết học sinh cuối cấp. 
        Con đường phía trước rộng mở với nhiều lựa chọn: đại học, cao đẳng, du học, học nghề hay thử sức với những ý tưởng khởi nghiệp. 
        Nhưng để bước đi vững vàng, chúng ta cần một chìa khóa quan trọng: hướng nghiệp.
      </Typography>

      <Typography sx={{ fontSize: "17px", mb: 3, lineHeight: 1.8 }}>
        Hướng nghiệp là quá trình tìm hiểu khả năng, sở thích và giá trị sống của bản thân để đưa ra quyết định nghề nghiệp phù hợp. 
        Ở tuổi 17–18, việc này càng quan trọng vì nó định hình tương lai lâu dài. 
        Nếu chọn ngành học theo phong trào hay theo mong muốn của người khác, bạn có thể rơi vào tình trạng “học xong không làm được việc” hoặc cảm thấy mất hứng thú. 
        Ngược lại, khi biết rõ điểm mạnh – điểm yếu của bản thân, bạn sẽ tìm thấy con đường phù hợp. 
        Chẳng hạn, một bạn thích giao tiếp và sáng tạo có thể chọn ngành truyền thông; trong khi bạn yêu thích logic và con số có thể theo đuổi ngành công nghệ thông tin hoặc tài chính.
      </Typography>

      {/* Hình minh họa */}
      <Box
        component="img"
        src="https://i.pinimg.com/736x/35/78/82/35788246e57124003045c7d0ca929597.jpg"
        alt="Hướng nghiệp"
        sx={{
          width: "100%",
          borderRadius: "10px",
          mb: 3,
        }}
      />

      {/* Khởi nghiệp học đường */}
      <Typography sx={{ fontSize: "17px", mb: 3, lineHeight: 1.8 }}>
        Nhiều học sinh lớp 12 nghĩ rằng khởi nghiệp là việc xa vời, phải đợi đến khi ra trường. Nhưng thực tế, không ít bạn trẻ đã bắt đầu từ những ý tưởng nhỏ ngay khi còn đi học. 
        Ví dụ: có bạn bán đồ handmade online, có bạn sáng tạo nội dung trên mạng xã hội, thậm chí có nhóm học sinh đã cùng nhau khởi nghiệp với sản phẩm tái chế từ rác thải nhựa. 
        Những hoạt động này không chỉ mang lại thu nhập, mà còn giúp rèn luyện kỹ năng quản lý thời gian, làm việc nhóm và tinh thần trách nhiệm.
      </Typography>

      <Box
        component="img"
        src="https://i.pinimg.com/736x/7d/e2/72/7de272c1e1cc1543a06690b61c145103.jpg"
        alt="Khởi nghiệp học đường"
        sx={{
          width: "100%",
          borderRadius: "10px",
          mb: 3,
        }}
      />

      <Typography sx={{ fontSize: "17px", mb: 3, lineHeight: 1.8 }}>
        Điều đáng nói là khởi nghiệp học đường không tách rời khỏi việc học, mà chính kiến thức trên lớp lại trở thành nền tảng. 
        Một ý tưởng kinh doanh nông sản sạch ở địa phương sẽ bền vững hơn nếu người sáng lập có kiến thức về sinh học, kinh tế và môi trường. 
        Học tập và hướng nghiệp không phải là hai con đường tách rời, mà bổ trợ cho nhau. Khi hiểu rõ mình học để làm gì và muốn trở thành ai, bạn sẽ thấy việc học trên lớp có ý nghĩa hơn rất nhiều.
      </Typography>

      {/* Kết luận */}
      <Typography sx={{ fontSize: "17px", mt: 4, lineHeight: 1.8, fontStyle: "italic", textAlign: "center" }}>
        Vậy nên, ngay từ bây giờ, hãy thử đặt cho mình một câu hỏi:
        <br />
        👉 “Trong 5 năm tới, mình muốn trở thành người như thế nào?”
        <br />
        Và bắt đầu chuẩn bị từ hôm nay – bằng chính những giờ học, những trải nghiệm và cả những ước mơ đang nhen nhóm trong tim.
      </Typography>

      <Typography sx={{ fontSize: "16px", mt: 3, fontWeight: "500", textAlign: "right" }}>
        Author: Trương Minh Toàn
      </Typography>
    </Box>
  );
};

export default Page1;
