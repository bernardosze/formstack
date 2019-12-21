import React from 'react'
import { Row } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
  return (
    <header>
      <Row className="justify-content-center">
        <h1>{props.title}</h1>
      </Row>
    </header>
  )
}
export default Header;

Header.defaultProps = {
  title: 'Listing App'
}