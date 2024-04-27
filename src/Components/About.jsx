/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/productive_desk.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Sylvan Softworks is a sole-proprietor LLC operated by Louis Duran. I am an experienced software developer with a demonstrated history of working in the computer software industry.\
   Skilled in C#, .NET, Python, Angular and ReactJS and Windows UI/UX development in multiple frameworks. Strong engineering\
    professional with decades of experience. I take a user-focused approach to bringing technology solutions to life.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "C# and .NET development",
  ".NET and .NET Core, ASP.NET Core",
  "Angular and (basic) ReactJS",
  "Python",
  "Flask and Django Web Frameworks",
  "Microsoft Azure and Azure DevOps",
  "Machine Learning"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in creative ways to drive innovation.\
   By leveraging my UI/UX experience. I believe in working with the customer to understand\
   the needs of their customer and provide value to the business.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "85%",
          padding: "1rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2 className='h2-dark'>About Sylvan Softworks</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.2rem",
            margin: "1rem 1rem",
            gap: "1rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
