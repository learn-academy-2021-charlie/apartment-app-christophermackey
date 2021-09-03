import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentIndex from '../ApartmentIndex'

Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentIndex renders", ()=>{
    it("displays index heading", ()=>{
        const aptIndex = shallow(<ApartmentIndex/>)
        const indexHeading = aptIndex.find("h2")
        expect(indexHeading.text()).toEqual("Apartments for rent")
    })
})