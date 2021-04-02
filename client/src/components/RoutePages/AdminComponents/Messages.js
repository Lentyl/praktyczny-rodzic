import React from "react";
import AdminNav from "../../Component-parts/AdminNav";
import axios from "axios";

class Messages extends React.Component {
  state = { contactMessages: [] };

  componentDidMount() {
    axios
      .get(`/admin/messages`, {})
      .then(res => {
        const contactMessages = res.data;

        this.setState({
          contactMessages
        });
      })
      .catch(err => alert(err));
  }

  hadleDelete = id => {
    axios
      .delete(`/admin/messages`, { data: { id } })
      .then(()=> {
        const newList = this.state.contactMessages.filter(item => {
          return item._id !== id;
        });

        this.setState({
          contactMessages: newList
        });
      })
      .catch(err => alert( err));
  };

  render() {
    const messages = this.state.contactMessages.map(message => (
      <div className="messages__list-element-container" key={message._id}>
        <li className="messages__info-container">
          <div className="messages__email">{message.userEmail}</div>
          <p className="messages__message">
            {message.message}
            <span className="messages__date">
              {message.created.slice(0, 10)}
            </span>
          </p>
        </li>
        <button
          className="messages__cancel-button"
          onClick={() => this.hadleDelete(message._id)}
        >
          X
        </button>
      </div>
    ));

    return (
      <div className="messages">
        <AdminNav
          handleLoggedStatus={this.props.handleLoggedStatus}
          loggedInState={this.props.loggedInState}
        />
        <ul className="messages__container">{messages}</ul>
      </div>
    );
  }
}

export default Messages;
