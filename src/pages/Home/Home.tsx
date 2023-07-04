import "./Home.scss";
import React, { useState } from "react";
import Header from "components/Header/Header";
import DocumentVerifiedIcon from "assets/icons/documentVerified.svg";
import FacialVerifIcon from "assets/icons/facialVerfication.svg";
import MediaCompIcon from "assets/icons/mediaComparation.svg";
import BlogIcon from "assets/icons/blogLogo.svg";
import { BiRightArrowAlt } from "react-icons/bi";
import { Input } from "antd";

function Home() {
  const [rotatedCards, setRotatedCards] = useState<number[]>([]);
  const rotateFeatureCard = (cardId: number) => {
    const index = rotatedCards.indexOf(cardId);
    if (index === -1) {
      setRotatedCards([...rotatedCards, cardId]);
    } else {
      const newArray = rotatedCards.slice();
      newArray.splice(index, 1);
      setRotatedCards(newArray);
    }
  };

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
            <div
              className={`feature-card ${
                rotatedCards.includes(1) ? "rotated" : ""
              }`}
            >
              <img src={DocumentVerifiedIcon} alt="documentos verificados" />
              <p className="feature-card-title">
                Acompanhantes com <strong>documentos verificados</strong>
              </p>
              <p className="feature-card-description">
                <strong>Todo profissional</strong> passa por uma verificação de
                seus documentos
              </p>
              <BiRightArrowAlt size={30} onClick={() => rotateFeatureCard(1)} />
            </div>
            <div
              className={`feature-card ${
                rotatedCards.includes(2) ? "rotated" : ""
              }`}
            >
              <img src={FacialVerifIcon} alt="documentos verificados" />
              <p className="feature-card-title">
                Verificação <strong>facial</strong>
              </p>
              <p className="feature-card-description">
                O Rosto precisa ser <strong>sempre igual</strong> ao do
                documento registrado.
              </p>
              <BiRightArrowAlt size={30} onClick={() => rotateFeatureCard(2)} />
            </div>
            <div
              className={`feature-card ${
                rotatedCards.includes(3) ? "rotated" : ""
              }`}
            >
              <img src={MediaCompIcon} alt="documentos verificados" />
              <p className="feature-card-title">
                Mídia de
                <br />
                <strong>comparação 360°</strong>
              </p>
              <p className="feature-card-description">
                Vídeo verificado com corpo e rosto. Precisa{" "}
                <strong>ser o mesmo</strong> do documento registrado.
              </p>
              <BiRightArrowAlt size={30} onClick={() => rotateFeatureCard(3)} />
            </div>
            <div className="feature-card">
              <img src={BlogIcon} alt="documentos verificados" />
              <p className="feature-card-title">
                Acesse nosso Blog
                <br /> e{" "}
                <a href="#">
                  <u>saiba mais</u>
                </a>
              </p>
            </div>
          </div>
        </section>
        <section className="home-section-2">
          <Input.Search
            placeholder="Selecionar cidade"
            enterButton
          />
        </section>
      </main>
    </React.Fragment>
  );
}

export default Home;
