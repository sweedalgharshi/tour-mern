import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "./../shared/CommonSection";

import { useLocation } from "react-router-dom";
import TourCard from "../shared/TourCard";
import Newsletter from "../shared/Newsletter";

function SearchResultList() {
  const location = useLocation();
  console.log(location);

  const [data] = useState(location.state);
  console.log(data);
  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center">No tour found</h4>
            ) : (
              data?.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
}
export default SearchResultList;
