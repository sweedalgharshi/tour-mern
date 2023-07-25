import "./newsletter.css";

import { Container, Col, Row } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

function Newsletter() {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe to get usefull traveling information.</h2>

              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, amet soluta
                eaque necessitatibus officiis quibusdam ducimus beatae sequi fugit fugiat?
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Newsletter;
