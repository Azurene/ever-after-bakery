import React, { useState } from 'react'
import Header from './components/Header';
import About from './components/About';
import BakedGoods from './components/Baked-Goods';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import { useQuery, gql } from '@apollo/client';
// import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';


// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

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
 
  

  
  
    <div className="App">
      <Header
        setCurrentPage={setCurrentPage}
        className="App-header" />
      {pageChanger(currentPage)}
      <Footer />
      {/* <LoginMutation /> */}
    </div>
  
  );
}

// const GET_MUTATION = gql`
//   query GetMutation { 
//     loginStuff {
//       id
//       username
//       email
//     }
//   }
// `;
// function LoginMutation() {
//   const { data } = useQuery(GET_MUTATION);

//   return data({ id, username, email } (
//     <div key={id}>
//       <div>{username}</div>
//       <form>{email}</form>
//     </div>
//   ) );
// }


export default App;
