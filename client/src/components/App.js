import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

import Header from "./Header";
import Page from "./Page";
import articles from "./RoutePages/Articles/Articles";
import "../style/main.scss";

class App extends React.Component {
  state = {
    menuOpen: false,
    loggedInState: false,
    inscriptionsList: articles,
  };

  componentDidMount = () => {
    axios
      .get(`/api/post`, {})
      .then((res) => {
        const newArticles = res.data;

        let inscriptionsList = [...this.state.inscriptionsList, ...newArticles ];

        console.log(inscriptionsList);
        inscriptionsList = inscriptionsList.map((inscription, i) => {
          if (!inscription.number) {
            inscription.number = ++i;
          }

          return inscription;
        });
        
        inscriptionsList.reverse();

        this.setState({
          inscriptionsList,
        });
      })
      .catch((err) => alert(err));
  };

  handleLoggedStatus = (loggedInState) => {
    this.setState({
      loggedInState,
    });
  };

  isMenuOpen = (menuOpen) => {
    this.setState({
      menuOpen,
    });
  };

  render() {
    return (
      <Router>
        <Header isMenuOpen={this.isMenuOpen} />
        <Page
          menuOpen={this.state.menuOpen}
          handleLoggedStatus={this.handleLoggedStatus}
          loggedInState={this.state.loggedInState}
          inscriptionsList={this.state.inscriptionsList}
        />
      </Router>
    );
  }
}

export default App;
