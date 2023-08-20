import React from "react";
import "./Home.css";
import Hero from "../../assets/Hero.jpg";
import Second from "../../assets/second.jpg";

const Home = () => {
  return (
    <div>
      <section id="hero">
        <nav class="navigation">
          <a href="#" class="logo">
            <span>We</span>Care
          </a>
          <ul class="menu">
            <li>
              <a href="find-medicine">Find A Medicine</a>
            </li>
            <li>
              <a href="service">Our Service</a>
            </li>
            <li>
              <a href="testimonials">Testimonials</a>
            </li>
            <li>
              <a href="appointment" class="nav-appointment-btn">
                Appointment
              </a>
            </li>
          </ul>

          <svg
            class="hamburger_icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </nav>

        <div class="hero-content">
          <div class="hero-text">
            <h1>We Are Always With You In Bad Times And Good Times!</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              option
            </p>
            <button type="button" class="btn btn-primary btn-lg">
              <li>
                <a href="ordermedicine" class="nav-appointment-btn">
                  Order Medicine
                </a>
              </li>
            </button>
          </div>
          {/* <!-- images --> */}
          <div class="hero-img">
            <img src={Hero} alt="logo hero" />
          </div>
        </div>
      </section>
      <div class="appointment-search-container">
        <div class="alert alert-success" role="alert">
          <h4 class="alert-heading">Get Medicine at reasonable price</h4>
          <p>Upto 20% OFF order above Rs 599</p>
        </div>

        <div class="our-story-text"></div>
        {/* </section> */}

        <section id="our-service">
          <div class="service-heading">
            <div class="service-heading-text">
              <strong>Our Medicines</strong>
              <h2>High Quality Drugs For You</h2>

              <section id="our-story">
                <div class="our-story-img">
                  <img src={Second} alt="logo second" />
                </div>
              </section>
            </div>
          </div>
        </section>

        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Homeopathy Medicines</h5>
                <p class="card-text">
                  The homoeopathic drugs are prepared mainly from plants,
                  animals, and minerals. For this purpose, the committee has
                  experts from Chemistry, Botany and Pharmacology branches
                  besides manufacturers of medicines and Homoeopathic
                  practitioners as well as officials who are concerned with the
                  work of testing and research in drugs.
                </p>
                <a href="ClickMe" class="btn btn-primary">
                  Click Me
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Allopathy Medicines</h5>
                <p class="card-text">
                  Before a new drug is tested on humans, it undergoes
                  preclinical testing in laboratory settings and animal models
                  to assess its safety and efficacy. Researchers evaluate the
                  compound's pharmacokinetics (how the body absorbs,
                  distributes, metabolizes, and excretes the drug) and
                  pharmacodynamics. Allopathic medicine is the general term
                </p>
                <a href="ClickMe" class="btn btn-primary">
                  Click Me
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Ayurvedic Medicines</h5>
                <p class="card-text">
                  Ayurvedic medicine is a traditional system of medicine that
                  originated in ancient India and has been practiced for
                  thousands of years. It is a holistic approach to health and
                  wellness that emphasizes the balance between mind, body, and
                  spirit. Ayurveda is derived from two Sanskrit words: "ayur,"
                  meaning life, and "veda," meaning knowledge.
                </p>
                <a href="ClickMe" class="btn btn-primary">
                  Click Me
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">General Medicines</h5>
                <p class="card-text">
                  WA generic drug is a medication created to be the same as an
                  already marketed brand-name drug in dosage form, safety,
                  strength, route of administration, quality, performance
                  characteristics, and intended use. Any generic medicine must
                  perform the same in the body as the brand-name medicine. It
                  must be the same as a brand-name medicine.
                </p>
                <a href="ClickMe" class="btn btn-primary">
                  Click Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
