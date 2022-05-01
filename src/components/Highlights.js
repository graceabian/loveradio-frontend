//Grid Sytem and Card
import { Row, Col, Card } from "react-bootstrap";

//format the card with the help of utility classes of bootstrap

export default function Highlights() {
  return (
    <Row className="my-3">
      {/*1st Hightlight*/}
      <Col xs={12} md={4}>
        <Card className="p-4 cardHighlight">
          <Card.Body>
            <Card.Title>
              <a href="https://www.loveradio.com.ph/whats-new/raqi-terra-kapag-nagmamadali-huwag-maghabol-dapat-gumapang/">
                <img
                  width="300"
                  height="200"
                  src="https://www.loveradio.com.ph/wp-content/uploads/2022/04/LOVE-RADIO-MANILA-WHATS-NEW-4-9-2022-LOVE-RADIO-MANILA-RAQI-TERRA-DAPAT-GUMAPANG-672x372.jpg"
                  class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                  alt=""
                  srcset="https://www.loveradio.com.ph/wp-content/uploads/2022/04/LOVE-RADIO-MANILA-WHATS-NEW-4-9-2022-LOVE-RADIO-MANILA-RAQI-TERRA-DAPAT-GUMAPANG-672x372.jpg 672w, https://www.loveradio.com.ph/wp-content/uploads/2022/04/LOVE-RADIO-MANILA-WHATS-NEW-4-9-2022-LOVE-RADIO-MANILA-RAQI-TERRA-DAPAT-GUMAPANG-1038x576.jpg 1038w"
                  sizes="(max-width: 672px) 100vw, 672px"
                />
              </a>
            </Card.Title>
            <Card.Text>
              <p className="raqitext">
                Raqi Terra: Kapag nagmamadali, huwag maghabol, dapat gumapang!
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/*2nd Hightlight*/}
      <Col xs={12} md={4}>
        <Card className="p-4 cardHighlight">
          <Card.Body>
            <Card.Title> Dj Robin Siena </Card.Title>
            <Card.Text>
              Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Iure,
              quo?
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/*3rd Hightlight*/}
      <Col xs={12} md={4}>
        <Card className="p-4 cardHighlight">
          <Card.Body>
            <Card.Title> Nicole Hayla </Card.Title>
            <Card.Text>
              Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Iure,
              quo?
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
