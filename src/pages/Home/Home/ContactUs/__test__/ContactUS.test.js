import React from 'react';
import ReactDom from 'react-dom';
import { ContactUs } from '../ContactUS';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<ContactUs></ContactUs>, div);
})