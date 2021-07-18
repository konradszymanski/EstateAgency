import React from 'react'

const Intro = () => {
    return (
        <div className='intro'>
            <h3>This is project app only</h3>
            <p>
                All the data is just an exampe for practice purposes. < br />
            The app is buid by React JS, and has separate backend where the house's are stored. 
            The back-end and front-end are deployed by Heroku, over there: 
            <a href="https://estateagencyapi.herokuapp.com/houses" target='_blank' rel='noreferrer'> link to back-end. </a><br />
            Estate Agency is using the SMS API served by Firetext:
            <a href="https://www.firetext.co.uk/" target='_blank' rel='noreferrer'> link to firetext</a>. <br />
            By using this app, you can set a fake appointment, where user can book the time, date etc. and will get approve send by SMS to his phone directly. < br />
            Thank you for visit.
            </p>
        </div>
    )
}

export default Intro
