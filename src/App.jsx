import styled from "@emotion/styled";
import Layout from "./components/Layout.jsx";
import TodoContainer from "./components/todo/TodoContainer.jsx";

const App = () => {
  return (
    <Container>
      <Layout>
        <TodoContainer />
      </Layout>
    </Container>
  );
};

const Container = styled.div``;

export default App;
