import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
export default function About() {
  return (
    <>
      <Layout title="IBS Websites">
      <section id="website" className="website section-bg">
      <div className="container">

        <div className="section-title">
          <h2 data-aos="fade-in">Website Templates</h2>
          <p data-aos="fade-in">
    
          </p>
        </div>

        <div className="row">
          <div className="col-md-6 " data-aos="fade-right">
            <div className="card">
             <iframe src="https://blackmastery.github.io/presentotemplate/" height="400px" frameBorder="0"></iframe>
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-right">
            <div className="card">
             <iframe src="https://blackmastery.github.io/gptemplate/" height="400px" frameBorder="0"></iframe>
            </div>
          </div>
        

          <div className="col-md-6" data-aos="fade-right">
            <div className="card">
             <iframe src="https://blackmastery.github.io/ashsatemplate/"  height="400px" frameBorder="0"></iframe>
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-right">
            <div className="card">
             <iframe src="https://blackmastery.github.io/ebusiness/" height="400px"  frameBorder="0"></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
      </Layout>
    </>
  );
}
