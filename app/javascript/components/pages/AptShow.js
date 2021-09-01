import React, { Component } from 'react'
import { Card, CardTitle, Col, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class AptShow extends Component {
    render() {
        let { apartment } = this.props
        console.log(apartment)
        return (
            <>
                <h2>Apartment Info</h2>
                <div id="show">
                    <Col sm="6">
                        <Card body>
                            <CardTitle className="card-title">Apartment info for: {apartment.street}</CardTitle>
                            <CardText className="show-font">
                                Location: {apartment.city}, {apartment.state}
                                <br />
                                Monthly rent: {apartment.price}
                                <br />
                                Number of bedrooms: {apartment.bedrooms}
                                <br />
                                Number of bathrooms: {apartment.bathrooms}
                                <br />
                                Pets allowed: {apartment.pets}
                                <br />
                                <br />
                                For more information please contact {apartment.manager} at {apartment.email}. 
                            </CardText>
                        </Card>
                    </Col>
                    <br />
                    <br />
                    <NavLink to="/apartmentindex">
                        <button className="btn">Apartment Listings </button>
                    </NavLink>
                </div>
            </>
        )
    }
}

export default AptShow