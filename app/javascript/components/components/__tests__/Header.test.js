import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../Header'

Enzyme.configure({adapter: new Adapter()})

describe("When the header renders", () => {
  it("displays a link to sign in/out and a link to view all", () => {
    const header = shallow(<Header />)
    const headerItems = header.find("ul")
    expect(headerItems.length).toEqual(2)
  })
})