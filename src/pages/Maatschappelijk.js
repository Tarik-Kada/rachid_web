import classes from "../components/styles/Pages.module.css";

import coffee_break from "../images/coffee_break.svg";
import certificate from "../images/certificate.svg";
import graduate from "../images/graduate.svg";

function Maatschappelijk() {
  return (
    <div>
      {/* Hero section */}
      <div className={classes.splitsection} style={{marginBottom: "3%"}}>
        <div className={classes.half}>
          <div className={[classes.subtitle, classes.large].join(" ")}>
            MAATSCHAPPELIJK
          </div>
          <h1 className={classes.subpage_title}>
          Werken Aan Een Betere Samenleving
          </h1>
          <div>
            <p>
              Bij DK Fiber Group willen we een steentje bijdragen aan de
              maatschappij. Onze focus ligt op jongeren die zich vergeten voelen
              in de samenleving en het gevoel hebben dat zij geen (eerlijke)
              kansen krijgen. Dit zijn vaak jongeren die opgroeien in
              achterstandswijken en/of een etnische achtergrond hebben. Ook zijn
              dit vaak mensen die enorm veel talenten hebben, maar niet weten
              dat zij deze talenten hebben en/of hoe zij deze talenten optimaal
              kunnen benutten.
            </p>
          </div>
        </div>
        <div className={classes.right}>
          <img
            src={coffee_break}
            alt="An engineer at work."
            style={{ width: "110%", marginRight: "-5rem" }}
          ></img>
        </div>
      </div>

      {/* Maatschappelijke bijdrage */}
      <div className={classes.splitsection}>
        <div className={classes.half} style={{textAlign: "center"}}>
          <img
            src={graduate}
            alt="Someone graduating."
          ></img>
        </div>
        <div className={classes.half}>
          <h2>Tekorten in bouw en techniek</h2>
          <p>
            Momenteel komen we enorm veel mensen te kort in de techniek en bouw
            en ziet het ernaar uit dat het gat alleen maar groter wordt. Wat wij
            hebben gezien, is dat jongeren niet snel met techniek in aanraking
            komen op scholen en hun omgeving. Ook wordt het niet aantrekkelijk
            gemaakt, wat bij andere beroepen wel gebeurt. DK Fiber Group
            probeert dit gemis op te vangen en jongeren kennis te laten maken
            met techniek en de mensen die interesse tonen; te begeleiden en
            motiveren in het vak. Momenteel komen we periodiek langs op scholen
            om gastcolleges te geven en buurtactiviteiten te organiseren via
            buurtteams en gemeentes. Wij zien hierin een enorm succes en willen
            dit verder uit gaan breiden!
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
             Zo zijn we bezig om beide behoeften te
            voorzien, door middel van één oplossing. Wij geloven daarom dat we
            aan iets heel groots aan het bouwen zijn!
          </p>
        </div>
        <div className={classes.half} style={{textAlign: "center"}}>
          <img src={certificate} alt="Getting a certificate."></img>
        </div>
      </div>
    </div>
  );
}

export default Maatschappelijk;
