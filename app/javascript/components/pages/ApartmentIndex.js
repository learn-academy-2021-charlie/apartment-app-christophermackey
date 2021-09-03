import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardTitle, Col, Row } from 'reactstrap'

class ApartmentIndex extends Component {

  render() {
    return (
      <>
        <h2 className="title">Apartments for rent</h2>
        {this.props.apartments && this.props.apartments.map(apartment => {
          return (
            <div className="body">
              <Row key={apartment.id}>
                <Col sm="6">
                  <Card body key={apartment.id}>
                    <CardTitle>
                      <h3>
                        <NavLink to={`/aptshow/${apartment.id}`}> {apartment.street} {apartment.city}, {apartment.state}
                        </NavLink>
                      </h3>
                      <p>
                        Bedrooms: {apartment.bedrooms} ------------- Bathrooms: {apartment.bathrooms}
                      </p>
                    </CardTitle>
                  </Card>
                </Col>
              </Row>
            </div>
          )

        })}
      </>
    )
  }
}

// class ApartmentIndex extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       submitted: false
//     }
//   }
//   render() {
//     let { apartment } = this.props
//     return (
//       <>
//         <h3>Apartments For Rent</h3>
//         <Col id="form">
//           {apartment.map(apartment => {
//             return (
//               <Card body key={apartment.id}>
//                 <CardTitle>
//                   <NavLink to={`/aptshow/${apartment.id}`}>
//                     <h4>{apartment.street}</h4>
//                   </NavLink>
//                 </CardTitle>
//               </Card>
//             )
//           })}
//           <br />
//           <br />
//           <NavLink to="/">
//             <button className="btn">Home</button>
//           </NavLink>
//         </Col>
//       </>
//     )
//   }
// }
export default ApartmentIndex