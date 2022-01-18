import { useRef, useState } from "react";

const TextTitle = ({
  size,
  fill,
  stroke,
  strokeWidth = 0,
  children,
  style,
}) => {
  const ref = useRef(null);
  const [bounds, setBounds] = useState(null);
  const handleRef = (ref, setter, state) => (node) => {
    ref.current = node;
    if (typeof node?.getBBox === "function") {
      const bounds = node.getBBox();
      if (bounds.height !== 0 && bounds.width !== 0 && !state) {
        setter(node.getBBox());
      }
    }
  };
  return (
    <text
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      x={size / 2}
      y={size / 2}
      style={style}
      ref={handleRef(ref, setBounds, bounds)}
    >
      {children}
    </text>
  );
};

export default TextTitle;
