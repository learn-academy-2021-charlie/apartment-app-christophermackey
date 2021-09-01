import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ApartmentIndex from './pages/ApartmentIndex'
import Home from './pages/Home'
import AptShow from './pages/AptShow'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: []
    }
  }
  componentDidMount() {
    this.aptIndex()
  }
  aptIndex = () => {
    fetch("http://localhost:3000/apartments")
      .then(response => response.json())
      .then(apartmentArray => this.setState({ apartments: apartmentArray }))
      .catch(errors => console.log("index errors:", errors))
  }
  render() {
    console.log(this.state.apartments)
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <Router>
        <Header
          logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_out_route={sign_out_route}
        />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/apartmentIndex" render={(props) => <ApartmentIndex apartment={this.state.apartments} />} />

          <Route path="/aptShow/:id" render={(props) => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === +id)
            return <AptShow apartment={apartment} />
          }} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}
export default App