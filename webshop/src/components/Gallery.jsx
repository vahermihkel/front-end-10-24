import Carousel from 'react-bootstrap/Carousel';
 
 
function Gallery() {
  return (
    <Carousel slide={false} data-bs-theme="dark">
      <Carousel.Item>
        <img className="carouselImage" src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt=""></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="carouselImage" src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" alt=""></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="carouselImage" src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg" alt=""></img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
 
export default Gallery;