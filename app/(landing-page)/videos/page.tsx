import React from "react";
import OptimizedVideo from "../homepage/components/OptimizedVideo";

export default function VideoPage() {
  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <OptimizedVideo src={"/video.mp4"} />
    </div>
  );
}
