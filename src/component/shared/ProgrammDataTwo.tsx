"use client";
import Image from "next/image";
import Ai from "@/assets/image/image4.jpg"; // Ensure this path is correct

// Define the types for the props
interface ProgrammDataTwoProps {
  selectItems: string; // Type for selectItems (slug of the selected item)
  setSelectedItems: (slug: string) => void; // Type for setSelectedItems function
}

const ProgrammDataTwo: React.FC<ProgrammDataTwoProps> = ({
  selectItems,
  setSelectedItems
}) => {
  const programmData = [
    {
      slug: "wmd",
      header: "Web 3.0 (Blockchain) and Metaverse Specialization",
      description:
        "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
      image: Ai,
      quarter: [
        {
          header: "Quarter IV",
          description:
            "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
          number: 4
        },
        {
          header: "Quarter V",
          description: "AI-361: Deep Learning and MLOps",
          number: 5
        }
      ]
    },
    {
      slug: "ai",
      header: "Artificial Intelligence (AI) and Deep Learning Specialization",
      description:
        "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
      image: Ai,
      quarter: [
        {
          header: "Quarter IV",
          description:
            "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
          number: 4
        },
        {
          header: "Quarter V",
          description: "AI-361: Deep Learning and MLOps",
          number: 5
        }
      ]
    }
  ];

  // Find the selected item data based on selectItems
  const selectedItemData = programmData.find(
    (item) => item.slug === selectItems
  );

  console.log(selectedItemData); // Optional: You can remove this in production
  console.log(selectItems); // Optional: You can remove this in production

  return (
    <div>
      {programmData.map((item) => (
        <div
          key={item.slug}
          className="flex items-center cursor-pointer gap-x-4"
          onClick={() => setSelectedItems(item.slug)} // Call the prop function on click
        >
          <div className="flex-shrink-0 h-24 w-36">
            <Image
              src={item.image} // Use item.image to show the correct image
              alt={item.header}
              className="object-cover h-24 rounded-md"
            />
          </div>
          <div>
            <h4 className="font-medium text-primary">Specialized Track</h4>
            <h3 className="text-xl font-semibold leading-tight">
              {item.header}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgrammDataTwo;
