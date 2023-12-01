import CardGrid from "@/components/CardGrid";

export default function Learning() {
  const names = ["pig", "cow", "chicken", "sheep", "horse"];
  return (
    <div>
      <h1 className="text-4xl text-center">Welcome to my farm!</h1>
      <CardGrid names={names} />
    </div>
  );
}
