import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';


export default function Carrousel () {
    return (
        <Carousel fade className="pt-0">
            <Carousel.Item>
                <img
                className="d-block w-100 mt-0"
                src="https://ganardineroporinternet.me/wp-content/uploads/2020/03/1584369317_24-ejemplos-de-anuncios-de-banner-en-los-que-se.jpg"
                // src= '../assets/logo.jpg'
                alt="First slide"
                
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.affde.com/uploads/article/8043/h8Zh6q0lwcZnAGTR.png"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://ganardineroporinternet.me/wp-content/uploads/2020/03/1584369317_24-ejemplos-de-anuncios-de-banner-en-los-que-se.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://ganardineroporinternet.me/wp-content/uploads/2020/03/1584369317_24-ejemplos-de-anuncios-de-banner-en-los-que-se.jpg"
                alt="Four slide"
                />

                <Carousel.Caption>
                <h3>Four slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>


    );
}