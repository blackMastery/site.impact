import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
export default function About() {
  return (
    <>
      <Layout title="IBS Team">
      <section id="team" className="team section-bg">
      <div className="container">

        <div className="section-title">
          <h2 data-aos="fade-in">Our Team</h2>
          <p data-aos="fade-in">
            We are aware of the importance of making a lasting impact by our potential clients on any target 
            audience or building that lasting professional relationship. This is why we are committed to only 
            hiring the best hands within our area of operations to help you achieve your business objectives through 
            any of our many business solutions Services.
          </p>
        </div>
        </div>
    </section>
      </Layout>
    </>
  );
}
