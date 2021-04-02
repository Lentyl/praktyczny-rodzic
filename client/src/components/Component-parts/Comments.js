import React from "react";
import MessagePopOutWindow from "./messagePopOutWindow";
import axios from "axios";

class Comments extends React.Component {
  state = {
    userName: "",
    comment: "",
    commentsList: [],
    messageDisplay: "",
    send: null,
  };

  componentDidMount = () => {
    axios
      .get(`http://localhost:5000/article/${this.props.title}`, {})
      .then((res) => {
        const commentsList = res.data;
        this.setState({
          commentsList,
        });
      })
      .catch((err) => alert(err));
  };

  handelChange = (e) => {
    const type = e.target.type;

    if (type === "text") {
      const userName = e.target.value;

      this.setState({
        userName,
      });
    } else if (type === "textarea") {
      let comment = e.target.value;

      this.setState({
        comment,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const articleMessage = {
      userName: this.state.userName,
      comment: this.state.comment,
      title: this.props.title,
    };

    axios
      .post(`http://localhost:5000/addComent`, articleMessage)
      .then(() => {
        this.setState({
          send: true,
        });
      })
      .catch((err) => alert(err));

    this.setState({
      userName: "",
      comment: "",
    });
  };

  handelMessageCancel = () => {
    this.setState({
      send: false,
    });
  };

  render() {
    let comment = this.state.commentsList.filter((comment) => {
      return comment.title === this.props.title && comment.confirmed === true;
    });

    comment = comment.map((comment) => (
      <li className="comment-form__comment" key={comment._id}>
        <div className="comment-form__comment-name">{comment.userName}:</div>
        <div className="comment-form__comment-message">{comment.comment}</div>
      </li>
    ));

    return (
      <div className="comment-form">
        <form
          className="comment-form__container"
          action=""
          onSubmit={this.handleSubmit}
          style={this.state.send ? { filter: "blur(10px)" } : {}}
        >
          <input
            className="comment-form__name"
            type="text"
            value={this.state.userName}
            onChange={this.handelChange}
            placeholder="Nazwa komentującego."
            required
          ></input>
          <textarea
            className="comment-form__textarea"
            rows="10"
            cols="80"
            value={this.state.comment}
            onChange={this.handelChange}
            placeholder="Twój komentarz."
            required
          ></textarea>
          <button className="comment-form__button">Dodaj komentarz</button>
        </form>

        <ul
          className="comment-form__comments-list"
          style={this.state.send ? { filter: "blur(10px)" } : {}}
        >
          {comment}
        </ul>

        {this.state.send && (
          <div className="comment-form__message-position-wraper">
            <MessagePopOutWindow
              handelMessageCancel={this.handelMessageCancel}
              message="Mając na względzie zachowanie wysokich standardów dyskusji, twój komentarz przechodzi weryfikację."
            />
          </div>
        )}
      </div>
    );
  }
}

export default Comments;
