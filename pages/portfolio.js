import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
export default function About() {
  return (
    <>
      <Layout title="Portfolio">
        <section id="portfolio" className="portfolio section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p
                style={{
                  lineHeight: 1.3,
                }}
              >
                We strive to provide professional and highly creative result
                oriented marketing and other related advisory and consulting
                services that will assist businesses in promoting solutions. 
                We sees ourselves as one of the premier marketing and consultancy
                agency that provides a higher level of professional services to
                small and medium scale businesses, helping them to make an
                impact in their respective industries.
              </p>
              <p
                style={{
                  marginTop: "10px",
                  lineHeight: 1.3,
                }}
              >
                We not only provide a wide range of services to aid you in
                improving your business and its presence on multiple social
                media platforms, which include but not limited to facebook,
                instagram and other social mediam, traditional promotion and
                branding; and all members of our skilled and experienced team
                will work to create a plan design to fit the specific needs of
                your business, down to the last detail to help you gain a better
                click conversion to make profit for your business
              </p>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*">All</li>
                  <li data-filter=".filter-logo" className="filter-active">
                    Logo
                  </li>
                  <li data-filter=".filter-ads">Ads</li>
                </ul>
              </div>
            </div>

            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="col-lg-4 col-md-6 portfolio-item filter-ads">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/aubery_ad.jpeg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/aubery_ad.jpeg"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="Logo 1"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="#" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-ads">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/fas_grafix_ad.jpeg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/fas_grafix_ad.jpeg"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="Logo 1"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="#" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-ads">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/gop.jpeg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/gop.jpeg"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="Logo 1"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="#" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-ads">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/rio_cafe_ad2.jpeg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/rio_cafe_ad2.jpeg"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="Logo 1"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="#" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-ads">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/allure_ad.jpeg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/allure_ad.jpeg"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="Logo 1"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="#" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/allure.jpeg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/allure.jpeg"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="Logo 1"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="#" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/amarachi.jpeg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/amarachi.jpeg"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="Logo 2"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="#" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/aubrey.jpeg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/aubrey.jpeg"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="Logo 3"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="p" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/downsouth.jpeg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/downsouth.jpeg"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="Logo 4"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="#" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/impact.jpeg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/impact.jpeg"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="Logo 5"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="#" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/riocafe.jpeg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/riocafe.jpeg"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="Rio Cafe"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="#" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
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
