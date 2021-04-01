import React from "react";
import Articles from "./Articles/Articles";
import { NavLink } from "react-router-dom";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import Lighthouse from "../../three-fiber/CanvasLighthouse";
import seaPic from "../../img/sea2.jpg";
import moon from "../../img/moon.png";
import cloud from "../../img/cloud_PNG.png";
import cloud2 from "../../img/cloud_PNG2.png";
import cloud3 from "../../img/cloud_PNG2.png";
import cloud4 from "../../img/cloud1.png";
import cloud5 from "../../img/cloud1.png";
import ScubaDiver from "../../img/scuba-diver.png";

class ArticleList extends React.Component {
  componentDidMount() {
    let resetTime = 0;

    const createBubbles = (currentTime) => {
      const uwSection = document.querySelector(".articles-list__uw-scene1");
      if (currentTime - resetTime > 50) {
        resetTime = currentTime;
        const createdBubble = document.createElement("span");
        const size = Math.random() * 60;

        createdBubble.style.width = `${size}px`;
        createdBubble.style.height = `${size}px`;
        createdBubble.style.left =
          Math.random() * (window.innerWidth - size - 20) + "px";

        createdBubble.classList.add("articles-list__uw-bubble");

        uwSection.appendChild(createdBubble);

        setTimeout(() => {
          createdBubble.remove();
        }, 4000);
      }

      this.bubbleAnimation = requestAnimationFrame(createBubbles);
    };

    createBubbles();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.bubbleAnimation);
  }

  articles = Articles.map((article) => (
    <NavLink
      className="articles-list__link"
      key={article.number}
      data-text={`${article.title}`}
      to={`/article/${article.title}`}
    >
      <li className="articles-list__link-text">{article.title}</li>
    </NavLink>
  ));

  render() {
    return (
      <div className="articles-list">
        <div className="articles-list__sea-container">
         <Lighthouse />
          <Controller>
            <Scene triggerElement="onEnter" duration={"3000px"} pin={false}>
              {(progress) => (
                <Tween
                  to={{
                    css: {
                      transform: `translate(0,500px)`,
                    },
                    ease: "Strong.easeOut",
                  }}
                  ease="Strong.easeOut"
                  totalProgress={progress}
                  paused
                >
                  <img className="articles-list__moon" src={moon} alt="moon" />
                </Tween>
              )}
            </Scene>
          </Controller>
          <img className="articles-list__cloud2" src={cloud2} alt="cloud" />
          <img className="articles-list__cloud3" src={cloud3} alt="cloud" />
          <img className="articles-list__cloud" src={cloud} alt="cloud" />
          <img className="articles-list__cloud4" src={cloud4} alt="cloud" />
          <img className="articles-list__cloud5" src={cloud5} alt="cloud" />
          <img className="articles-list__sea" src={seaPic} alt="sea" />
        </div>
        <div className="articles-list__uw-container">
          <div className="articles-list__uw-scene1">
            <div className="articles-list__uw-scene1-trigger"></div>
            <Controller>
              <Scene
                triggerElement={".articles-list__uw-scene1-trigger"}
                duration={500}
                pin={false}
              >
                {(progress) => (
                  <Tween
                    to={{
                      css: {
                        transform: "translate(0,-400px)",
                      },
                    }}
                    ease="Strong.easeOut"
                    totalProgress={progress}
                    paused
                  >
                    <img
                      className="articles-list__uw-scene1__scuba-diver"
                      src={ScubaDiver}
                      alt="scuba diver taking pictures"
                    />
                  </Tween>
                )}
              </Scene>
            </Controller>
          </div>
        </div>

        <ul className="articles-list__list-container">{this.articles}</ul>
      </div>
    );
  }
}

export default ArticleList;
