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
                  PODCAST: NO MATES AL PERRITO - RADIO SHOW
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
                {/* TO DO - stuff from old site + my project from barad's class (the stable matching one and the money one) */}
                Work in progress
              </div>


              <h1>3D modelling</h1>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {/* TO DO - stuff from old site */}
                Work in progress
              </div>

              <h1>Sites I like (I did not author them)</h1>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {/* TO DO -Girls Who Code
Laboratoria
Longplayer
Bandcamp
Http.cat

https://newmaterialism.eu/almanac/i/intra-action.html Ever since I took a feminism and science class by Karen Barad my mind has been blown away by the idea of intra-action. I love how science and quantum physics can be seen with feminist and queer eyes, and how that helps make much more sense of everything.



Image-to-Image A model that takes edges and returns cat textured images, and more.

6-color graph coloring!! This is one of my favorite proofs. I also really like that the 4-color proof because it was the first computer assisted proof in history, and I think that is exciting.

A Dark Room Fun text-based game.

El Diablo de los Numeros This is a great children's book that explains some complex mathematical concepts in really simple ways.

El Libro de las Preguntas

17776 There's also a second part: 20020.

The Useless Web

A Centennial Light Bulb

Fanaticos de los Boilers

Figwit

Nooooooooooooo For use in dire situations.*/}
Work in progress
              </div>

            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
