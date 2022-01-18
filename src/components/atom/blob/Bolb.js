import { useEffect, useState } from "react";
import blobshape from "./blobshape";

const randomRange = (max, min = 0) =>
  Math.trunc(Math.random() * (max - min) + min);

const Blob = ({
  growth,
  edges,
  boxSize,
  size,
  onMount,
  fill,
  stroke,
  strokeWidth = 0,
  style,
  ...props
}) => {
  const [path, setPath] = useState("M0 0");
  const [seedValue, setSeedValue] = useState();
  useEffect(() => {
    const seed = randomRange(65535);
    const { path, seedValue } = blobshape({
      growth,
      edges,
      size,
      seed,
    });
    setPath(path);
    setSeedValue(seedValue);
    typeof onMount === "function" && onMount({ seedValue });
  }, [growth, edges, size, setPath, setSeedValue, onMount, randomRange]);
  return (
    <g
      transform={`translate(${(boxSize - size) / 2}, ${
        (boxSize - size) / 2
      }) scale(${size / boxSize} ${size / boxSize})`}
    >
      <path
        id={`seed-${seedValue}`}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d={`${path}`}
        style={style}
        {...props}
      />
    </g>
  );
};

export default Blob;
