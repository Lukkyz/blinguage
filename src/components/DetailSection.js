import React from "react";
import Detail from "./Detail";
export default function DetailSection() {
  return (
    <div className="details">
      <Detail imgLink={process.env.PUBLIC_URL + "/book.png"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
        hendrerit neque. Quisque sed tellus a nisl dignissim blandit sed non
        sapien.
      </Detail>
      <Detail imgLink={process.env.PUBLIC_URL + "/headset.png"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
        hendrerit neque. Quisque sed tellus a nisl dignissim blandit sed non
        sapien.
      </Detail>
      <Detail imgLink={process.env.PUBLIC_URL + "/loop.png"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
        hendrerit neque. Quisque sed tellus a nisl dignissim blandit sed non
        sapien.
      </Detail>
    </div>
  );
}
