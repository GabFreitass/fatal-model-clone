import "./Home.scss";
import React from "react";
import Header from "components/Header/Header";
import DocumentVerifiedIcon from "assets/icons/documentVerified.svg";
import FacialVerifIcon from "assets/icons/facialVerfication.svg";
import MediaCompIcon from "assets/icons/mediaComparation.svg";
import BlogIcon from "assets/icons/blogLogo.svg";
import { BiRightArrowAlt } from "react-icons/bi";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <section className="home-section-1">
          <div className="main-text">
            <h1 className="main-text-title">
              Encontre acompanhantes no{" "}
              <span id="fatal-model">Fatal Model</span>
            </h1>
            <p className="main-text-subtitle">
              A MAIOR PLATAFORMA DE ACOMPANHANTES DO BRASIL
            </p>
          </div>
          <div className="feature-cards">
            <div className="feature-card">
              <img src={DocumentVerifiedIcon} alt="documentos verificados" />
              <p className="feature-card-title">
                Acompanhantes com <strong>documentos verificados</strong>
              </p>
              <BiRightArrowAlt size={30} />
            </div>
            <div className="feature-card">
              <img src={FacialVerifIcon} alt="documentos verificados" />
              <p className="feature-card-title">
                Verificação <strong>facial</strong>
              </p>
              <BiRightArrowAlt size={30} />
            </div>
            <div className="feature-card">
              <img src={MediaCompIcon} alt="documentos verificados" />
              <p className="feature-card-title">
                Mídia de
                <br />
                <strong>comparação 360°</strong>
              </p>
              <BiRightArrowAlt size={30} />
            </div>
            <div className="feature-card">
              <img src={BlogIcon} alt="documentos verificados" />
              <p className="feature-card-title">
                Acesse nosso Blog
                <br /> e <u>saiba mais</u>
              </p>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Home;
