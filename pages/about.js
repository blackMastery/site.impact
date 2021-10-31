import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function About() {
  return (
    <>
      <Layout title="About IBS">
      <section id="about" className="about section-bg">
      <div className="container">

        <div className="row">
          <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
          <div className="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
            <div className="content d-flex flex-column justify-content-center">
              <h3 data-aos="fade-in" data-aos-delay="100"> About Us</h3>
              <p data-aos="fade-in">
                Here to help you make an Impact!!!
              </p>
              <div className="row">
                <div className="col icon-box" data-aos="fade-up">
                  <i className="bx bx-receipt"></i>
                  <h4><a href="#">Corporis voluptates sit</a></h4> 
                  We work hand in hand with you, using strategies and methods tailored to suit your business to 
                  provide professional and highly creative result oriented digital marketing and other related
                   advisory and consulting services that will assist you by promoting your brand and reaching a 
                   wide range of potential customers to grow your business.
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
