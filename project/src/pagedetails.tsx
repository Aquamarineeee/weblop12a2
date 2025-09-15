import React, { Suspense, lazy } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Pagedetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) return <div>Không tìm thấy trang</div>;

  const Page = lazy(() => import(`../content/para${id}.tsx`));

  return (
    <Suspense fallback={<div>Đang tải nội dung...</div>}>
      <Page />
      {/* Nút quay lại */}
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#14B8A6",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        ⬅ Quay lại trang chủ
      </button>
    </Suspense>
  );
};

export default Pagedetails;
