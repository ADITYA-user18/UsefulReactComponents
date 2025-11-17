import React, { useRef } from "react";

const TiltedCard = ({
  children,
  containerHeight = "360px",
  containerWidth = "360px",
  rotateAmplitude = 15,
  scaleOnHover = 1.08,
}) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left; // cursor x inside card
    const y = e.clientY - rect.top; // cursor y inside card

    const rotateX = ((y - rect.height / 2) / rect.height) * rotateAmplitude;
    const rotateY = ((x - rect.width / 2) / rect.width) * -rotateAmplitude;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(${scaleOnHover})
    `;
  };

  const resetTilt = () => {
    const card = cardRef.current;
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      className="transition-transform duration-200 ease-out rounded-3xl shadow-2xl overflow-hidden"
      style={{
        height: containerHeight,
        width: containerWidth,
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(8px)",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      {children}
    </div>
  );
};

export default TiltedCard;
