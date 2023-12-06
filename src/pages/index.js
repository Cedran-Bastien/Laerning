import { useRouter } from "next/navigation";
import React from "react";
import LanguageChoose from "@/components/LanguageChoose";
import useApp from "@/hooks/useApp";

export default function Index() {


  return (
    <>
      <LanguageChoose />

    </>
  );
}
