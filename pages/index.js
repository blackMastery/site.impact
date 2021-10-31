import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
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
                  We are team of talented designers making websites with
                  Bootstrap
                </h2>
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="fade-left"
              >
                <img
                  src="/assets/img/hero-img.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>



        <section id="pricing" className="pricing section-bg">
      <div className="container">

        <div className="section-title">
          <h2 data-aos="fade-in">Pricing</h2>
          <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">




          <div className="col-lg-4 box" data-aos="zoom-in">
            <h3>Basic Package </h3>
            <ul>
              <li><i className="bx bx-check"></i> Tailored content strategy  and graphic designs</li>
              <li><i className="bx bx-check"></i> 
                Page Optimization
              </li>
              <li><i className="bx bx-check"></i> 
                15 monthly posts
              </li>
              <li><i className="bx bx-check"></i> 
                1 Video Show
              </li>
              <li><i className="bx bx-check"></i> 
                Message and Comment Monitors
              </li>
              <li><i className="bx bx-check"></i> 
                1 Page or Ad boost Est. reach 1.5k-4.4k  people
              </li>
              <li><i className="bx bx-check"></i> 
                Monthly reporting
              </li>
            </ul>
          </div>

          <div className="col-lg-4 box" data-aos="zoom-in">
            <h3>Standard Package </h3>
            <ul>
              <li><i className="bx bx-check"></i> Tailored content strategy  and graphic designs</li>
              <li><i className="bx bx-check"></i> 
                Page Optimization
              </li>
              <li><i className="bx bx-check"></i> 
                23 monthly posts
              </li>
              <li><i className="bx bx-check"></i> 
                1 Video Show
              </li>
              <li><i className="bx bx-check"></i> 
                Message and Comment Monitors
              </li>
              <li><i className="bx bx-check"></i> 
                2 Page or Ad boost Est. reach 1.5k-4.4k  people
              </li>
              <li><i className="bx bx-check"></i> 
                Monthly reporting
              </li>
            </ul>
          </div>

          <div className="col-lg-4 box featured" data-aos="zoom-in">
            <span className="featured-badge">Featured</span>
            <h3>Premium Package</h3>
            <ul>
              <li><i className="bx bx-check"></i> 
                Tailored content strategy  and graphic designs
              </li>
              <li><i className="bx bx-check"></i> 
                Page Optimization
              </li> 
              <li><i className="bx bx-check"></i> 
                31 monthly posts
              </li> 
              <li><i className="bx bx-check"></i> 
              </li>
              <li><i className="bx bx-check"></i> 
                1 Video Show
              </li><li><i className="bx bx-check"></i> 
                Message and Comment Monitors
              </li><li><i className="bx bx-check"></i> 
                3 Page or Ad boost Est. reach 1.5k-4.4k  people
              </li><li><i className="bx bx-check"></i> 
                Monthly reporting
              </li>
            </ul>
            <a href="#" className="get-started-btn">Get Started</a>
          </div>

  

        </div>

      </div>
    </section>
      </Layout>
    </>
  );
}
