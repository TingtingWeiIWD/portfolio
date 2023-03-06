import "./style.scss";

import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  return (
    <div className="cursor">
      <AnimatedCursor
        innerSize={10}
        outerSize={0}
        color="246, 122, 0"
        outerAlpha={0.8}
        innerScale={0.7}
        outerScale={0}
        outerStyle={{
          //boxShadow: "1px 3px 1px #9E9E9E",
          boxShadow: "0 0 40px 20px #f66500",
          border: "none",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  );
}
