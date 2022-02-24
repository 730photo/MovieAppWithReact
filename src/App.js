import styled from "styled-components";
import MovieComponent from "./components/MovieComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

//Style for the header
const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  color: white;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555555;
`;

//Movie App With React
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// Movie Image Icon
const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`
// Search Box
const SearchBox = styled.div`
  display: flex;
  flex-direction:row;
  padding: 10px 10px;
  background-color: white;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
  align-items: center;
`

// Search Box Image Icon
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;

// Search input box
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;

// Movie list container
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
`;

function App() {
  return <Container>
    <Header><AppName>
      <MovieImage src="/movie-icon.svg" />
      Movie App w/ React</AppName>
      <SearchBox>
        <SearchIcon src="/search-icon.svg"/>
        <SearchInput placeholder="Search Movie" />
      </SearchBox>
      </Header>
      <MovieListContainer>
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
      </MovieListContainer>
    </Container>;
}

export default App;
