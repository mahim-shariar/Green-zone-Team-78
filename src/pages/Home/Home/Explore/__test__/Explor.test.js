import React from 'react';
import ReactDom from 'react-dom';
import Explore from '../Explore';



it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Explore></Explore>, div);
})