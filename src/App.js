import React from 'react';
import Header from './components/Header/Header';
import SearchContainer from './components/SearchContainer/SearchContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';




function App() {
  return (
    <Container>
      <Header />
      <SearchContainer />
    </Container>
  );
}

export default App;
