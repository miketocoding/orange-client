import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Carousel,
  InputGroup,
  FormControl,
  Jumbotron,
} from 'react-bootstrap'
import image from '../assets/image.svg'
import hero from '../assets/hero-image.jpeg'
import SearchForm from '../components/SearchForm'

export default function Home() {
  return (
    <Container fluid>
      <Jumbotron fluid>
        <SearchForm />
        {/* <Container><Image src={hero} fluid /></Container> */}
      </Jumbotron>
      {/* <Carousel> */}
      {/* <Carousel.Item> */}
      {/* <Carousel.Caption> */}
      {/* <InputGroup>
            <FormControl placeholder='Search City'></FormControl>
            <Button>Search</Button>
          </InputGroup> */}
      {/* </Carousel.Caption> */}
      {/* </Carousel.Item> */}
      {/* </Carousel> */}
      <Row>
        <Col>
          <Card>
            {/* <Card.Img variant='top' src={image} thumbnail /> */}
            <Card.Header>Image!</Card.Header>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle>I made a thing</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            {/* <Card.Img variant='top' src={image} text-muted /> */}
            <Card.Header>Image!</Card.Header>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle>I made a thing</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            {/* <Card.Img variant='top' src={image} text-muted /> */}
            <Card.Header>Image!</Card.Header>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle>I made a thing</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            {/* <Card.Img variant='top' src={image} text-muted /> */}
            <Card.Header>Image!</Card.Header>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle>I made a thing</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>Articles</Row>
    </Container>
  )
}
