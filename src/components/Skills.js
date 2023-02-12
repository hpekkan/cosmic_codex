import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>What is Cosmic Codex?</h2>
                        <p>At Cosmic Codex, I've decided to showcase my abilities in a more direct and transparent way by highlighting my tangible projects in
                         the fields of AI, ML, and web development. Instead of relying on percentage-based skill charts, my portfolio provides a clear representation
                          of my capabilities through the projects I've worked on, ensuring that what you see is a genuine and accurate portrayal of my skills.<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                 {/*<img src={meter1} alt="Image" />*/}
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                
                                <h5>Web Development</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
