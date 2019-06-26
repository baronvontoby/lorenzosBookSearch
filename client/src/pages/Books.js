import React from 'react';
import {Col, Row, Container, Jumbotron} from 'reactstrap';
import API from '../utils/API';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button
 } from 'reactstrap';

export default class Books extends React.Component {
  
  render() {
    return (
    <Container>
      <Jumbotron>
        <h1>Search For A Book Below</h1>
        <InputGroup>
          <InputGroupAddon addonType="prepend"><Button>Search</Button></InputGroupAddon>
          <Input />
        </InputGroup>
      </Jumbotron>
    </Container>
    )
  }
}