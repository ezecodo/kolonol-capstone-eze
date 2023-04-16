import React from "react";

const EmbassyWebsite = ({ url }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        src={url}
        title="Embassy Website"
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
};

export default EmbassyWebsite;
