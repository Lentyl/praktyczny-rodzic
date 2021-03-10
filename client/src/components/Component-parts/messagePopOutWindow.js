import React from 'react'



const messagePopOutWindow = ({ handelMessageCancel, message }) => {



    const handleclick = () => {

        handelMessageCancel();

    }

    return (

        <div className='message-pop-out-window__container'>
            <button className='message-pop-out-window__closing-button' onClick={handleclick}>X</button>
            <p className='message-pop-out-window__text'>{message}</p>
        </div>


    );
}

export default messagePopOutWindow;