import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
display: flex;
flex-direction: row;
background-color: black;
color: white;
padding: 10px;
`;

function App() {
  return <Container>
    <Header>Movie App with React</Header>
    Yessir!</Container>;
}

export default App;
