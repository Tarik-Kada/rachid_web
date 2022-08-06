import classes from "../components/styles/Pages.module.css";

import Button from "../components/ui/Button";
import AltButton from "../components/ui/AltButton";
import LeesMeer from "../components/ui/LeesMeer";
import Dienst from "../components/ui/Dienst";
import AnimatedPage from "../components/layout/AnimatedPage";
// import BackgroundFigures from "../components/ui/Background_figures";

import hero_image from "../images/hero_image.svg";
import engineer_image from "../images/engineer.svg";
import maatschappelijk_image from "../images/group_of_three.svg";
import houseicon from "../images/Vectorhouse.svg";
import businessicon from "../images/Vectorbusiness.svg";
import clockicon from "../images/clock.svg";
import CTA from "../components/ui/CTA";

function Home() {
  return (
    <AnimatedPage>
      <div>
        {/* Hero section */}
        <div className={classes.splitsection} id={classes.hero}>
          <div className={classes.half}>
            {/* <BackgroundFigures right="85%" top="150px" /> */}
            <h1 className={classes.title}>
              Een Razendsnel <br /> Netwerk Voor <br /> Iedereen. <br />
              Met Iedereen.
            </h1>
            <p className={classes.slogan}>
              Ontdek de mogelijkheden <br /> op het gebied van glasvezel.
            </p>
            <div className={classes.hero_buttons}>
              <Button target="/diensten" content="ONZE DIENSTEN" width="35" />
              <AltButton target="/contact" content="CONTACT" width="35" />
            </div>
          </div>
          <div className={classes.hero_image}>
            <img src={hero_image} alt="Two people working together."></img>
          </div>
        </div>

        {/* Over ons section */}
        <div className={[classes.splitsection, classes.reverse].join(" ")}>
          <div className={[classes.half, classes.normal_image].join(" ")}>
            <img
              src={engineer_image}
              alt="An engineer at work."
              className={classes.engineer_image}
            ></img>
          </div>
          <div className={classes.half}>
            <div className={classes.subtitle}>OVER ONS</div>
            <h2>Wie zijn wij?</h2>
            <p>
              Wij zijn DK Fiber Group, één van de snelst groeiende
              glasvezelbedrijven van Nederland. Wij houden ons voornamelijk
              bezig met het aanleggen, ontwerpen en beheren van
              glasvezelnetwerken en verbindingen. Onze ambitie is om zoveel
              mogelijk huishoudens en gemeentes te voorzien van een razendsnelle
              glasvezelverbinding.
            </p>
            <LeesMeer target="/over" />
          </div>
        </div>
        <div className={classes.diensten}>
          <div className={classes.subtitle}>DIENSTEN</div>
          <h2>Bekijk ons aanbod</h2>
        </div>

        {/* Diensten section */}
        <div className={classes.dienst_container}>
          <Dienst
            title="FIBER TO THE HOME"
            content="Een snelle internetverbinding wordt steeds belangrijker voor huishoudens. Het aanleggen van een glasvezel netwerk zorgt ervoor dat aan alle online behoeftes van huishoudens voldaan kan worden."
            src={houseicon}
          />
          <Dienst
            title="FIBER TO THE BUSINESS"
            content="De digitalisering van bedrijfsprocessen zorgt ervoor dat een snel, stabiel en betrouwbaar netwerk essentieel is. Een glasvezel netwerk is hiervoor de ideale keuze."
            src={businessicon}
          />
          <Dienst
            title="DAG EN NACHT SERVICE"
            content="Een niet werkende of instabiele internetverbinding komt vaak voor. Om onze klanten te kunnen verzekeren van een goede verbinding zijn wij altijd beschikbaar om potentiële problemen tijdig op te lossen."
            src={clockicon}
          />
        </div>

        {/* Maatschappelijk section */}
        <div className={classes.splitsection} style={{ marginBottom: 0 }}>
          <div className={classes.half}>
            <div className={classes.subtitle}>MAATSCHAPPELIJK</div>
            <h2>Bijdragen aan de maatschappij</h2>
            <p>
              Bij DK Fiber Group willen we een steentje bijdragen aan de
              maatschappij. Hierbij focussen wij op kansarme jongeren die zich
              vergeten voelen in de samenleving. Dit zijn vaak jongeren die
              opgroeien in achterstandswijken en/of een etnische achtergrond
              hebben. Wij helpen deze jongeren hun talenten benutten en
              ontwikkelen.
            </p>
            <LeesMeer target="/maatschappelijk" />
          </div>
          <div
            className={[classes.half, classes.normal_image].join(" ")}
            style={{ marginBottom: "-22px", marginRight: "-6px", zIndex: -1 }}
          >
            <img
              src={maatschappelijk_image}
              alt="A group of three people."
              className={classes.group_image}
            ></img>
          </div>
        </div>

        {/* CTA */}
        <div>
          <CTA
            question="Al overtuigd?"
            cta="Regel nu de aanleg van jouw glasvezel netwerk!"
          />
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Home;
