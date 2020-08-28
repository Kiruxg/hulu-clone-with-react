import React from "react";
import ContentLoader from "react-content-loader";

const imagePlaceholder = () => (
  <ContentLoader
    width={400}
    height={300}
    viewBox="0 0 400 300"
    backgroundColor="#333"
    foregroundColor="#999"
  >
    <rect x="0" y="0" rx="3" ry="3" width="400" height="300" />
  </ContentLoader>
);

export default imagePlaceholder;
