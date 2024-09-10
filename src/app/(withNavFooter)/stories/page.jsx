import React from "react";
import RecentStories from "../../../components/SiteComponents/RecentStories";

export default function Stories() {
  return (
    <div>
      <RecentStories
        title="Published stories"
        description2="Discover a world of unforgettable experiences with Memorable Moments Magazine. Our stories capture the essence of life's most extraordinary moments, inspiring, touching, and delighting readers everywhere."
        showAll={true}
      />
    </div>
  );
}
