import React from "react";
import SingleInscription from "./SingleInscription.js";
import articles from "./Articles/Articles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


class HomePage extends React.Component {
  state = {
    inscriptionList: articles,
    pageNumber: 1,
    focus: false,
    searchContent: "",
  };

  handleSearchChange = (e) => {
    const searchContent = e.target.value;
    this.setState({
      searchContent,
    });
  };

  handleFocus = () => {
    this.setState({
      focus: true,
    });
  };
  handleBlur = () => {
    this.setState({
      focus: false,
    });
  };

  handleClick = (e) => {
    let { pageNumber } = this.state;

    const { inscriptionsList } = this.props;

    if (e.target.innerText === "<<") {
      pageNumber--;
      if (pageNumber === 0) pageNumber++;
      this.setState({
        pageNumber,
      });
    } else if (e.target.innerText === ">>") {
      if (pageNumber === Math.ceil(inscriptionsList.length / 4)) {
        pageNumber--;
      }

      pageNumber++;

      this.setState({
        pageNumber,
      });
    }
  };

  render() {
    let inscriptions = 0;
    let displayPageNumber = this.state.pageNumber;
    let inscriptionsNumber = 4;
    const { inscriptionsList } = this.props;

   

    let searchedInscription = [];

    if (this.state.pageNumber === 1) {
      const displayPage = inscriptionsList.slice(this.state.pageNumber - 1, 4);

      inscriptions = displayPage.map((ins) => (
        <SingleInscription
          key={ins.number}
          number={ins.number}
          title={ins.title}
          inscriptionContent={ins.inscriptionContent}
          date={ins.date}
          link={`/article/${ins.title}`}
        />
      ));
    } else {
      displayPageNumber = (this.state.pageNumber - 1) * 4;

      const displayPage = inscriptionsList.slice(
        displayPageNumber,
        displayPageNumber + 4
      );

      inscriptionsNumber = displayPage.length;

      inscriptions = displayPage.map((ins) => (
        <SingleInscription
          key={ins.number}
          number={ins.number}
          title={ins.title}
          inscriptionContent={ins.inscriptionContent}
          date={ins.date}
          inscriptionsNumber={displayPage.length}
          link={`article/${ins.title}`}
        />
      ));
    }

    if (this.state.searchContent) {
      let searchList = [];

      inscriptionsList.forEach((inscription) => {
        const number = inscription.title
          .toUpperCase()
          .search(this.state.searchContent.toUpperCase());

        if (number === 0) {
          searchList.push(inscription);
        }
      });

      searchedInscription = searchList.map((ins, i) => (
        <SingleInscription
          key={ins.number}
          number={ins.number}
          title={ins.title}
          inscriptionContent={ins.inscriptionContent}
          date={ins.date}
          inscriptionsNumber={searchList.length}
          link={`article/${ins.title}`}
        />
      ));
    }

    const lastPageList = {
      justifyContent: "flex-start",
      height: "100%",
    };

    return (
      <div className="homePage">
        <div className="homePage__article-search-container">
          <FontAwesomeIcon
            className="homePage__search-icon"
            icon={faSearch}
            style={this.state.focus ? { color: "red" } : { color: "blue" }}
          />
          <input
            className="homePage__search-input"
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleSearchChange}
            value={this.state.searchContent}
            style={this.state.focus ? { boxShadow: "0 0 0 2px blue" } : {}}
          ></input>
        </div>

        <ul
          className="homePage__list-container"
          style={inscriptionsNumber < 4 ? lastPageList : {}}
        >
          {this.state.searchContent.length === 0
            ? inscriptions
            : searchedInscription}
        </ul>

        <div className="homePage__navigation-container">
          <button
            className="homePage__navigation-button-backward"
            onClick={this.handleClick}
          >
            {"<<"}
          </button>
          <button className="homePage__navigation-state-button">
            {this.state.pageNumber}
          </button>
          <button
            className="homePage__navigation-button-forward"
            onClick={this.handleClick}
          >
            {">>"}
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;
