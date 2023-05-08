import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Current projects</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}

                <div className="portfolio-link">
                  WEBSITE: <a href="http://www.somoslabestia.com" target="blank_">SOMOS LA BESTIA</a> - LEAD DEVELOPER, SITE ADMIN
                </div>
                <div className="portfolio-link">
                  WEBSITE: <a href="http://labestiaradio.com" target="blank_">LA BESTIA RADIO</a> - LEAD DEVELOPER, SITE ADMIN
                </div>
                
                <div className="portfolio-link">
                  PODCAST: NO MATES AL PERRITO - ONE OF THREE MEMBERS OF RADIO SHOW
                  <br/><br/>
                  <iframe
                    src="https://www.ivoox.com/player_es_podcast_1892117_zp_1.html"
                    width="100%"
                    height="400"
                    frameborder="0"
                    allowfullscreen="0"
                    scrolling="no"
                    loading="lazy"
                  />
                </div>
                
              </div>

              <h1>Past projects</h1>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <div className="portfolio-link">
                  SCHOOL-WORK: NATURAL LANGUAGE PROCESSING <a href="/docs/NLPClass.pdf" target="blank_">LITERATURE REVIEW</a>
                </div>
                <div className="portfolio-link">
                  SCHOOL-WORK: COMPUTATIONAL PHOTOGRAPHY <a href="/docs/GraphicsClass.pdf" target="blank_">FINAL PROJECT</a>
                </div>
                <div className="portfolio-link">
                  SCHOOL-WORK: TECHNICAL WRITING <a href="/docs/Poster.pdf" target="blank_">IMAGE CAPTIONING POSTER</a>
                </div>
                <div className="portfolio-link">
                  SCHOOL-WORK: MATHEMATICAL PROBLEM SOLVING <a href="/docs/Portfolio.pdf" target="blank_">PORTFOLIO</a>
                </div>
                <div className="portfolio-link">
                  SCHOOL-WORK: FEMINISM AND SCIENCE <a href="/docs/ProgressiveProjectPart1.pdf" target="blank_">STABLE MATCHING ANALYSIS</a>
                </div>
                <div className="portfolio-link">
                  SCHOOL-WORK: FEMINISM AND SCIENCE <a href="/docs/ProgressiveProjectPart3.pdf" target="blank_">TIME = MONEY ANALYSIS</a>
                </div>
                <div className="portfolio-link">
                  SCHOOL-WORK: 3D MODELLING AND ANIMATION <a href="https://www.youtube.com/@dianagonzalezsantillan3622/videos" target="blank_">PROJECTS</a>
                </div>
              </div>

              <h1>Things I like (NOT authored by me)</h1>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <p>
                  <div>
                    <a href="https://www.laboratoria.la/en" target="_blank">Laboratoria</a>
                  </div>
                  <div>
                    <a href="https://girlswhocode.com/about-us/" target="_blank">Girls Who Code</a>
                  </div>
                </p>

                <p>
                  <div>
                    <a href="https://affinelayer.com/pixsrv/" target="_blank">Image-To-Image</a>
                  </div>
                  <div>
                    <a href="/docs/graph_coloring.pdf" target="_blank">6-color Graph Coloring Proof</a>
                  </div>
                  <div>
                    <a href="https://newmaterialism.eu/almanac/i/intra-action.html" target="_blank">Intra-Action</a>
                  </div>
                </p>

                <p>
                  <div>
                    <a href="https://bandcamp.com/digonsan" target="_blank">Bandcamp</a>
                  </div>
                  <div>
                    <a href="https://longplayer.org/" target="_blank">Longplayer</a>
                  </div>
                </p>

                <p>
                  <div>
                    <a href="/docs/DiabloDeLosNumeros.pdf" target="_blank">El Diablo de Los Numeros</a>
                  </div>
                  <div>
                    <a href="https://www.sbnation.com/a/17776-football" target="_blank">17776</a>
                  </div>
                  <div>
                    <a href="https://www.sbnation.com/c/secret-base/21410129/20020" target="_blank">20020</a>
                  </div>
                </p>

                <p>
                  <div>
                    <a href="https://http.cat" target="_blank">HTTP Cats</a>
                  </div>
                  <div>
                    <a href="https://adarkroom.doublespeakgames.com/" target="_blank">A Dark Room</a>
                  </div>
                </p>

                <p>
                  <div>
                    <a href="https://theuselessweb.com/" target="_blank">The Useless Web</a>
                  </div>
                  <div>
                    <a href="http://www.centennialbulb.org/cam.htm" target="_blank">A Centennial Light Bulb</a>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/fanaticosdelosboilers/" target="_blank">Fanaticos de los Boilers</a>
                  </div>
                  <div>
                    <a href="http://www.figwitlives.net/index.htm" target="_blank">Figwit</a>
                  </div>
                  <div>
                    <a href="https://theuselessweb.site/nooooooooooooooo/" target="_blank">Nooooooooooooo</a>
                  </div>
                </p>
              </div>

            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
