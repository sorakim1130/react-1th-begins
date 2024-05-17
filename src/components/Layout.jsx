import styled from "@emotion/styled";

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

export default Layout;
