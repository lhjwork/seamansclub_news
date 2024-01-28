import React from "react";
import Accordion from "../../components/frameLayouts/accordicons/Accordion";

interface AppProps {}

const Home: React.FC<AppProps> = () => {
  const items = [
    {
      title: "Section 1",
      content: "Content for Section 1",
    },
    {
      title: "Section 2",
      content: "Content for Section 2",
    },
    {
      title: "Section 3",
      content: "Content for Section 3",
    },
  ];

  return (
    <div className="max-w-md mx-auto">
      <Accordion items={items} />
    </div>
  );
};

export default Home;
