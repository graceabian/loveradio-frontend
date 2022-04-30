import { Form } from "react-bootstrap";

export default function Banner() {
  return (
    <>
      <Form.Check type="radio" aria-label="radio 1">
        WATCH
      </Form.Check>

      <Form.Check type="radio" aria-label="radio 1">
        LISTEN
      </Form.Check>
    </>
  );
}
