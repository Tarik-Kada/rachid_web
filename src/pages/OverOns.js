import classes from "../components/styles/Pages.module.css";
import AnimatedPage from "../components/layout/AnimatedPage";

import engineer_image from "../images/engineer.svg";
import compass_image from "../images/expertise.svg";
import coffe_workers from "../images/coffee_workers.svg";
import LeesMeer from "../components/ui/LeesMeer";

function OverOns() {
  return (
    <AnimatedPage>
      <div>
        {/* Hero section */}
        <div className={[classes.splitsection, classes.reverse].join(" ")}>
          <div className={classes.half}>
            <img
              src={engineer_image}
              alt="An engineer at work."
              style={{ width: "90%" }}
            ></img>
          </div>
          <div className={classes.half}>
            <div className={classes.right}>
              <div className={[classes.subtitle, classes.large].join(" ")}>
                OVER ONS
              </div>
              <h1 className={classes.subpage_title}>Wie Zijn Wij?</h1>
            </div>
            <div>
              <h2>Ons doel</h2>
              <p>
                Wij zijn DK Fiber Group, één van de snelst groeiende
                glasvezelbedrijven van Nederland. Wij houden ons voornamelijk
                bezig met het aanleggen, ontwerpen en beheren van
                glasvezelnetwerken en verbindingen. Onze ambitie is om zoveel
                mogelijk huishoudens en gemeentes te voorzien van een
                razendsnelle glasvezelverbinding.
              </p>
            </div>
          </div>
        </div>

        {/* Expertise en innovatie */}
        <div className={classes.splitsection}>
          <div className={classes.half}>
            <h2>Expertise en innovatie</h2>
            <p>
              De afgelopen jaren zijn wij in een razend tempo gegroeid. Hierdoor
              zijn wij één van grootste specialisten op glasvezelgebied. Ons
              team van specialisten houdt zich dagelijks bezig met de meest
              complexe vraagstukken en wij bieden hierbij een gepaste oplossing.
              Op gebied van glasvezel technologie is het van noodzaak om te
              blijven innoveren en ontwikkelingen nauwlettend in de gaten te
              houden. Wij investeren continu in materieel en kennis. Hierdoor
              blijven we up-to-date en kunnen we onze klanten van het beste
              advies en oplossingen voorzien.
            </p>
          </div>
          <div className={classes.half}>
            <img
              src={compass_image}
              alt="A group of experts."
              className={classes.expert_image}
            ></img>
          </div>
        </div>

        {/* Visie bijdrage */}
        <div className={[classes.splitsection, classes.reverse].join(" ")}>
          <div className={[classes.half, classes.normal_image].join(" ")}>
            <img
              src={coffe_workers}
              alt="Workers happily drinking coffee together."
              className={classes.engineer_image}
            ></img>
          </div>
          <div className={classes.half}>
            <h2>Onze visie</h2>
            <p>
              Er is een groot tekort aan technici. Tegelijkertijd is er een
              gebrek aan diversiteit: vrouwen en talent van diverse culturele
              achtergronden zijn ondervertegenwoordigd in de techniekwereld.
              Mede daarom hebben we een toegewijde afdeling binnen DK Fiber
              Group opgericht om te bewijzen dat er een overvloed aan verborgen
              talent geactiveerd kan worden om te werken in de wereld van
              glasvezel.
            </p>
            <LeesMeer target="/visie" />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default OverOns;
