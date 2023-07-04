import "./Home.scss";
import React from "react";
import Header from "components/Header/Header";
import FeatureCard from "components/FeatureCard/FeatureCard";
import { IFeatureCardProps } from "components/FeatureCard/FeatureCard";
import DocumentVerifiedIcon from "assets/icons/documentVerified.svg";
import FacialVerifIcon from "assets/icons/facialVerfication.svg";
import FirstFeatureCardBg from "assets/icons/first-draw-vector.svg";
import SecondFeatureCardBg from "assets/icons/second-draw-vector.svg";

function Home() {
  const FeatureCardItems: IFeatureCardProps[] = [
    {
      title: (
        <p>
          Acompanhantes com <strong>documentos verificados</strong>
        </p>
      ),
      icon: DocumentVerifiedIcon,
      description: (
        <p>
          <strong>Todo profissional</strong> passa por uma verificação de seus
          documentos
        </p>
      ),
      bgImage: FirstFeatureCardBg,
    },
    {
      title: (
        <p>
          Verificação <strong>facial</strong>
        </p>
      ),
      icon: FacialVerifIcon,
      description: (
        <p>
          O Rosto precisa ser <strong>sempre igual</strong> ao do documento
          registrado.
        </p>
      ),
      bgImage: SecondFeatureCardBg,
    },
    {
      title: (
        <p>
          Acompanhantes com <strong>documentos verificados</strong>
        </p>
      ),
      icon: DocumentVerifiedIcon,
      description: (
        <p>
          <strong>Todo profissional</strong> passa por uma verificação de seus
          documentos
        </p>
      ),
      bgImage: FirstFeatureCardBg,
    },
    {
      title: (
        <p>
          Acompanhantes com <strong>documentos verificados</strong>
        </p>
      ),
      icon: DocumentVerifiedIcon,
      description: (
        <p>
          <strong>Todo profissional</strong> passa por uma verificação de seus
          documentos
        </p>
      ),
      bgImage: FirstFeatureCardBg,
    },
  ];

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
            {FeatureCardItems.map((featureCard) => (
              <FeatureCard {...featureCard} />
            ))}
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Home;
