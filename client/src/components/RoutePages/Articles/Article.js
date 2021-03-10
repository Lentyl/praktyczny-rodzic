import React from "react";
import Comments from "../../Component-parts/Comments";

class Article extends React.Component {
  state = {
    title: "",
    articleInscription: "",
    date: "",
  };

  componentDidMount = () => {
  

        let articles = this.props.inscriptionsList

        const article = articles.find((article) => {
          const questionMarkIndex = article.title.indexOf("?");

          let articleTitle = "";

          if (questionMarkIndex > -1) {
            articleTitle = article.title.slice(0, questionMarkIndex);
          } else {
            articleTitle = article.title;
          }

          return this.props.match.params.title === articleTitle;
        });

        this.setState({
          title: article.title,
          articleInscription: article.inscriptionContent,
          date: article.date,
        });
    
     
  };

  render() {
    return (
      <div className="article">
        <h2 className="article__title">{this.state.title}</h2>

        <p className="article__content">
          {this.state.articleInscription.replace("*lid*", "")}
        </p>
        <p className="article__date">{this.state.date.slice(0, 10)}</p>

        {this.state.title !== "" && <Comments title={this.state.title} />}
      </div>
    );
  }
}

export default Article;
