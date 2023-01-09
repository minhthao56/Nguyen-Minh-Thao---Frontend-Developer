import Banner from "../components/Banner";
import RocketCard from "../components/RocketCard";

export default function HomePage() {
  return (
    <>
      <Banner />
      <div className="grid gap-4 p-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center">
        <RocketCard />
        <RocketCard />
        <RocketCard />
        <RocketCard />
      </div>
    </>
  );
}
