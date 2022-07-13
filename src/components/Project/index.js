import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Projects() {
  return (
    <div className='col-12 justify-content-center flex-column mt-2'>
    <div className='container fluid'>
        <h1>Projects</h1>
    <div className='mt-3'>
        <Carousel fade>
          <Carousel.Item>
            <a href="https://www.apple.com">
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                  alt="First slide"
                />
            </a>
            <Carousel.Caption>
              <h3>Fermata</h3>
              <p>Send a personalized letter with the background song of your choice.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1504616267454-5460d659c9be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
              alt="Woman standing in the mist with a raincoat on"
            />
            <Carousel.Caption>
              <h3>Wearther</h3>
              <p>Understand the weather by knowing exactly what to wear</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://www.alimomen.com">
                <img
                  className="d-block w-100"
                  src="https://m.media-amazon.com/images/M/MV5BMTgyOTk4OTc5Ml5BMl5BanBnXkFtZTgwNTU0MTY2NjE@._V1_.jpg"
                  alt="Photo of Ali Momen from Beeba Boys"
                />
            </a>
            <Carousel.Caption>
              <h3>Personal Website</h3>
              <p>
                See more info on Ali's artistic endeavours as an actor.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
    </div>
    </div>
  );
}

export default Projects;