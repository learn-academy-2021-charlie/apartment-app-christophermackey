import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from '../Footer'

Enzyme.configure({adapter: new Adapter()})

describe("When the footer renders", () => {
  it("displays an h4 tag with developers name", () => {
    const footer = shallow(<Footer />)
    const footerItem = footer.find("h4")
    expect(footerItem.length).toEqual(1)
  })
})