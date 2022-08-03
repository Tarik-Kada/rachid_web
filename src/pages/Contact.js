import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import classes from "../components/styles/Pages.module.css";
import buttonclass from "../components/styles/Buttons.module.css";
// import Button from "../components/ui/Button";

function Contact() {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [nummer, setNummer] = useState("");
  const [bericht, setBericht] = useState("");

  const form = useRef();

  const isRequired = (value) => (value === "" ? false : true);
  const isEmailValid = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  const isBetween = (length, restrict) => {
    if (length === restrict) {
      return true;
    }
    return false;
  };
  const sendEmail = (e) => {
    e.preventDefault();

    if (isRequired(naam) && isRequired(email) && isRequired(bericht)) {
      if (isEmailValid(email)) {
        if (isRequired(nummer) && isBetween(nummer.length, 10)) {
          setNaam("");
          setEmail("");
          setNummer("");
          setBericht("");

          emailjs
            .sendForm(
              "service_3fg913r",
              "template_5edfa9i",
              form.current,
              "ertEQowpYHmWZl65t"
            )
            .then(
              (result) => {
                alert("Je email is succesvol verzonden!");
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
        } else {
          alert(
            "Vul een telefoonnummer in dat begint met '06' en tien cijfers lang is"
          );
        }
      } else {
        alert("Vul een geldig email adres in!");
      }
    } else {
      alert("Vul alle verplichte vakken in!");
    }
  };

  return (
    <div>
      <div
        className={[classes.subtitle, classes.large].join(" ")}
        style={{ marginBottom: "3%" }}
      >
        CONTACT
      </div>
      <div className={classes.splitsection}>
        <div className={classes.half}>
          {/* <form className={classes.contact_form}>
            <input type="text" id="names" name="names"></input>
            <input type="text" id="email" name="email"></input>
            <input type="text" id="number" name="number"></input>
            <textarea id="message" name="message"></textarea>
            <input type="submit" value="Send" />
          </form> */}

          <form
            className={classes.contact_form}
            ref={form}
            onSubmit={sendEmail}
          >
            <label>Naam*</label>
            <input
              type="text"
              name="user_name"
              value={naam}
              onChange={(e) => setNaam(e.target.value)}
            />
            <label>E-mail*</label>
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Telefoonnummer</label>
            <input
              type="text"
              name="user_number"
              value={nummer}
              onChange={(e) => setNummer(e.target.value)}
            />
            <label>Bericht*</label>
            <textarea
              name="message"
              value={bericht}
              onChange={(e) => setBericht(e.target.value)}
            />
            <div id={buttonclass.send} onClick={(e) => sendEmail(e)}>
              VERTSUUR
            </div>
          </form>
        </div>
        <div className={classes.half} style={{ borderRadius: "20%" }}>
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.5103538326675!2d4.900329009358787!3d52.37700854539001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609b7648f168f%3A0x28c2494c1bc8baa1!2sCentral%20Station!5e0!3m2!1snl!2snl!4v1659565239553!5m2!1snl!2snl"
            width="600"
            height="450"
            style={{ border: 0, borderRadius: "20px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
