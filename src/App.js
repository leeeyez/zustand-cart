import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import { styled } from "styled-components";
import MyButton from "./components/MyButton";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mypokemon" element={<MyPage />} />
        </Routes>
      </Content>
      <MyButton />
    </>
  );
}

export default App;

const Content = styled.div`
  margin-top: 120px;
`;
