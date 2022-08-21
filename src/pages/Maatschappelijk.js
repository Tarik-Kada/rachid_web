import classes from "../components/styles/Pages.module.css";
import AnimatedPage from "../components/layout/AnimatedPage";
import Block from "../components/ui/Block";

import coffee_break from "../images/coffee_break.svg";
import certificate from "../images/certificate.svg";
import graduate from "../images/graduate.svg";

function Maatschappelijk() {
  return (
    <AnimatedPage>
      <div>
        {/* Hero section */}
        <div className={classes.splitsection} style={{ marginBottom: "3%" }}>
          <div className={classes.half}>
            <div className={[classes.subtitle, classes.large].join(" ")}>
              VISIE
            </div>
            <h1 className={classes.subpage_title}>
              Opleiden & Begeleiden
            </h1>
            <div>
              <p>
                Er is een groot tekort aan technici. Tegelijkertijd is er een
                gebrek aan diversiteit: vrouwen en talent van diverse culturele
                achtergronden zijn ondervertegenwoordigd in de techniekwereld.
                Mede daarom hebben we een toegewijde afdeling binnen DK Fiber
                Group opgericht om te bewijzen dat er een overvloed aan
                verborgen talent geactiveerd kan worden om te werken in de
                wereld van glasvezel.
              </p>
            </div>
          </div>
          <div className={[classes.right, classes.normal_image].join(" ")}>
            <img
              src={coffee_break}
              alt="A group on coffeebreak."
              className={classes.coffee_break}
            ></img>
          </div>
        </div>
        {/* Missie, visie en strategie */}
        <div className={classes.block_container}>
          <Block
            title="Missie"
            content="De tekorten in de techniekwereld oplossen door verborgen talent te activeren"
          />
          <Block
            title="Visie"
            content="Een tekort is helemaal niet nodig, als we anders kijken naar talent."
          />
          <Block
            title="Strategie"
            content="Wij bieden één passend loopbaanpad naar volwaardig
            glasvezelmonteur aan. Van oriënteren tot opleiden.
            Toegankelijk voor iedereen en continu in ontwikkeling op basis van
            de vraag op het gebied van aanleg, beheer en begeleidingstrajecten
            van glasvezelnetwerken."
          />
        </div>
        {/* Tekorte */}
        <div className={[classes.splitsection, classes.reverse].join(" ")}>
          <div
            className={[classes.half, classes.school_image].join(" ")}
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={certificate}
              alt="Getting a certificate."
              className={classes.expert_image}
            ></img>
          </div>
          <div className={classes.half}>
            <h2>Tekorten in bouw en techniek</h2>
            <p>
              Momenteel komen we enorm veel mensen te kort in de techniek en
              bouw en ziet het ernaar uit dat het gat alleen maar groter wordt.
              Wat wij hebben gezien, is dat jongeren niet snel met techniek in
              aanraking komen op scholen en hun omgeving. Ook wordt het niet
              aantrekkelijk gemaakt, wat bij andere beroepen wel gebeurt.
              <br />
              <br />
              DK Fiber Group probeert dit gemis op te vangen en jongeren kennis
              te laten maken met techniek en de mensen die interesse tonen; te
              begeleiden en motiveren in het vak. Momenteel komen we periodiek
              langs op scholen om gastcolleges te geven en buurtactiviteiten te
              organiseren via buurtteams en gemeentes. Wij zien hierin een enorm
              succes en willen dit verder uit gaan breiden!
            </p>
          </div>
        </div>

        {/* Expertise en innovatie */}
        <div className={classes.splitsection}>
          <div className={classes.half}>
            <h2>Educatie</h2>
            <p>
              Ook hebben wij kortgeleden in samenwerking met diverse scholen een
              opleidingscentrum geopend. Hierdoor kunnen wij mensen van een
              opleiding op maat voorzien en de meest passende (vaak ook nodige)
              scholing voor een individu creëren. Wij monitoren en begeleiden
              hierin alle deelnemers persoonlijk, waardoor wij het maximale uit
              hen naar boven halen.
              <br />
              <br />
              Zo zijn we bezig om beide behoeften te voorzien, door middel van
              één oplossing. Wij geloven daarom dat we aan iets heel groots aan
              het bouwen zijn!
            </p>
          </div>
          <div
            className={[classes.half, classes.school_image].join(" ")}
            style={{ textAlign: "center" }}
          >
            <img
              src={graduate}
              alt="Someone graduating."
              className={classes.expert_image}
            ></img>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Maatschappelijk;
