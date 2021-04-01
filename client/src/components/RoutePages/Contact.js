import React from 'react'
import iphone from '../../img/new-phonepng.png';
import screen1_sm from '../../img/screen1_480-960.jpg';
import screen1_lg from '../../img/screen1_800-1600.jpg';
import screen2_sm from '../../img/screen2_480-960.jpg';
import screen2_lg from '../../img/screen2_800-1600.jpg';
import MessagePopOutWindow from '../Component-parts/messagePopOutWindow'

class Contact extends React.Component {

    state = {
        buttonScreen1: false,
        email: '',
        message: '',
        messageLength: '',
        newLineStr: '',
        send: null,
    }

    handleClick = () => {
        this.setState({
            buttonScreen1: !this.state.buttonScreen1
        })

    }

    handelChange = (e) => {
        const type = e.target.type;

        if (type === 'text') {
            const userName = e.target.value;
            this.setState({
                userName,
            })
        } else if (type === 'textarea') {
            let message = e.target.value;
            this.setState({
              
                message,
            })
        }
        else if (type === 'email') {
            const email = e.target.value;
            this.setState({
                email,
            })
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();

        const sendContact = {
            email: this.state.email,
            message: this.state.message
        }

        fetch(`/contact`, {
            method: 'POST',
            body: JSON.stringify(sendContact),
            headers: {  //very important
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(() => {
                this.setState({
                    send: true,
                })
            })
            .catch(err => {
                this.setState({
                    send: false,
                })
                alert(err)
            })

        this.setState({
            email: '',
            message: '',
        })
    }

    handelMessageCancel = () => {
        this.setState({
            send: false
        })
    }

    render() {
        return (
            <div className='contact-form' >
                <div className='contact-form__wraper' style={this.state.send ? { filter: 'blur(10px)' } : {}}>
                    <div className='contact-form__container'>
                    <picture>
                   
                            <source media="(min-width:480px)" srcSet={screen1_lg} />
                            <source media="(min-width:0)" srcSet={screen1_sm} />
                            <img className='contact-form__screen1-img'
                            src={screen1_lg}
                            alt='Screen of telephone with message screen'/>
                    </picture>
                        <button className='contact-form__screen1-button' onClick={this.handleClick}></button>
                        <picture>
                            <source media="(min-width:480px)" srcSet={screen2_lg} />
                            <source media="(min-width:0)" srcSet={screen2_sm} />
                            <img className='contact-form__screen2-img'
                            src={screen2_lg}
                            alt='Screen of telephone with message screen'
                            style={this.state.buttonScreen1 ? { zIndex: '2' } : { zIndex: '-1' }} />
                    </picture>
                        <button className='contact-form__screen2-button1' onClick={this.handleClick} style={this.state.buttonScreen1 ? { zIndex: '2' } : { zIndex: '-1' }}></button>
                        <form className='contact-form__input-container' action="" onSubmit={this.handleSubmit} style={this.state.buttonScreen1 ? { zIndex: '2' } : { zIndex: '-1' }}>
                            <div className='contact-form__receiver-name'>Mariusza Podgórskiego</div>
                            <input className='contact-form__input-email' type='email' placeholder='Adres email.' value={this.state.email} onChange={this.handelChange} required />
                            <textarea className='contact-form__input-mesage' rows="5" cols="50" value={this.state.message} onChange={this.handelChange} required />
                            <button className='contact-form__button'></button>
                        </form>
                        <img className='contact-form__phone-img' src={iphone} alt='Image of turned on phone' />
                        <a className="contact-form__e-mail-link" style={this.state.buttonScreen1 ? { zIndex: '-1' } : { zIndex: '2' }} href="mailto:m.b.podgorski1984@gmail.com?subject=Wiadomość%20ze%20strony%20praktyczny-rodzic.pl&body=Cześć Mariusz,"/>
                        <a className="contact-form__tel-link" style={this.state.buttonScreen1 ? { zIndex: '-1' } : { zIndex: '2' }} href="tel:+44795-537-1215"></a>
                    </div>
                </div>
                {this.state.send && <div className='contact-form__message-position-wrapper'>
                    <MessagePopOutWindow handelMessageCancel={this.handelMessageCancel} message={'Twoja wiadomość jest dla mnie bardzo ważna, dzięki niej jestem w stanie tworzyć dla ciebie lepsze i ciekawsze treści.\n Dziękuje Mariusz'} />
                </div>}
            </div>

        );
    }
}

export default Contact;