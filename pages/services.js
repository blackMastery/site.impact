import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
export default function Services() {
  return (
    <>
      <Layout title="Services">
        <section id="services" className="services section-bg">
          <section id="pricing" className="pricing section-bg">
            <div className="container">
              <div className="section-title">
                <h2 data-aos="fade-in">Social Media Management</h2>
                <p
                  data-aos="fade-in"
                  style={{
                    lineHeight: 1.3,
                  }}
                >
                  An effective social media management strategy ensures strong
                  brand presence on leading platforms and can help a business
                  grow its customer base and improve sales. Thus a social media
                  manager or “agency” is integral to any online marketing
                  strategy. They understand the way people think, act, and
                  behave because at the very crux of social media are consumers
                  and by developing strong relationships with them, increases
                  leads and sales conversion.
                </p>

                <p
                  data-aos="fade-in"
                  style={{
                    marginTop: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  Its essential to be consistently updating and engaging with
                  consumers on social media. A survey shows how consumers expect
                  a brand to respond to them on social media with in 4 hours.
                  Not being able to comply with these expectation can lower a
                  company’s appeal to consumers online. As a result hiring a
                  social media agency fills that gap. It takes a lot of time and
                  effort to make sure that your brand stays up-to-date and with
                  a properly managed real-time response system you dont have to
                  waste your time scrabbling to get it all done.
                </p>
                <p
                  data-aos="fade-in"
                  style={{
                    marginTop: "15px",
                    fontWeight: 500,
                    fontSize: "1.3em",
                  }}
                >
                  IBS is that agency that offers you exactly what you need to
                  make it all happen. <br />
                  We have several package available for you to choose from.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-4 box" data-aos="zoom-in">
                  <h3>Social Media Bronze Package: 150USD</h3>
                  <ul>
                    <li>
                      <i className="bx bx-check"></i> Tailored content strategy
                    </li>

                    <li>
                      <i className="bx bx-check"></i>
                      12 monthly posts
                    </li>
                    <li>
                      <i className="bx bx-check"></i> Graphic Design for content
                    </li>

                    <li>
                      <i className="bx bx-check"></i>1 Page or Ad boost Est.
                      reach 1.5k-4.4k people
                    </li>
                    <li>
                      <i className="bx bx-check"></i>
                      Monthly reporting
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 box" data-aos="zoom-in">
                  <h3>Social Media Silver Package: 200USD</h3>
                  <ul>
                    <li>
                      <i className="bx bx-check"></i> Tailored content strategy
                    </li>

                    <li>
                      <i className="bx bx-check"></i>
                      20 monthly posts
                    </li>

                    <li>
                      <i className="bx bx-check"></i>
                      Message and Comment Monitors
                    </li>
                    <li>
                      <i className="bx bx-check"></i>2 Page or Ad boost Est.
                      reach 4.5k-13.1k people
                    </li>
                    <li>
                      <i className="bx bx-check"></i>
                      Monthly reporting
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 box featured" data-aos="zoom-in">
                  <span className="featured-badge">Featured</span>
                  <h3>Social Media Gold Package: 250USD</h3>
                  <ul>
                    <li>
                      <i className="bx bx-check"></i>
                      Tailored content strategy
                    </li>

                    <li>
                      <i className="bx bx-check"></i>
                      30 monthly posts
                    </li>
                    <li>
                      <i className="bx bx-check"></i>
                    </li>

                    <li>
                      <i className="bx bx-check"></i>
                      Message and Comment Monitors
                    </li>

                    <li>
                      <i className="bx bx-check"></i>
                      Graphic Design & short videos for content
                    </li>
                    <li>
                      <i className="bx bx-check"></i>3 Page or Ad boost Est.
                      reach 5.5k-16.3k people
                    </li>
                    <li>
                      <i className="bx bx-check"></i>
                      Monthly reporting
                    </li>
                  </ul>
                  <a href="#" className="get-started-btn">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="container">
            <div className="section-title">
              <h2 data-aos="fade-in">Services</h2>
              <p data-aos="fade-in">
                We are a Business Solutions and Marketing Agency that is set to
                compete in a highly competitive industry. Our core services
                revolve around creating advertising campaigns for placements in
                newspapers, radio, TV, social and digital media platforms and
                other related services such as branding, media production,
                digital solutions, business consulting and advisory services.
              </p>
            </div>

            <div className="row">
              <div
                className="col-md-6 d-flex align-items-stretch"
                data-aos="fade-right"
              >
                <div className="card">
                  <div className="card-img">
                    <Image
                      src="/assets/img/services-1.jpg"
                      alt="..."
                      width="500px"
                      height="350px"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="#">DESIGN / BRANDING</a>
                    </h5>
                    <ul className="card-text">
                      <li>Brochure Designs</li>
                      <li>Logo Designs</li>
                      <li>Menu Card Designs</li>
                      <li>Business card Designs</li>
                      <li>Flyer designs</li>
                      <li>Badge Designs</li>
                    </ul>
                    <div className="read-more">
                      <a href="#">
                        <i className="icofont-arrow-right"></i> Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 d-flex align-items-stretch"
                data-aos="fade-left"
              >
                <div className="card">
                  <div className="card-img">
                    <Image
                      width="500px"
                      height="350px"
                      src="/assets/img/services-2.jpg"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="#">MEDIA PRODUCTION</a>
                    </h5>

                    <ul className="card-text">
                      <li>Infomercials</li>
                      <li>Animated short videos</li>
                      <li>Video Shows</li>
                      <li>Voice-overs</li>
                      <li>Corporate Commercials</li>
                    </ul>

                    <div className="read-more">
                      <a href="#">
                        <i className="icofont-arrow-right"></i> Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 d-flex align-items-stretch"
                data-aos="fade-right"
              >
                <div className="card">
                  <div className="card-img">
                    <Image
                      width="500px"
                      height="350px"
                      src="/assets/img/services-3.jpg"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="#">DIGITAL SOLUTIONS</a>
                    </h5>

                    <ul className="card-text">
                      <li>Social Media Management</li>
                      <li>Website development</li>
                      <li>Chatbot Development</li>
                    </ul>
                    <div className="read-more">
                      <a href="#">
                        <i className="icofont-arrow-right"></i> Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 d-flex align-items-stretch"
                data-aos="fade-left"
              >
                <div className="card">
                  <div className="card-img">
                    <Image
                      width="500px"
                      height="350px"
                      src="/assets/img/services-4.jpg"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="#">BUSINESS CONSULTANCY</a>
                    </h5>
                    <ul className="card-text">
                      <li>Business Plans</li>
                      <li>Marketing Strategies</li>
                      <li>Market Research</li>
                      <li>Content Writing</li>
                    </ul>

                    <div className="read-more">
                      <a href="#">
                        <i className="icofont-arrow-right"></i> Read More
                      </a>
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
