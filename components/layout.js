import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Script from "next/script";

export default function Layout({
  children,
  title = "Impact Business Solutions",
  activePath = "/",
}) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <title>{title}</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />

        <link href="/assets/img/favicon-32x32.png" rel="icon" />
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

        <link
          href="/assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link href="/assets/vendor/icofont/icofont.min.css" rel="stylesheet" />
        <link
          href="/assets/vendor/boxicons/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/owl.carousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link href="/assets/vendor/venobox/venobox.css" rel="stylesheet" />
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="/assets/css/style.css" rel="stylesheet" />
      </Head>

      <header id="header">
        <div className="container d-flex align-items-center">
          <div className="logo mr-auto">
            <h1 className="text-light">
              <a href="/">
                Impact Business Solutions
                <span>.</span>
              </a>
            </h1>
            <a href="index.html">
              <Image
                src="/static/assets/img/logo.png"
                alt=""
                className="img-fluid"
                layout="fill"
              />
            </a>
          </div>

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active">
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/websites">Websites</Link>
              </li>

              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {children}

      <footer id="footer">
        <div className="footer-top">
          <div className="container" data-aos="fade-up">
            <div className="row  justify-content-center">
              <div className="col-lg-6">
                <h3>Impact Business Solutions</h3>
                <p>Helping you make your IMPACT</p>
              </div>
            </div>

            <div className="row footer-newsletter justify-content-center">
              <div className="col-lg-6">
                <form action="" method="post">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                  />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" className="google-plus">
                <i className="bx bxl-skype"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container footer-bottom clearfix">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Impact Business Solutions</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>

      <Script
        strategy="beforeInteractive"
        src="/assets/vendor/jquery/jquery.min.js"
      />
      <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
      <Script src="/assets/vendor/jquery.easing/jquery.easing.min.js" />
      <Script src="/assets/vendor/php-email-form/validate.js" />
      <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" />
      <Script src="/assets/vendor/owl.carousel/owl.carousel.min.js" />
      <Script src="/assets/vendor/venobox/venobox.min.js" />
      <Script src="/assets/vendor/aos/aos.js" />

      <Script src="/assets/js/main.js" />
    </>
  );
}
