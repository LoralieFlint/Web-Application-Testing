import React from 'react';
import App from "./App.js"
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

test('render the app', () => {
    const wrapper = rtl.render(<App/>)
    wrapper.debug()
    console.log("it works!")
})

// describe('display module', () => {
//     it('can add two numbers', () => {
           
//     })
// })

// toBeVisible()
// toHaveValue()
// wrapper.debug(wrapper.getByText('The dog website'))
// wrapper.debug(wrapper.queryByText('The dog website'))
// wrapper.debug(wrapper.queryByPlaceholderText('Image count'))

