import { useRouter } from "next/navigation";
import React from "react";
import LanguageChoose from "@/components/LanguageChoose";

export default function Index() {
  const router = useRouter();

  const handelOnListenButtonClick = () => {
    router.push("/dashboard/learn");
  };

  return (
    <>
      <LanguageChoose />
      <div className="flex justify-center">
        <button
          aria-label="Choose"
          type="button"
          onClick={handelOnListenButtonClick}
          className="bg-blue-500 m-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Choose
        </button>
      </div>
    </>
  );
}
