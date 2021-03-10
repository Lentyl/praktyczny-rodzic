import React from "react";
import me from "../../img/me_2000x2100.jpg";

const AboutBlog = () => {



  return (
    <article className="about__container">
      <h2 className="about__about-header">O blogu</h2>

      <p className="about__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        reiciendis optio veritatis impedit. Quas tenetur ad est, iure at sunt
        incidunt ullam aspernatur illo sint sapiente, nisi laudantium
        exercitationem consectetur? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Beatae reiciendis optio veritatis impedit. Quas
        tenetur ad est, iure at sunt incidunt ullam aspernatur illo sint
        sapiente, nisi laudantium exercitationem consectetur? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Beatae reiciendis optio veritatis
        impedit. Quas tenetur ad est, iure at sunt incidunt ullam aspernatur
        illo sint sapiente, nisi laudantium exercitationem consectetur? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Beatae reiciendis
        optio veritatis impedit. Quas tenetur ad est, iure at sunt incidunt
        ullam aspernatur illo sint sapiente, nisi laudantium exercitationem
        consectetur?
      </p>

      <h2 className="about__about-header">O mnie</h2>

      <div className="about__img-container">
        <img className="about__me-img" src={me} alt="Me a" />
        <div className="about__img-glass"></div>
      </div>

      <div className="about__shadow"></div>

      <p className="about__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        reiciendis optio veritatis impedit. Quas tenetur ad est, iure at sunt
        incidunt ullam aspernatur illo sint sapiente, nisi laudantium
        exercitationem consectetur? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Beatae reiciendis optio veritatis impedit. Quas
        tenetur ad est, iure at sunt incidunt ullam aspernatur illo sint
        sapiente, nisi laudantium exercitationem consectetur? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Beatae reiciendis optio veritatis
        impedit. Quas tenetur ad est, iure at sunt incidunt ullam aspernatur
        illo sint sapiente, nisi laudantium exercitationem consectetur? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Beatae reiciendis
        optio veritatis impedit. Quas tenetur ad est, iure at sunt incidunt
        ullam aspernatur illo sint sapiente, nisi laudantium exercitationem
        consectetur?
      </p>
    </article>
  );
};

export default AboutBlog;
