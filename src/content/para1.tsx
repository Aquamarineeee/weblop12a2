import React, {useEffect} from "react";
import { Box, Typography, Card, CardContent, Grid, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Quaylai from "../des/quaylai";
import Clickk from "../des/clickk";


const Page1 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

  // Hàm handle external link
  const goTo = (url: string) => {
    window.open(url, "_blank");
  };

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
        Flashcard, Spaced Repetition hay Mindmap? Phương pháp nào nhớ từ hiệu quả nhất?
      </Typography>

      {/* Đoạn mở đầu */}
      <Typography sx={{ fontSize: "17px", mb: 3, lineHeight: 1.8 }}>
        Bạn có bao giờ rơi vào cảnh này chưa: tối hôm qua bạn “cày” gần 30 từ tiếng Anh, sáng hôm sau đi kiểm tra lại chỉ nhớ… lơ mơ vài từ? 
        Học từ vựng giống như đổ nước vào chiếc rổ thủng, học mãi mà không giữ được. 
        Vậy thì đâu mới là cách giúp bạn nhớ từ hiệu quả? 
        Hãy cùng mình tìm hiểu về ba phương pháp được học sinh ưa chuộng nhất hiên nay chính là: Flashcard, Spaced Repetition và Mindmap (sơ đồ tư duy).
      </Typography>

      {/* Flashcard */}
      <Card
        sx={{
          mb: 4,
          boxShadow: 4,
          "&:hover": { transform: "translateY(-6px)", boxShadow: 8 },
          transition: "0.3s",
        }}
        component={motion.div}
        whileHover={{ scale: 1.02 }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Montserrat", fontWeight: "600", mb: 2 }}
          >
            Flashcard – nhỏ gọn, tiện lợi nhưng dễ nhàm chán
          </Typography>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://i.pinimg.com/originals/5f/60/b4/5f60b43619affccff4aca74d1b17fecc.gif"
                alt="Flashcard"
                sx={{
                  width: "100%",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "transform 0.4s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
                onClick={() =>
                  goTo(
                    "https://www.didongmy.com/cong-cu-ai-tao-flashcard-mien-phi-tot-nhat-2025"
                  )
                }
              />
            </Grid>
            <Box
              sx={{ cursor: "pointer", color: "blue", textDecoration: "underline", ml: "5cm" }}
            >
              <Clickk/>
            </Box>
            <Grid item xs={12} md={6}>
              <Typography sx={{ fontSize: "17px", lineHeight: 1.7 }}>
                Flashcard là những tấm thẻ nhỏ, một mặt ghi từ, một mặt ghi nghĩa, ví dụ hoặc hình minh họa. 
                Đây là cách học “kinh điển” mà nhiều thế hệ học sinh đã áp dụng. 
                Điểm cộng lớn nhất của flashcard là sự tiện lợi: bạn có thể cầm theo cả bộ thẻ, tranh thủ ôn khi ngồi xe buýt, trong giờ ra chơi, hay bất cứ lúc nào có vài phút rảnh.
                <br />
                Ngoài ra, flashcard giúp bạn chủ động kiểm tra trí nhớ bằng cách che mặt sau, cố gắng nhớ nghĩa trước khi lật thẻ. Đây gọi là active recall – kỹ thuật đã được chứng minh giúp não bộ ghi nhớ bền hơn.
                <br />
                Tuy nhiên, flashcard cũng có nhược điểm. Nếu bạn chỉ viết từ và nghĩa rồi lật đi lật lại, sẽ dễ rơi vào tình trạng học vẹt, nhớ tạm thời nhưng quên rất nhanh. 
                Không ít học sinh than phiền rằng sau một tuần học 100 thẻ, họ chỉ còn nhớ… chưa đến một nửa.
              </Typography>
              <Typography sx={{ mt: 2, fontWeight: "600" }}>
                Tips học flashcard hiệu quả:
              </Typography>
              <ul>
                <li>Thêm ví dụ câu hoặc hình ảnh minh họa vào thẻ để từ gắn liền với ngữ cảnh.</li>
                <li>Chia bộ thẻ thành nhóm nhỏ (10–15 từ) để ôn từng ngày, tránh quá tải.</li>
                <li>Thỉnh thoảng đảo thứ tự thẻ để tránh học theo quán tính.</li>
              </ul>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Spaced Repetition */}
      <Card
        sx={{
          mb: 4,
          boxShadow: 4,
          "&:hover": { transform: "translateY(-6px)", boxShadow: 8 },
          transition: "0.3s",
        }}
        component={motion.div}
        whileHover={{ scale: 1.02 }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Montserrat", fontWeight: "600", mb: 2 }}
          >
            Spaced Repetition – học ít, nhớ lâu nhờ khoa học
          </Typography>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Typography sx={{ fontSize: "17px", lineHeight: 1.7 }}>
                Khác với flashcard truyền thống, SRS (Spaced Repetition System) là phương pháp dựa trên nguyên lý “lặp lại ngắt quãng”. 
                Hiểu đơn giản là việc ôn lại đúng vào lúc bộ não sắp quên từ đó. 
                Ví dụ: bạn học từ “accomplish” hôm nay, ngày mai hệ thống sẽ nhắc lại, vài ngày sau ôn tiếp, rồi kéo giãn dần thành một tuần, một tháng… 
                Nhờ vậy, từ vựng được củng cố liên tục mà không bị rơi rụng.
                <br />
                Các ứng dụng nổi tiếng áp dụng Spaced Repetition là Anki, Quizlet, MochiMochi. 
                Điểm mạnh nhất của Spaced Repetition là tiết kiệm thời gian: bạn không cần ôn đi ôn lại cả trăm từ mỗi ngày, chỉ cần theo lịch app gợi ý. 
                Nhờ vậy, với cùng một lượng từ, bạn sẽ nhớ lâu hơn nhiều so với cách học thủ công.
                <br />
                Tuy nhiên, Spaced Repetition cũng có một “điểm yếu”: bạn phải kiên trì. Nếu vài ngày quên mở app, chuỗi lặp lại sẽ bị đứt, từ vựng dễ bị trôi. 
                Ngoài ra, một số bạn không quen học trên điện thoại hoặc thấy giao diện khô khan thì sẽ nhanh nản.
              </Typography>
              <Typography sx={{ mt: 2, fontWeight: "600" }}>
                Tips học bằng Spaced Repetition:
              </Typography>
              <ul>
                <li>Dành 15–30 phút cố định mỗi ngày đều đặn để ôn lại từ vựng</li>
                <li>Kết hợp với ví dụ thực tế: học từ trong app rồi tìm cách dùng nó trong bài viết, đoạn hội thoại trong cuộc sống hàng ngày.</li>
              </ul>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Box
                component="img"
                src="https://i.pinimg.com/originals/55/2b/9f/552b9f7bc0c547d179ef4cb1a70ed519.gif"
                alt="Spaced Repetition"
                sx={{
                  width: "100%",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "transform 0.4s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
                onClick={() =>
                  goTo(
                    "https://blogchiasekienthuc.com/la-gi/active-recall-va-spaced-repetition-la-gi.html"
                  )
                }
              />
            </Grid>
          </Grid>
          <Box
              sx={{ cursor: "pointer", color: "blue", textDecoration: "underline", ml : "20cm"}}
            >
              <Clickk/>
            </Box>
        </CardContent>
      </Card>

      {/* Mindmap */}
      <Card
        sx={{
          mb: 4,
          boxShadow: 4,
          "&:hover": { transform: "translateY(-6px)", boxShadow: 8 },
          transition: "0.3s",
        }}
        component={motion.div}
        whileHover={{ scale: 1.02 }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Montserrat", fontWeight: "600", mb: 2 }}
          >
            Mindmap – học theo cụm từ vựng, tư duy sáng tạo
          </Typography>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://i.pinimg.com/originals/b7/fe/09/b7fe0977bad1950393d6450f32a37ca0.gif"
                alt="Mindmap"
                sx={{
                  width: "100%",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "transform 0.4s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
                onClick={() =>
                  goTo(
                    "https://thesol.edu.vn/ban-do-tu-duy-tu-vung-ielts-topic-tourism-and-travel"
                  )
                }
              />
            </Grid>
            <Box
              sx={{ cursor: "pointer", color: "blue", textDecoration: "underline", ml: "8.5cm" }}
            >
              <Clickk/>
            </Box>
            <Grid item xs={12} md={6}>
              <Typography sx={{ fontSize: "17px", lineHeight: 1.7 }}>
                Nếu bạn là người thích hình ảnh, màu sắc và sự kết nối, thì Mindmap chính là lựa chọn đáng thử. 
                Với sơ đồ tư duy, bạn bắt đầu bằng một chủ đề trung tâm, sau đó tỏa nhánh ra các nhánh phụ chứa từ vựng liên quan.
                <br />
                Ví dụ, với chủ đề “Travel”, bạn có thể vẽ các nhánh:
                <ul>
                  <li>Transportation: plane, train, bus, subway…</li>
                  <li>Accommodation: hotel, hostel, homestay…</li>
                  <li>Activities: sightseeing, hiking, shopping…</li>
                </ul>
                Nhờ cách này, từ vựng không còn là những “mảnh rời rạc”, mà gắn kết thành hệ thống. 
                Não bộ vốn ghi nhớ tốt hơn khi có sự liên tưởng và trực quan, nên học bằng Mindmap giúp bạn ghi nhớ sâu và logic hơn.
                <br />
                Tuy nhiên, Mindmap có nhược điểm là tốn thời gian. Bạn cần ngồi vẽ, tô màu, thiết kế nhánh – khá mất công nếu lịch học dày đặc. 
                Ngoài ra, phương pháp này phù hợp hơn để hệ thống hóa kiến thức theo chủ đề, chứ không phải để nhồi nhét số lượng lớn từ vựng trong thời gian ngắn.
              </Typography>
              <Typography sx={{ mt: 2, fontWeight: "600" }}>
                Tips học bằng Mindmap:
              </Typography>
              <ul>
                <li>Dùng màu sắc khác nhau cho mỗi nhánh để tăng sự trực quan.</li>
                <li>Vẽ hình minh họa hoặc icon bên cạnh từ để dễ nhớ.</li>
                <li>Học từng chủ đề nhỏ, sau đó liên kết nhiều mindmap thành “bản đồ từ vựng lớn”.</li>
              </ul>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* So sánh & kết hợp */}
      <Card
        sx={{
          mb: 4,
          p: 3,
          boxShadow: 3,
          borderLeft: "6px solid #14B8A6",
        }}
      >
        <Typography sx={{ fontSize: "17px", lineHeight: 1.8 }}>
          So sánh & cách kết hợp ba phương pháp
          <ul>
            <li>Flashcard: đơn giản, nhanh gọn, học ở bất cứ đâu nhưng dễ quên nếu không có ngữ cảnh.</li>
            <li>Spaced Repetition: khoa học, tiết kiệm thời gian, nhớ lâu nhưng cần kỷ luật.</li>
            <li>Mindmap: sáng tạo, học theo cụm, phù hợp với người học hiệu quả thông qua hình ảnh nhưng tốn công.</li>
          </ul>
          Vậy nên, thay vì hỏi “cái nào tốt nhất?”, hãy thử nghĩ đến việc kết hợp:
          <ul>
            <li>Dùng Mindmap để xây hệ thống từ theo chủ đề.</li>
            <li>Từ Mindmap, tạo Flashcard để học nhanh từng từ.</li>
            <li>Đưa Flashcard vào Spaced Repetition để ôn tập theo lịch và ghi nhớ dài hạn.</li>
          </ul>
          👉 Cách này vừa bao quát, vừa chi tiết, lại vừa duy trì trí nhớ lâu dài.
        </Typography>
      </Card>

      {/* Kết luận */}
      <Typography
        sx={{
          mt: 4,
          fontSize: "18px",
          fontWeight: "500",
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        Công cụ chỉ là trợ thủ, kiên trì mới là chìa khóa
        <br />
        Tóm lại, không có phương pháp nào “thần thánh” cho tất cả mọi người. 
        Mỗi phương pháp đều có ưu và nhược điểm riêng. 
        Điều quan trọng là bạn hãy thử nghiệm, chọn hoặc kết hợp sao cho phù hợp với thói quen và phong cách học của mình.
        <br />
        Nhớ rằng, công cụ chỉ là trợ thủ. “Bí quyết nhớ từ lâu” thật sự nằm ở sự kiên trì và chủ động của bạn. 
        Chỉ cần biến việc ôn từ thành thói quen hằng ngày, bạn sẽ thấy từ vựng không còn là nỗi ám ảnh, 
        mà trở thành “tài sản” quý giá theo bạn suốt cả hành trình học tập.
      </Typography>
    </Box>
  );
};

export default Page1;
