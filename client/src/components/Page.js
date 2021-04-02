import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./RoutePages/HomePage";
import AboutBlog from "./RoutePages/AboutBlog";
import List from "./RoutePages/ArticleList";
import Sources from "./RoutePages/Sources";
import Contact from "./RoutePages/Contact";
import Login from "./RoutePages/Login";
import Admin from "./RoutePages/AdminComponents/Admin";
import AddArticle from "./RoutePages/AdminComponents/AddArticle";
import ConfirmComments from "./RoutePages/AdminComponents/ConfirmComments";
import Messages from "./RoutePages/AdminComponents/Messages";
import ErrorPage from "./RoutePages/ErrorPage";
import Article from "./RoutePages/Articles/Article";

const Page = ({
  menuOpen,
  handleLoggedStatus,
  loggedInState,
  inscriptionsList,
}) => {
  return (
    <div className={`page ${menuOpen ? "open" : ""}`}>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <HomePage {...props} inscriptionsList={inscriptionsList} />
          )}
        />
        <Route path="/blog" exact component={AboutBlog} />
        <Route path="/list" exact component={List} />
        <Route
          path="/sources"
          exact
          render={(props) => (
            <Sources {...props} inscriptionsList={inscriptionsList} />
          )}
        />
        <Route path="/contact" exact component={Contact} />
        <Route
          path="/login"
          exact
          render={(props) => (
            <Login {...props} handleLoggedStatus={handleLoggedStatus} />
          )}
        />
        <Route
          path="/admin"
          exact
          render={(props) => (
            <Admin
              {...props}
              loggedInState={loggedInState}
              handleLoggedStatus={handleLoggedStatus}
            />
          )}
        />
        <Route
          path="/admin/messages"
          exact
          render={(props) => (
            <Messages
              {...props}
              loggedInState={loggedInState}
              handleLoggedStatus={handleLoggedStatus}
            />
          )}
        />
        <Route
          path="/admin/add-article"
          exact
          render={(props) => (
            <AddArticle
              {...props}
              loggedInState={loggedInState}
              handleLoggedStatus={handleLoggedStatus}
            />
          )}
        />
        <Route
          path="/admin/confirm-comments"
          exact
          render={(props) => (
            <ConfirmComments
              {...props}
              loggedInState={loggedInState}
              handleLoggedStatus={handleLoggedStatus}
            />
          )}
        />
        <Route
          path="/article/:title"
          exact
          render={(props) => <Article {...props} inscriptionsList={inscriptionsList} />}
        />
        <Route path="" exact component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default Page;
