import React from "react";

export default function Detail({ imgLink, children }) {
  return (
    <div className="detail">
      <img src={imgLink} alt="abc" className="detail-img" />
      <p>{children}</p>
    </div>
  );
}
