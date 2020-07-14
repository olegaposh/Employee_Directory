import React from 'react';
import Header from './components/Header/header';
import Search from './components/Search/Search';
import Main from './components/Main/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import friends from './friends.json';


// console.log(friends)
function App() {
  return (
    <Container>
      <Header />
      <Search />
      <Main />
    </Container>
  );
}

export default App;
