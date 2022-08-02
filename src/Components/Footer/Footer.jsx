import React from "react";
import Card from "react-bootstrap/Card";
const Footer = () => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img
        src="https://static.vecteezy.com/system/resources/previews/003/600/947/original/set-of-social-media-icon-in-round-bakground-free-vector.jpg"
        alt="Card image"
        style={{ width: "300px" }}
      />
      <Card.ImgOverlay>
        <Card.Title>Follow us</Card.Title>
        <Card.Text></Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Footer;
