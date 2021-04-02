import React from 'react'
import AdminNav from '../../Component-parts/AdminNav'
import axios from 'axios';


class AddArticle extends React.Component {

    state = {
        article: '',
        title: '',
    }

    handleclick = () => {

        const postedArticle = {
            article: this.state.article,
            title: this.state.title
        }

        axios.post(`/admin/add-article`, postedArticle)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => alert(err))
        this.setState({
            article: '',
            title: '',
        })
    }

    render() {
        return (
            <div className='add-article'>
                <AdminNav handleLoggedStatus={this.props.handleLoggedStatus} loggedInState={this.props.loggedInState} />
                <p className='add-article__info'>Zaznacz *lid* gdzie ma kończyć się tekst wprowadzający czytelnika, który będzie widoczny na głównej stronie. </p>
                <input className='add-article__article-title' type='text' placeholder='Tytuł artykułu' value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })}></input>
                <textarea className='add-article__article' type='text' placeholder='Artykuł' value={this.state.article} onChange={(e) => this.setState({ article: e.target.value })}></textarea>
                <button className='add-article__button' onClick={this.handleclick}>Dodaj Artykuł</button>
            </div>
        )
    }
}

export default AddArticle;