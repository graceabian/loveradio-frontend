//Grid Sytem and Card
import { Row, Col } from "react-bootstrap";

//format the card with the help of utility classes of bootstrap

export default function Highlights() {
  return (
    <Row>
      {/*1st Hightlight*/}
      <Col xs={{ order: 12 }}>
        <div>
          <a href="https://www.loveradio.com.ph/whats-new/raqi-terra-kapag-nagmamadali-huwag-maghabol-dapat-gumapang/">
            <img
              width="400"
              height="250"
              src="https://www.loveradio.com.ph/wp-content/uploads/2022/04/LOVE-RADIO-MANILA-WHATS-NEW-4-9-2022-LOVE-RADIO-MANILA-RAQI-TERRA-DAPAT-GUMAPANG-672x372.jpg"
              class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
              alt=""
              srcset="https://www.loveradio.com.ph/wp-content/uploads/2022/04/LOVE-RADIO-MANILA-WHATS-NEW-4-9-2022-LOVE-RADIO-MANILA-RAQI-TERRA-DAPAT-GUMAPANG-672x372.jpg 672w, https://www.loveradio.com.ph/wp-content/uploads/2022/04/LOVE-RADIO-MANILA-WHATS-NEW-4-9-2022-LOVE-RADIO-MANILA-RAQI-TERRA-DAPAT-GUMAPANG-1038x576.jpg 1038w"
              sizes="(max-width: 672px) 100vw, 672px"
            />
          </a>
          <p className="hightlight-text">
            Raqi Terra: Kapag nagmamadali, huwag maghabol, dapat gumapang!
          </p>
        </div>
      </Col>
      {/*2nd Hightlight*/}
      <Col xs={{ order: 12 }}>
        <div>
          <a href="https://www.loveradio.com.ph/whats-new/tatlong-psychological-tips-para-mabasa-ang-isang-tao-dj-robin-sienna/">
            <img
              width="400"
              height="250"
              src="https://www.loveradio.com.ph/wp-content/uploads/2022/04/LOVE-RADIO-MANILA-WHATS-NEW-4-7-2022-LOVE-RADIO-MANILA-TATLONG-PSYCHOLOGICAL-TIP-PARA-MABASA-ANG-TAO-672x372.jpg"
              class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
              alt=""
              srcset="https://www.loveradio.com.ph/wp-content/uploads/2022/04/LOVE-RADIO-MANILA-WHATS-NEW-4-7-2022-LOVE-RADIO-MANILA-TATLONG-PSYCHOLOGICAL-TIP-PARA-MABASA-ANG-TAO-672x372.jpg 672w, https://www.loveradio.com.ph/wp-content/uploads/2022/04/LOVE-RADIO-MANILA-WHATS-NEW-4-7-2022-LOVE-RADIO-MANILA-TATLONG-PSYCHOLOGICAL-TIP-PARA-MABASA-ANG-TAO-1038x576.jpg 1038w"
              sizes="(max-width: 672px) 100vw, 672px"
            />
          </a>
          <p className="hightlight-text">
            Tatlong Psychological Tips para mabasa ang isang tao by DJ Robin
            Sienna
          </p>
        </div>
      </Col>

      {/*3rd Hightlight*/}
      <Col xs={{ order: 12 }}>
        <div>
          <a href="https://www.loveradio.com.ph/whats-new/ang-ootd-ni-nicole-hyala-sa-kanyang-mahiwagang-hallway/">
            <img
              width="400"
              height="250"
              src="https://www.loveradio.com.ph/wp-content/uploads/2022/04/LOVE-RADIO-MANILA-WHATS-NEW-4-2-2022-LOVE-RADIO-MANILA-ANG-OOTD-NI-NICOOLE-HYALA-SA-KANYANG-MAHIWAGANG-HALLWAY-672x372.jpg"
              class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
              alt=""
              srcset="https://www.loveradio.com.ph/wp-content/uploads/2022/04/LOVE-RADIO-MANILA-WHATS-NEW-4-2-2022-LOVE-RADIO-MANILA-ANG-OOTD-NI-NICOOLE-HYALA-SA-KANYANG-MAHIWAGANG-HALLWAY-672x372.jpg 672w, https://www.loveradio.com.ph/wp-content/uploads/2022/04/LOVE-RADIO-MANILA-WHATS-NEW-4-2-2022-LOVE-RADIO-MANILA-ANG-OOTD-NI-NICOOLE-HYALA-SA-KANYANG-MAHIWAGANG-HALLWAY-1038x576.jpg 1038w"
              sizes="(max-width: 672px) 100vw, 672px"
            />
          </a>
          <p className="hightlight-text">
            Ang OOTD ni Nicole Hyala sa kanyang Mahiwagang Hallway
          </p>
        </div>
      </Col>
    </Row>
  );
}
