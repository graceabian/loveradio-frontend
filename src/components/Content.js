//identify needed components
import { Card, Row, Col, Container } from "react-bootstrap";

export default function Content() {
  return (
    <Container>
      <Row className="my-3">
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Raqi's Secret Files</Card.Title>
              <Card.Text>INSERT DESCRIPTION</Card.Text>
              <Card.Text>Latest Episodes</Card.Text>
              <a href="/" className="btn btn-primary">
                View More
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>WEEKLY Top 10 SONGS</Card.Title>
              <Card.Text>List of Songs</Card.Text>
              <a href="/" className="btn btn-primary">
                View More
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Byahe By Lala Banderas</Card.Title>
              <Card.Text>Latest Episodes</Card.Text>
              <a href="/" className="btn btn-primary">
                View More
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
