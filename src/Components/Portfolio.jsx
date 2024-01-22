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
import image from "../images/dev-desk.jpg";

const imageAltText = "desktop with different developers and laptops";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My UI/UX Design workflow",
    description: "A blog of my thoughts on UI/UX Design and my current workflow",
    url: "https://birimumaaso-rogers-portfolio.super.site/my-uiux-design-workflow",
  },
  {
    title: "ICT4MRPQ Hackathon: Masters Students Portal",
    description:
      "Contributed to the design process of the New Masters Students Portal system to be developed for Makerere University.",
    url: "https://www.figma.com/file/Z3HRbXmuUMpno9lCzsjIo6/Masters-App?type=design&node-id=0%3A1&mode=design&t=u7a9aBkM6m7MkrLu-1",
  },
  {
    title: "My Resume",
    description: "Includes my experience and abilities.",
    url: "https://drive.google.com/file/d/1HXo9JxXmDxPIEWCYTd781PBeOpYXz9FL/view?usp=sharing",
  },
  {
    title: "MiKashBoks KPI Dashboard Design",
    description:
      "Built a KPI Dashboard for the NGOs associated with Mikashboks,which is a digital social finance platform that makes saving and lending in groups easier and safer.",
    url: "https://www.figma.com/file/ShXxuobvdZocbkxfspslgq/Copy-of-Mikashboks_Wireframes(27-03-2022)?type=design&node-id=0%3A1&mode=design&t=OHmg911pF5b7VLI0-1",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
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
