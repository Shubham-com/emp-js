import React, { useState, useEffect } from "react";

import { Navbar, Container, Col } from "react-bootstrap";

const Footer = () => {
  const [fullYear, setFullYear] = useState();

  useEffect(() => {
    setFullYear(new Date().getFullYear());
  }, [fullYear]);

  return (
    <Navbar style={{backgroundColor: ' #060b26'}} fixed="bottom" variant="dark">
      <Container>
        <Col lg={12} className="text-center text-muted">
          <div style={{color: ' white'}}>
            {fullYear} © All Rights Reserved by TechGeeks
          </div>
        </Col>
      </Container>
    </Navbar>
  );
};

export default Footer;
