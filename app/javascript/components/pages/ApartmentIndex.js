import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardTitle, Col } from 'reactstrap'

class ApartmentIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false
    }
  }
  render() {
    let { apartment } = this.props
    return (
      <>
        <h3>Apartments For Rent</h3>
        <Col id="form">
          {apartment.map(apartment => {
            return (
              <Card body key={apartment.id}>
                <CardTitle>
                  <NavLink to={`/aptshow/${apartment.id}`}>
                    <h4>{apartment.street}</h4>
                  </NavLink>
                </CardTitle>
              </Card>
            )
          })}
          <br />
          <br />
          <NavLink to="/">
            <button className="btn">Home</button>
          </NavLink>
        </Col>
      </>
    )
  }
}
export default ApartmentIndex