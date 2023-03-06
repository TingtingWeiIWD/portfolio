import "./style.scss";

export default function Blob() {
  return (
    <span className="blobContainer">
      <span className="blob">
        <svg
          viewBox="0 0 500 500"
          // xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          width="100%"
          // id="blobSvg"
        >
          <defs>
            <filter id="glow" x="-20" y="-20" height="100" width="100">
              <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
            </filter>
          </defs>
          <path
            // id="blob"
            fill="rgba(13, 135, 148,0.3)"
            filter="url(#glow)"
            d="M459.5,325.5Q430,401,361,445.5Q292,490,223.5,452.5Q155,415,97,371Q39,327,54.5,256Q70,185,105,122.5Q140,60,215.5,37.5Q291,15,336,77.5Q381,140,435,195Q489,250,459.5,325.5Z;"
          ></path>
        </svg>
      </span>
    </span>
  );
}
