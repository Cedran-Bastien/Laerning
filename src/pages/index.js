import { useRouter } from "next/navigation";

export default function Index() {
  const router = useRouter();

  router.push("/learn");

  return <></>;
}