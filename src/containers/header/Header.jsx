import React from "react";
import "./header.css";
import Port from "../../assets/Port.JPG";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Tattoo and art design</h1>
        Tatuointien suunnittelu- sekä toteutustyöt Hämeenlinnassa
        Aulangontiellä.
        <p />
        <p>
          Toteutan myös kynäruiskulla erikoismaalauksia sekä muotokuvamaalauksia
          valokuvasta, valokuvan tarkkuudella.
        </p>
        <p>
          Tatuointi- ja maalausasioissa saat parhaiten kiinni sähköpostitse
          designanzelika@gmail.com
        </p>
        <p>
          tai puhelimitse/WhatsApp 044-5566970 Aulangontie 18 13210 Hämeenlinna
        </p>
        <div className="gpt3__header-content__people">
          <p></p>
        </div>
        <a className="email-link" href="mailto:dummytext@gmail.com?">
          Ota yhteyttä!
        </a>
      </div>
      <div className="gpt3__header-image">
        <img src={Port} alt="Port" />
      </div>
    </div>
  );
};

export default Header;
