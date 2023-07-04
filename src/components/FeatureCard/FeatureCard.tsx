import "./FeatureCard.scss";
import { Card } from "antd";
import { useState } from "react";
import { HiArrowRight } from "react-icons/hi";

export interface IFeatureCardProps {
  title: React.ReactNode;
  icon: string;
  description: React.ReactNode;
  bgImage?: string;
}

function FeatureCard({ title, icon, description, bgImage }: IFeatureCardProps) {
  const [isRotated, setIsRotated] = useState<boolean>(false);
  const rotateCard = () => {
    setIsRotated(!isRotated);
  };

  return (
    <Card
      className="feature-card"
      style={{
        backgroundImage: `${!isRotated ? `url(${bgImage})` : "none"}`,
        transform: `${
          isRotated
            ? "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(-180deg)"
            : "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg)"
        }`,
      }}
      actions={[
        <HiArrowRight
          color="var(--secondary-color)"
          key="more"
          onClick={rotateCard}
          size={20}
        />,
      ]}
    >
      {!isRotated && <img src={icon} />}
      <div
        className="feature-card-content"
        style={
          isRotated
            ? {
                transform:
                  "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(-180deg)",
              }
            : {
                transform:
                  "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg)",
              }
        }
      >
        {!isRotated ? title : description}
      </div>
    </Card>
  );
}

export default FeatureCard;
