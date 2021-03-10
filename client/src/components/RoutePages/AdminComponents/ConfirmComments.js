import React from "react";
import AdminNav from "../../Component-parts/AdminNav";
import axios from "axios";

class ConfirmComments extends React.Component {
  state = {
    commentsList: []
  };

  componentDidMount() {
    axios
      .get(`/admin/confirm-comments`, {})
      .then(res => {
        let commentsList = res.data;

        commentsList = commentsList.filter(comment => {
          return comment.confirmed === false;
        });

        this.setState({
          commentsList
        });
      })
      .catch(err => console.log(err));
  }

  handleClick = (e, id) => {
    const buttonTypeCheck = e.target.value;

    if (buttonTypeCheck === "Zatwierdź") {
      console.log(this.state.commentsList);

      axios
        .put(`/admin/confirm-comments`, { id })
        .then(res => {
          console.log("res   " + res.data);

          const newList = this.state.commentsList.filter(comment => {
            if (comment._id === id) {
              comment.confirmed = true;
            }
            return comment.confirmed === false;
          });

          this.setState({
            commentsList: newList
          });
        })
        .catch(err => console.log("error      :!  " + err));
    } else {
      axios
        .delete(`/admin/confirm-comments`, {
          data: { id }
        })
        .then(res => {
          console.log("res   " + res.data);

          const newList = this.state.commentsList.filter(item => {
            return item._id !== id;
          });

          this.setState({
            commentsList: newList
          });
        })
        .catch(err => console.log("error      :!  " + err));
    }
  };

  render() {
    let comments = this.state.commentsList.filter(comment => {
      return comment.confirmed === false;
    });

    comments = comments.map(comment => (
      <li
        className="confirm-comments__comment-list-element-container"
        key={comment._id}
      >
        <div className="confirm-comments__userName">
          {`Użytkownik: ${comment.userName}`}
          <div className="confirm-comments__container">
            <button
              className="confirm-comments__confirm-button"
              value="Zatwierdź"
              onClick={e => this.handleClick(e, comment._id)}
            >
              Zatwierdź
            </button>
            <button
              className="confirm-comments__cancel-button"
              value="X"
              onClick={e => this.handleClick(e, comment._id)}
            >
              X
            </button>
          </div>
        </div>
        <div className="confirm-comments__article-title">{`Tytuł:  ${comment.title}`}</div>
        <div className="confirm-comments__comment-message">
          {comment.comment}
        </div>
      </li>
    ));

    return (
      <div className="confirm-comments">
        <AdminNav
          handleLoggedStatus={this.props.handleLoggedStatus}
          loggedInState={this.props.loggedInState}
        />
        <ul className="confirm-comments__comments-list">{comments}</ul>
      </div>
    );
  }
}

export default ConfirmComments;
