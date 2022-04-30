import { Form, Container } from "react-bootstrap";

export default function Banner() {
  return (
    <Container claasName="Banner">
      <div>
        <Form.Check type="radio" aria-label="radio 1">
          WATCH
        </Form.Check>

        <Form.Check type="radio" aria-label="radio 1">
          LISTEN
        </Form.Check>
      </div>
    </Container>
  );
}
