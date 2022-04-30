//Grid Sytem and Card
import { Row, Col, Container } from "react-bootstrap";

//format the card with the help of utility classes of bootstrap

export default function Dj() {
  return (
    <Container>
      <Row xs={12} md={8} lg={4}>
        <Col>
          <a href="https://www.loveradio.com.ph/tambalan/nicole-hyala/">
            <img
              class="img-responsive thumbnail"
              src="https://www.loveradio.com.ph/wp-content/uploads/2017/01/NICOLE-HYALA-THUMBNAIL.jpg"
            />
          </a>
        </Col>

        <Col>
          <a href="https://www.loveradio.com.ph/tambalan/chris-tsuper/">
            <img
              class="img-responsive thumbnail"
              src="https://www.loveradio.com.ph/wp-content/uploads/2017/01/CHRIS-TSUPER-THUMBNAIL.jpg"
            />
          </a>
        </Col>

        <Col>
          <a href="https://www.loveradio.com.ph/kabisyo/tanya-chinita/">
            <img
              class="img-responsive thumbnail"
              src="https://www.loveradio.com.ph/wp-content/uploads/2017/01/TANYA-CHINITA-THUMBNAIL.jpg"
            />
          </a>
        </Col>

        <Col>
          <a href="https://www.loveradio.com.ph/kabisyo/diego-bandido/">
            <img
              class="img-responsive thumbnail"
              src="https://www.loveradio.com.ph/wp-content/uploads/2017/01/DIEGO-BANDIDO-THUMBNAIL.jpg"
            />
          </a>
        </Col>

        <Col>
          <a href="https://www.loveradio.com.ph/kabisyo/totoy-bato/">
            <img
              class="img-responsive thumbnail"
              src="https://www.loveradio.com.ph/wp-content/uploads/2017/01/TOTOY-BATO-THUMBNAIL.jpg"
            />
          </a>
        </Col>

        <Col>
          <a href="https://www.loveradio.com.ph/kabisyo-dj/raqi-terra/">
            <img
              class="img-responsive thumbnail"
              src="https://www.loveradio.com.ph/wp-content/uploads/2018/09/RAQI-TERRA-THUMBNAIL-1.jpg"
            />
          </a>
        </Col>

        <Col>
          <a href="https://www.loveradio.com.ph/kabisyo/lala-banderas/">
            <img
              class="img-responsive thumbnail"
              src="https://www.loveradio.com.ph/wp-content/uploads/2018/09/LALA-BANDERAS-THUMBNAIL.jpg"
            />
          </a>
        </Col>

        <Col>
          <a href="https://www.loveradio.com.ph/kabisyo/robin-sienna/">
            <img
              class="img-responsive thumbnail"
              src="https://www.loveradio.com.ph/wp-content/uploads/2020/07/KABISYO-DJ-ROBIN-SIENNA.jpg"
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
