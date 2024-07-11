// src/Icon.tsx
import React from "react";

interface IconProps {
  imageUrl: string;
  size?: string;
  borderRadius?: string;
}

const Icon: React.FC<IconProps> = ({
  imageUrl,
  size = "50px",
  borderRadius = "50%",
}) => {
  const styles: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: borderRadius,
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return <div style={styles}></div>;
};

export default Icon;
