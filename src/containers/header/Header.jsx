import React from 'react'
import "./header.css"
import Port from "../../assets/Port.JPG"

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>

        <h1 className='gradient__text'>Tattoo and art desing</h1>
        <p>Anzelikan valmistuttua rakennusmaalariksi, hän päätti jatkaa opiskelua automaalariksi ja valmistuikin lisäksi erikoismaalauksenosaajaksi. Perheen, opiskelun ja työn ohessa hän on kerennyt toteuttamaan itseään lisää kursseja käymällä, kynäruiskumaalauksia tehden ja työnäytöksiä antamalla. Moni on saattanut hänet nähdä jo vuosia sitten eri tapahtumissa, kuten moottoripyörämessuilla tai kokoontumisajoissa, joista Linna cruising lähimpiä paikallisia. Ensimmäinen erikoismaalaus toteutui 2006, siitä lähtien maalauksia on syntynyt tähän päivään asti. Vuonna 2012 kuvioon astuivat tatuoinnit.
Päivätyön ohessa tatuointisuunnittelut toiveiden mukaisesti luonnistuvat ja toteutuvat Hämeenlinnassa.
Lempitöikseen hän mainitsee realistiset muotokuvamaalaukset valokuvasta, sekä kaikenlaiset tatuointityylit.</p>
        
        <div className='gpt3__header-content__people'>
          <p>Varaa aika!</p>
      </div>
      <a className='email-link' href="mailto:dummytext@gmail.com?">Ota yhteyttä!</a>
    </div> 
  <div className='gpt3__header-image'>
    <img src={Port} alt="Port"/>
    </div>
</div>
  )
}

export default Header