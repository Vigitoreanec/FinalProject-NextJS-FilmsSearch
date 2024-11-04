import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader 
    speed={4}
    width={400}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#bfbfbb"
    {...props}
  >
    <circle cx="578" cy="535" r="15" /> 
    <rect x="521" y="524" rx="2" ry="2" width="140" height="10" /> 
    <rect x="565" y="523" rx="2" ry="2" width="140" height="10" /> 
    <rect x="551" y="527" rx="0" ry="0" width="48" height="14" /> 
    <rect x="221" y="74" rx="0" ry="0" width="2" height="0" /> 
    <rect x="2" y="25" rx="10" ry="10" width="400" height="300" />
  </ContentLoader>
)

export default Skeleton