/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
//import image from "../images/Python-Code-Image.jpg";
import image from "../images/louis-oilpainting.png";

const imageAltText = "Stylized Portrait of Louis Duran oil paint";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "WPF Applications Development",
    description:
      "I worked on various WPF applications in .NET for Intel, Banfield and IQ-Core for Pacific Star Communications.",
    url: "https://www.curtisswrightds.com/products/networking-communications/pacstar/iq-core-software",
  },
  {
    title: "ASP.NET Web Applications",
    description:
      "I worked on the backend for Banfield.com. An ASP.NET Web application REST API that powers the website.",
    url: "https://www.banfield.com/",
  },
  {
    title: "Python Web Applications",
    description:
      "I worked on complex Python Web applications for Intel using Flask and Django and hosted internally with CloudFoundry",
    url: "https://www.intel.com",
  },
  {
    title: "Machine Learning",
    description:
      "I am currently a beginner, and I am enrolled in a Machine Learning courses from the University of Washington and Coursera.",
    url: "https://www.washington.edu",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 className="h2-dark" style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
