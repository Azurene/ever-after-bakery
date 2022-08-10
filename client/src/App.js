import React, { useState } from 'react'
import Header from './components/Header';
import About from './components/About';
import BakedGoods from './components/Baked-Goods';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  const [currentPage, setCurrentPage] = useState()

  function pageChanger(page) {

    if (page === "About") {
      return <About />
    }
    if (page === "Baked-Goods") {
      return <BakedGoods />
    }
    if (page === "Newsletter") {
      return <Newsletter />
    }
    if (page === "Contact") {
      return <Contact />
    }
    if (page === "Login") {
      return <Login />
    }

  }


  // uses state to get the page
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header
          setCurrentPage={setCurrentPage}
          className="App-header" />
        {pageChanger(currentPage)}
        <Footer />
        {/* <LoginMutation /> */}
      </div>
    </ApolloProvider>
  );
}

export default App;
