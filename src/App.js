import React from "react";
import PictureContextProvider from "./contexts/PictureContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Item from "./components/Item";
import Header from "./components/Header";
import styled from "styled-components";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const Container = styled.div`
    max-width: 1400px;
    margin: auto;
`;

function App() {
  var handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  return (
    <PictureContextProvider>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Container>
           <Header
              handleSubmit={handleSubmit}
           /> 
           <Navigation/>       
           <Switch>
             <Route
               exact 
               path="/"
               render={()=> <Redirect to="/taipei101"/>}
             />
              <Route 
               path="/taipei101"
               render={()=> <Item searchTerm="taipei101"/>}
             />
             <Route 
               path="/jioufen"
               render={()=> <Item searchTerm="jioufen"/>}
             />
             <Route 
               path="/yangmingshan"
               render={()=> <Item searchTerm="yangmingshan"/>}
             />
             <Route 
               path="/kenting"
               render={()=> <Item searchTerm="kenting"/>}
             />
             <Route 
               path="/shifen"
               render={()=> <Item searchTerm="shifen"/>}
             />
             <Route 
               path="/sunmoonlake"
               render={()=> <Item searchTerm="sun moon lake"/>}
             />
             <Route 
               path="/qingjing"
               render={()=> <Item searchTerm="qingjing"/>}
             />
             <Route 
               path="/Sanxiantai"
               render={()=> <Item searchTerm="sanxiantai"/>}
             />
             <Route
               path="/search/:searchInput"
               render={props => (
                 <Search searchTerm={props.match.params.searchInput} />
               )}
             />
             <Route component={NotFound} />
           </Switch>
        </Container>
        <Footer/>

      </HashRouter>
    
    </PictureContextProvider>
  );
}

export default App;
