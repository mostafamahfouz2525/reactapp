import React, { useState } from 'react';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';

const Footer = (props) => {

  return (
    <footer className="mt-5">
        <Container fluid={true}>
            <Row className="p-3 border-top text-center d-flex justify-content-center"  sm={12}>
                This Is Footer Copy Right For 3Alam Rakmy
            </Row>
        </Container>
    </footer>
  );
}

export default Footer;