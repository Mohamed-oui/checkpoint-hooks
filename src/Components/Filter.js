import React from "react";
import { Form, FormControl, Navbar } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const Filter = ({ handleChange, title,ratingChanged,rate }) => {
  
  return (
    <Navbar bg="light" className="d-flex justify-content-around">
      <Navbar.Brand href="#home" style={{lineHeight:"100px", fontSize: "50px", color: "red" }}>
        Youtube
      </Navbar.Brand>
      <div>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={handleChange}
            value={title}
          />
        </Form>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={30}
          activeColor="#ffd700"
          isHalf={true}
        />
      </div>
    </Navbar>
  );
};

export default Filter;