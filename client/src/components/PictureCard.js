import { Col } from "react-bootstrap";

export const PictureCard = ({ image, gCode,childAge }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="pic-imgbx">
        <img src={'http://localhost:9090/img/'+ image} />
        <div className="pic-txtx">
          <span>Age: {childAge}</span>
          
        </div>



      </div>
    </Col>
  )
}