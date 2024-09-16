import { useEffect } from "react";
import "../components/styles/ImageSlider.css";
import index1 from "/src/images/index1.png";
import index2 from "/src/images/index2.png";
import index3 from "/src/images/index3.png";
import index4 from "/src/images/index4.png";
import { InitializeCarousel } from "./styles/ImageSlider.js";
import NavBar from "./NavBar.jsx";
// import AppBarGeneral from "./AppBarGenaral.jsx";

export default function IndexPage() {
  useEffect(() => {
    InitializeCarousel();
  }, []);

  return (
    <div className="body">
      <NavBar />
      <div className="carousel">
        <div className="list">
          {/* Slide 1 */}
          <div className="item">
            <img src={index1} alt="Slide 1" />
            <div className="content">
              <div className="author">UNIVERSITY OF PERADENIYA</div>
              <div className="title">CARE ABOUT YOUR HEART</div>
              <div className="topic">MEDICARE</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam...
              </div>
              <div className="buttons">
                <button className="bg-gray-500 text-black">SEE MORE</button>
                <button>REGISTER</button>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="item">
            <img src={index2} alt="Slide 2" />
            <div className="content">
              <div className="author">UNIVERSITY OF PERADENIYA</div>
              <div className="title">DON`&apos;`T EAT CHINESE FOOD</div>
              <div className="topic">MEDICARE</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam...
              </div>
              <div className="buttons">
                <button className="bg-gray-500 text-black">SEE MORE</button>
                <button>REGISTER</button>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="item">
            <img src={index3} alt="Slide 3" />
            <div className="content">
              <div className="author">UNIVERSITY OF PERADENIYA</div>
              <div className="title">EAT HEALTHY FOOD</div>
              <div className="topic">MEDICARE</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam...
              </div>
              <div className="buttons">
                <button className="bg-gray-500 text-black">SEE MORE</button>
                <button>REGISTER</button>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="item">
            <img src={index4} alt="Slide 4" />
            <div className="content">
              <div className="author">UNIVERSITY OF PERADENIYA</div>
              <div className="title">DON`&apos;`T GET LIQUOR</div>
              <div className="topic">MEDICARE</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam...
              </div>
              <div className="buttons">
                <button className="bg-gray-500 text-black">SEE MORE</button>
                <button>REGISTER</button>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Section */}
        <div className="thumbnail">
          <div className="item">
            <img src={index1} alt="Thumbnail 1" />
            <div className="content">
              <div className="title">CARE ABOUT YOUR HEART</div>
              <div className="description">MEDIGUARD</div>
            </div>
          </div>
          <div className="item">
            <img src={index2} alt="Thumbnail 2" />
            <div className="content">
              <div className="title">DON`&apos;`T EAT CHINESE FOOD</div>
              <div className="description">MEDIGUARD</div>
            </div>
          </div>
          <div className="item">
            <img src={index3} alt="Thumbnail 3" />
            <div className="content">
              <div className="title">EAT HEALTHY FOOD</div>
              <div className="description">MEDIGUARD</div>
            </div>
          </div>
          <div className="item">
            <img src={index4} alt="Thumbnail 4" />
            <div className="content">
              <div className="title">DON`&apos;`T GET LIQUOR</div>
              <div className="description">MEDIGUARD</div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex space-x-4 arrows ">
          <button id="prev">Prev</button>
          <button id="next">Next</button>
        </div>
        <div className="time"></div>
      </div>
    </div>
  );
}
