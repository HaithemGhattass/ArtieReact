import { Col } from "react-bootstrap";

export const PictureCard = ({ image, gCode,childAge }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="pic-imgbx">
        <img src={image} />
        <div className="pic-txtx">
          <h4>{gCode}</h4>
          <span>{childAge}</span>
        </div>
      </div>
    </Col>
  )
}