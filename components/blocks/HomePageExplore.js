import React from "react";

const ExploreCard = ({ item: { name, icon, description } }) => {
  return (
    <div className="hover:bg-white hover:shadow-sm rounded p-10 text-center space-y-2">
      <img src={icon} className="w-1/3 mx-auto" />
      <h2 className="text-lg uppercase font-semibold hover:text-blue-500 cursor-pointer">
        {name}
      </h2>
      <p>{description}</p>
    </div>
  );
};

const data = [
  {
    id: 1,
    name: "Find best College",
    icon: "icons/university.svg",
    description: "Learn about the best of bests in the country",
  },
  {
    id: 2,
    name: "Explore Exams",
    icon: "icons/exam.svg",
    description:
      "All information about the exams that will get you into your dream college.",
  },
  {
    id: 3,
    name: "Get latest news",
    icon: "icons/newspaper.svg",
    description:
      "Stay informed about the latest happenings to map your higher studies.",
  },
  {
    id: 4,
    name: "Top reviews",
    icon: "icons/review.svg",
    description:
      "Know what others have to say about the colleges you are searching.",
  },
  {
    id: 5,
    name: "Best Courses",
    icon: "icons/knowledge.svg",
    description:
      "Learn about various mix of courses offered across the country.",
  },
  {
    id: 6,
    name: "Get Admission",
    icon: "icons/mortarboard.svg",
    description:
      "Find information about the final steps to colleges and courses.",
  },
];

export default function HomePageExplore() {
  return (
    <div className="space-y-5 md:max-w-5xl mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-2xl md:text-3xl uppercase font-semibold">
          Explore almost everything
        </h2>
        <p>
          Vidyavas is an extensive search engine for the students, parents, and
          education industry players who are seeking information
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {data.map((item) => (
          <ExploreCard item={item} />
        ))}
      </div>
    </div>
  );
}
