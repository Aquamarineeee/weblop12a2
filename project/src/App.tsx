import React, { Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import { theme } from "./theme";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ArticlesSection from "./components/ArticlesSection";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Page1 from "./content/para1";
import Page2 from "./content/para2";
import Page3 from "./content/para3";
import Page4 from "./content/para4";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Suspense fallback={<div>Đang tải trang...</div>}>
            <Routes>
              {/* Trang chủ */}
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <StatsSection />
                    <ArticlesSection />
                  </>
                }
              />

              {/* Route động cho page1, page2, page8... */}
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
              <Route path="/page4" element={<Page4 />} />
            </Routes>
          </Suspense>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
