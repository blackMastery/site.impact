import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

import logo from "../public/assets/img/hero-img.png";

export default function Home() {
  return (
    <>
      <Layout>
        <section id="hero">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div
                className="col-lg-6 py-5 py-lg-0 order-2 order-lg-1"
                data-aos="fade-right"
              >
                <h1>Helping you make your IMPACT</h1>
                <h2>
                  Save time by letting our “experienced and skilled team” do the
                  work for you. Using all the right tools with new ideas and
                  relevant to your industry to get you calculated and measurable
                  results, so you can focus on the important parts of your
                  business.
                </h2>
                <a href="/services" className="btn-get-started scrollto">
                  See Pricing
                </a>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="fade-left"
              >
                <Image
                  src="/assets/img/hero-img.png"
                  className="img-fluid"
                  alt="Picture of the author"
                  // layout='fill'

                  height="500px"
                  width="400px"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about section-bg">
          <div className="container">
            <div className="row">
              <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
              <div className="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
                <div className="content d-flex flex-column justify-content-center">
                  <h3 data-aos="fade-in" data-aos-delay="100">
                    {" "}
                    About Us
                  </h3>
                  <p data-aos="fade-in">Here to help you make an Impact!!!</p>
                  <div className="row">
                    <div className="col icon-box" data-aos="fade-up">
                      <i className="bx bx-receipt"></i>
                      We work hand in hand with you, using strategies and
                      methods tailored to suit your business to provide
                      professional and highly creative result oriented digital
                      marketing and other related advisory and consulting
                      services that will assist you by promoting your brand and
                      reaching a wide range of potential customers to grow your
                      business.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about section-bg">
          <div className="container">
            <div className="row">
              {/* <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div> */}
              <div className="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
                <div className="content d-flex flex-column justify-content-center">
                  <h3 data-aos="fade-in" data-aos-delay="100">
                    {" "}
                    How it Started
                  </h3>
                  {/* <p data-aos="fade-in">Here to help you make an Impact!!!</p> */}
                  <div className="row">
                    <div className="col icon-box" data-aos="fade-up">
                      <i className="bx bx-receipt"></i>
                      Impact Business Solutions is the brainchild of Ms. Charlyn
                      Miller, through working in the marketing industry for over
                      10 years and noting the ever increasing pace of digital
                      promotions and the rapid request from business to help
                      them optimize their digital presence she decided to launch
                      Impact Business Solutions to help businesses make their
                      IMPACT digitally.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </Layout>
    </>
  );
}
