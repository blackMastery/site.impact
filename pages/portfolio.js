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
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" >All</li>
              <li data-filter=".filter-logo" className="filter-active">Logo</li>
              <li data-filter=".filter-ads">Ads</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">



          <div className="col-lg-4 col-md-6 portfolio-item filter-ads">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/aubery_ad.jpeg" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/aubery_ad.jpeg" data-gall="portfolioGallery" className="venobox" title="Logo 1"><i className="bx bx-plus"></i></a>
                 <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>


          
          <div className="col-lg-4 col-md-6 portfolio-item filter-ads">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/fas_grafix_ad.jpeg" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/fas_grafix_ad.jpeg" data-gall="portfolioGallery" className="venobox" title="Logo 1"><i className="bx bx-plus"></i></a>
                 <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a> 
              </div>
            </div>
          </div>


          
          <div className="col-lg-4 col-md-6 portfolio-item filter-ads">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/gop.jpeg" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/gop.jpeg" data-gall="portfolioGallery" className="venobox" title="Logo 1"><i className="bx bx-plus"></i></a>
                 <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a> 
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-ads">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/rio_cafe_ad2.jpeg" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/rio_cafe_ad2.jpeg" data-gall="portfolioGallery" className="venobox" title="Logo 1"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a> 
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-ads">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/allure_ad.jpeg" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/allure_ad.jpeg" data-gall="portfolioGallery" className="venobox" title="Logo 1"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>


          <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/allure.jpeg" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/allure.jpeg" data-gall="portfolioGallery" className="venobox" title="Logo 1"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>


          <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/amarachi.jpeg" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/amarachi.jpeg" data-gall="portfolioGallery" className="venobox" title="Logo 2"><i className="bx bx-plus"></i></a>
                 <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a> 
              </div>
            </div>
          </div>




          <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/aubrey.jpeg" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/aubrey.jpeg" data-gall="portfolioGallery" className="venobox" title="Logo 3"><i className="bx bx-plus"></i></a>
                <a href="p" title="More Details"><i className="bx bx-link"></i></a> 
              </div>
            </div>
          </div>


          <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/downsouth.jpeg" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/downsouth.jpeg" data-gall="portfolioGallery" className="venobox" title="Logo 4"><i className="bx bx-plus"></i></a>
                 <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a> 
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/impact.jpeg" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/impact.jpeg" data-gall="portfolioGallery" className="venobox" title="Logo 5"><i className="bx bx-plus"></i></a>
                 <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a> 
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/riocafe.jpeg" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/riocafe.jpeg" data-gall="portfolioGallery" className="venobox" title="Rio Cafe"><i className="bx bx-plus"></i></a>
               <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
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
