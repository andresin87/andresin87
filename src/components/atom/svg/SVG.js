const SVG = ({ children, size, ...props }) => (
  <svg viewBox={`0 0 ${size} ${size}`} {...props}>
    {children}
  </svg>
);

export default SVG;
