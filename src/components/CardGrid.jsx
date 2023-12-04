import React from "react";
import Image from "next/image";
import * as set1 from "@/data/set1.json";
import useApp from "@/hooks/useApp";

function CardGrid({ handleOnImageClick }) {
  const { words } = useApp();

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
        {words &&
          words.map((name, index) => (
            <div
              key={name}
              className="w-full h-auto bg-white rounded overflow-hidden shadow-lg"
            >
              <Image
                src={`/img/${set1.en[index]}.png`}
                width="320"
                height="380"
                layout="responsive"
                alt={name}
                onClick={() => {
                  handleOnImageClick(name);
                }}
                className="object-cover object-center w-full h-full"
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default CardGrid;
