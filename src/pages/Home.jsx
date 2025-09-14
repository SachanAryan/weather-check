import { useState } from "react";
import { Box, styled } from "@mui/material";
import Sunset from "../assets/bg.jpg";
import Form from "../components/Form.jsx";
import Info from "../components/Info.jsx";

const Back = styled(Box)({
  background: "#222",
  height: "97.5vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  borderRadius: 10,
});

const Component = styled(Box)({
  height: "85vh",
  display: "flex",
  alignItems: "center",
  margin: "auto",
  width: "75%",
  background: "#282626ff",
  // backgroundImage: `url(${Sunset})`,
  backgroundSize: "cover",
  borderRadius: 20,
  boxShadow: "0 0 4px 0 rgba(0, 0, 0)",
});

const Container = styled(Box)({
  width: "75%",
  height: "80%",
  margin: "auto",
});

const Home = () => {
  const [result, setResult] = useState({});

  return (
    <Back>
      <Component>
        <Container>
          <Form setResult={setResult} />
          <Info result={result} />
        </Container>
      </Component>
    </Back>
  );
};

export default Home;
