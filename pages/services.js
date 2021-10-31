import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
export default function About() {
  return (
    <>
      <Layout title="Services">
      <section id="services" className="services section-bg">
      <div className="container">

        <div className="section-title">
          <h2 data-aos="fade-in">Services</h2>
          <p data-aos="fade-in">
            We are a Business Solutions and Marketing Agency that is set to compete  in  
            a highly competitive industry. Our core services revolve around creating 
            advertising campaigns for placements in newspapers, radio, TV, 
            social and digital media platforms and other related services such as branding, 
            media production, digital solutions, business consulting and advisory services.
          </p>
        </div>

        <div className="row">
          <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-right">
            <div className="card">
              <div className="card-img">
                <img src="assets/img/services-1.jpg" alt="..."/>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">
                  DESIGN / BRANDING
                </a></h5>
                <ul className="card-text">
                  <li>
                    Brochure Designs
                  </li>
                  <li>
                    Logo Designs
                  </li>
                  <li>
                    Menu Card Designs
                  </li>
                  <li>
                    Business card Designs
                  </li>
                  <li>
                    Flyer designs
                  </li>
                  <li>
                    Badge Designs
                  </li>
                </ul>
                <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-left">
            <div className="card">
              <div className="card-img">
                <img src="assets/img/services-2.jpg" alt="..."/>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">MEDIA PRODUCTION</a></h5>
    
                    <ul className="card-text">
                      <li>
                        Infomercials
                      </li>
                      <li>
                        Animated short videos
                      </li>
                      <li>
                        Video Shows
                      </li>
                      <li>
                        Voice-overs
                      </li>
                      <li>
                        Corporate Commercials
                      </li>
                    </ul>

                <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>

          </div>
          <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-right">
            <div className="card">
              <div className="card-img">
                <img src="assets/img/services-3.jpg" alt="..."/>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">DIGITAL SOLUTIONS</a></h5>

                <ul className="card-text">
                  <li>Social Media Management
                  </li>
                  <li>Website development
                  </li>
                  <li>Chatbot Development
                  </li>
                </ul>
                <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-left">
            <div className="card">
              <div className="card-img">
                <img src="assets/img/services-4.jpg" alt="..."/>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">BUSINESS CONSULTANCY</a></h5>
                <ul className="card-text">
                  <li>
                    Business Plans
                  </li>
                  <li>
                    Marketing Strategies
                  </li>
                  <li>
                    Market Research
                  </li>
                  <li>
                    Content Writing
                  </li>
                  
                </ul>
           
                <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
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
