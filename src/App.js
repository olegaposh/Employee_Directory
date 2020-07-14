import React from 'react';
import Header from './components/Header/header';
import Search from './components/Search/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';




function App() {
  return (
    <Container>
      <Header />
      <Search />
      {/* <Main /> */}
    </Container>
  );
}

export default App;
