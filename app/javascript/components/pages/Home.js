import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div className="home-gif">
                <iframe src="https://giphy.com/embed/psnfjT4b87RwrwoIkP" 
                width="700" height="700"
                frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>
        )
    }
}
export default Home