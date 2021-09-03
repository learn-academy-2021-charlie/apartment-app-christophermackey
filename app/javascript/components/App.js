import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ApartmentIndex from './pages/ApartmentIndex'
import Home from './pages/Home'
import AptShow from './pages/AptShow'
import AptNew from './pages/AptNew'

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
    fetch("/apartments")
      .then(response => response.json())
      .then(apartmentArray => this.setState({ apartments: apartmentArray }))
      .catch(errors => console.log("index errors:", errors))
  }
  createApartment = (newApartment) => {
    fetch("/apartments", {
      body: JSON.stringify(newApartment),
      headers: {
        "content-type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(() => this.readApartment())
      .catch(errors => console.log("apartment create errors:", errors))
  }
  render() {
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

          <Route path="/apartmentindex" render={(props) => {
            return <ApartmentIndex apartments={this.state.apartments} />
          }} />
          <Route path="/aptShow/:id" render={(props) => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === +id)
            return <AptShow apartment={apartment} />
          }} />

          <Route path="/aptNew" render={(props) => {
            return <AptNew createApartment={this.createApartment} current_user={this.props.current_user} />
          }} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}
export default App