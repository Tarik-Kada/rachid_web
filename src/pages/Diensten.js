import classes from "../components/styles/Pages.module.css";
import CTA from "../components/ui/CTA";

import house_builders from "../images/house_builders.svg";
import business_work from "../images/business_work.svg";
import maatschappelijk_image from "../images/group_of_three.svg";
function Diensten() {
  return (
    <div>
      {/* Fiber to the home */}
      <div className={classes.splitsection}>
        <div className={classes.half}>
          <img
            src={house_builders}
            alt="Workers building a house."
            style={{ width: "90%" }}
          ></img>
        </div>
        <div className={classes.half}>
          <div className={classes.right}>
            <div className={[classes.subtitle, classes.large].join(" ")}>
              DIENSTEN
            </div>
            <h1 className={classes.subpage_title}>Onze Diensten</h1>
          </div>
          <div>
            <h2>Fiber to the home</h2>
            <p>
              De wereld is constant in beweging en aan het veranderen. We doen
              steeds meer online; van gamen, bestanden downloaden, streamen tot
              aan thuis werken. Hierdoor is een snel, stabiel en betrouwbare
              internetverbinding belangrijker dan ooit. Door middel van een
              glasvezel verbinding worden al deze behoeftes afgevinkt. Met ons
              glasvezel netwerk maken wij landelijk enorm veel klanten blij.
            </p>
          </div>
        </div>
      </div>

      {/* Fiber to the Business */}
      <div className={classes.splitsection}>
        <div className={classes.half}>
          <h2>Fiber to the Business</h2>
          <p>
            Door de hedendaagse ontwikkeling van digitalisering en
            bedrijfsprocessen/data die steeds meer verschuiven naar de cloud, is
            een snel, stabiel en betrouwbaar netwerk van essentieel belang. De
            hoge internetsnelheid en brandbreedte die glasvezel biedt, zorgt
            ervoor dat uw bedrijf optimaal kan functioneren en daarnaast worden
            mogelijkheden gefaciliteerd om resultaten te boeken. Jaarlijks maken
            steeds meer bedrijven gebruik van onze diensten, waarin wij hen in
            al hun netwerk behoeften voorzien.
          </p>
        </div>
        <div className={classes.half} style={{textAlign: "center"}}>
          <img src={business_work} alt="A group of business people."></img>
        </div>
      </div>

      {/* Dag en nacht service */}
      <div className={classes.splitsection} style={{ marginBottom: 0 }}>
        <div
          className={classes.half}
          style={{ marginBottom: "-42px", marginRight: "-6px", zIndex: -1 }}
        >
          <img
            src={maatschappelijk_image}
            alt="A group of three people."
            className={classes.group_image}
            style={{transform: "scaleX(-1) scale(90%)"}}
          ></img>
        </div>
        <div className={classes.half}
        style={{display: "flex", alignItems: "center"}}>
          <div>
          <h2>Dag en nacht service</h2>
          <p>
            Een internetverbinding die het slecht of niet doet, is een
            veelvoorkomend probleem wat heel vervelend kan zijn. Een goede
            verbinding is cruciaal en dit begrijpen wij heel goed. Daarom zijn
            wij 24 uur per dag beschikbaar om een mogelijk probleem bijtijds aan
            te pakken en op te lossen. Dit doen wij zodat u geen last ondervindt
            van een slecht netwerk en te allen tijde over een goede verbindig
            beschikt.
          </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div>
        <CTA
          question="Zit er iets voor u bij?"
          cta="Regel nu de aanleg van jouw glasvezel netwerk!"
        />
      </div>
    </div>
  );
}

export default Diensten;
