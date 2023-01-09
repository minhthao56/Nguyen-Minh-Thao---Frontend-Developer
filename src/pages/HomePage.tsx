import Banner from "../components/Banner";
import FormFilter from "../components/FormFilter";
import RocketCard from "../components/RocketCard";

export default function HomePage() {
  return (
    <>
      <Banner />
      <div className="max-w-screen-2xl m-auto">
        <FormFilter />
        <h1 className="text-2xl uppercase  m-4">List rockets</h1>
        <div className="grid gap-4 p-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center">
          <RocketCard />
          <RocketCard />
          <RocketCard />
          <RocketCard />
        </div>
      </div>
    </>
  );
}
