import React from "react";
import bannerStyle from "./banner.module.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate=useNavigate()
  return (
    <>
      <section className={bannerStyle.bannerContainer}>
        <div>
          <h1>
            Bypass The Industrial,<span>Dive Into The Digital!</span>{" "}
          </h1>
          <h4>
            Before us is a golden opportunity, demanding us to take a bold step
            forward and
            <span>join the new digital era.</span>
          </h4>
          <div className={bannerStyle.buttonContainer}>
            <button type="button" onClick={()=>navigate('/signup')}>create account</button>
            <button type="button" onClick={()=>navigate('/login')}>sign in</button>
          </div>
        </div>
      </section>
      <section className={`${bannerStyle.lowerBanner} container`}>
        <div className="row">
          <div className="col">
            <h1>31000+</h1>
            <h3>Registered <br /> Members</h3>
            <p>These are the individuals who have faith in the vision and became part of the movement.</p>
          </div>
          <div className="col">
            <h1>1500 +</h1>
            <h3>Scholarship Winners </h3>
            <p>We are only as strong as our weakest link. We try to include everyone in the journey.</p>
          </div>
          <div className="col">
            <h1>2500 +</h1>
            <h3>Active Students</h3>
            <p>These are students trying to acquire the necessary digital skills to compete globally.</p>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Banner;
