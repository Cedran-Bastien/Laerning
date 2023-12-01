import React from "react";
import Image from "next/image";

function CardGrid({ imgNames, names, handleOnImageClick }) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
        {names.map((name, index) => (
          <div
            key={name}
            className="w-full h-auto bg-white rounded overflow-hidden shadow-lg"
          >
            <Image
              src={`/img/${imgNames[index]}.png`}
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
