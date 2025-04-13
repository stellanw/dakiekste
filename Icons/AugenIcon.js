export default function AugenIcon({ color, width, height }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="20 20 60 60" width={width} height={height}>
      <g transform="translate(0.4, 3.3)">
        <path
          d="M56.8,53.74c-3.35,3.91-9.26,4.36-13.16,1.01s-4.36-9.26-1.01-13.16,9.26-4.36,13.16-1.01c3.91,3.35,4.36,9.26,1.01,13.16ZM44.45,43.15c-2.49,2.9-2.15,7.29.75,9.78s7.29,2.15,9.78-.75,2.15-7.29-.75-9.78-7.29-2.15-9.78.75Z"
          fill={color}
        />
        <circle cx="52.11" cy="49.7" r="4.75" fill={color} />
      </g>
    </svg>
  );
}
