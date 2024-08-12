import React, { useRef } from 'react';
import '../styles/Homepage.css';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const Homepage = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="banner">
        <a href="">
          <Image
            src="https://herschel.com/content/dam/herschel/lifestyle/2024-s3/feature-panels/back-to-school/D-24-S3-BTS-Home-FP1-BuiltForALifetime_2.jpg.sthumbnails.original.webp"
            alt="Backpack"
            fluid
          />
        </a>
      </div>
      <div className="text">
        <h2>Backpacks That Measure Up.</h2>
        <p>Essentials for school, backed by our Limited Lifetime Warranty.</p>
        <Button variant="light">Shop Now</Button>
      </div>
      <h5>Shop Categories</h5>
      <div className="slider-wrapper">
        <Button className="nav-button left bg-light border-light" onClick={scrollLeft}></Button>
        <div className="slider-container" ref={sliderRef}>
          {[
            { src: "https://herschel.com/content/dam/herschel/products/11391/11391-00001-OS_01.jpg.sthumbnails.original.webp", label: "Backpacks" },
            { src: "https://herschel.com/content/dam/herschel/products/11197/11197-00001-feed.jpg.sthumbnails.original.webp", label: "Luggage" },
            { src: "https://herschel.com/content/dam/herschel/products/11396/11396-00001-OS_01.jpg.sthumbnails.original.webp", label: "Duffles" },
            { src: "https://herschel.com/content/dam/herschel/lifestyle/2024-s2/homepage-slider-tiles/50278-01149-ALLSIZES_01.png.sthumbnails.original.webp", label: "Apparel" },
            { src: "https://herschel.com/content/dam/herschel/lifestyle/2024-s2/homepage-slider-tiles/1223-0001-XL_01.png.sthumbnails.original.webp", label: "Headwear" },
            { src: "https://herschel.com/content/dam/herschel/products/11401/11401-00001-OS_01.jpg.sthumbnails.original.webp", label: "Totes" },
            { src: "https://herschel.com/content/dam/herschel/products/11394/11394-Carousel.png.sthumbnails.original.webp", label: "Crossbodies" },
            { src: "https://herschel.com/content/dam/herschel/products/11382/11382-00001-OS_01.jpg.sthumbnails.original.webp", label: "Hip Packs" },
            { src: "https://herschel.com/content/dam/herschel/products/10360/10360-02993-OS_01.jpg.sthumbnails.original.webp", label: "Wallets" },
            { src: "https://herschel.com/content/dam/herschel/products/30060/30060-00001-OS_01.jpg.sthumbnails.original.webp", label: "Sleeves" },
            { src: "https://herschel.com/content/dam/herschel/products/30064/30064-00001-OS_01.jpg.sthumbnails.original.webp", label: "Pouches" }
          ].map((item, index) => (
            <div className="slider-item" key={index}>
              <Image src={item.src} alt={item.label} thumbnail />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
        <Button className="nav-button right bg-light border-light" onClick={scrollRight}></Button>
      </div>
      <Container fluid className="my-4">
        <Row>
          <Col md={6} className="position-relative featured-item mb-5">
            <a href="">
              <Image src="https://scontent.fraj3-2.fna.fbcdn.net/v/t39.30808-6/451875015_898021739007160_7211848911838542316_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LhgRExuYCioQ7kNvgG0wZMh&_nc_ht=scontent.fraj3-2.fna&gid=Anl0gxI30YRULXPXGZl8bwu&oh=00_AYBdSh-9Ce8jnJoohVxx0i6VSqQQDmFyadmK1MCv2W7IUw&oe=66AEF248" alt="Backpack" fluid />
            </a>
            <div className="position-absolute bottom-1 start-0 p-3 text-dark w-100 bg-opacity-50">
              <h3>Forever Classic.</h3>
              <p>Essentials for school, backed by our Limited Lifetime Warranty.</p>
              <a href="" className="text-dark fw-bold text-decoration-underline">Shop Best Sellers</a>
            </div>
          </Col>
          <Col md={6} className="position-relative featured-item mb-5">
            <a href="">
              <Image src="https://pbs.twimg.com/media/GSZmetWXcAAWqNE?format=jpg&name=900x900" alt="Backpack" fluid />
            </a>
            <div className="position-absolute bottom-1 start-0 p-3 text-dark w-100 bg-opacity-50">
              <h3>Rule The School With New Arrivals.</h3>
              <p>Discover new arrivals for journeys to class.</p>
              <a href="" className="text-dark fw-bold text-decoration-underline">Shop New Arrivals</a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="my-4">
        <Row>
          <Col md={6} className="position-relative featured-item mt-5">
            <a href="">
              <Image src="https://instagram.fraj3-3.fna.fbcdn.net/v/t39.30808-6/450789288_18295209577166191_7492505289626948345_n.jpg?stp=dst-jpg_e35_p720x720_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOCJ9&_nc_ht=instagram.fraj3-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ndI3CWG29SkQ7kNvgF2FVjT&gid=67218011c1644d1d8d26257e4d58a067&edm=AEhyXUkAAAAA&ccb=7-5&ig_cache_key=MzQwOTIxODgyMjg5NTgwNjYzMw%3D%3D.2-ccb7-5&oh=00_AYDKxwJEzma_xKARrW_rUhCUs867gxI4kRF68Hl06tGrVw&oe=66AF1D47&_nc_sid=8f1549" alt="Backpack" fluid />
            </a>
            <div className="position-absolute bottom-1 start-0 p-3 text-dark w-100 bg-opacity-50">
              <h3>From the Pool to School.</h3>
              <p>Keep them exploring past summer with backpacks perfect for class.</p>
              <a href="" className="text-dark fw-bold text-decoration-underline">Shop Kids Backpacks</a>
            </div>
          </Col>
          <Col md={6} className="position-relative featured-item mt-5">
            <a href="">
              <Image src="https://instagram.fraj3-3.fna.fbcdn.net/v/t39.30808-6/451413974_898021659007168_3808241291390271571_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMzk0eDEzOTQuc2RyLmYzMDgwOCJ9&_nc_ht=instagram.fraj3-3.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ZegcTN_645UQ7kNvgHrl9IT&edm=AAH5YewAAAAA&ccb=7-5&ig_cache_key=MzQxNDQ3MDg5ODE2NjYwNzgxMQ%3D%3D.2-ccb7-5&oh=00_AYDrm9bcMzURRLKc_XOPib2cdKI85yOasHhvL0IyRsea-Q&oe=66AF0577&_nc_sid=b9b300" alt="Backpack" fluid />
            </a>
            <div className="position-absolute bottom-1 start-0 p-3 text-dark w-100 bg-opacity-50">
              <h3>Back-To-School Styles Under $75</h3>
              <p>Stay sharp with classroom essentials for less.</p>
              <a href="" className="text-dark fw-bold text-decoration-underline">Shop Now</a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bag-banner">
        <h1>Our Award-Winning <br />Luggage</h1>
        <Button variant="light">Shop Now</Button>
        <Image src="https://herschel.com/content/dam/herschel/lifestyle/2024-s2/gear-awards/D-24-S2-GearAwards-FP1-4.jpg.sthumbnails.original.webp" alt="" fluid />
      </div>
      <hr />
    </div>
  );
};

export default Homepage;
