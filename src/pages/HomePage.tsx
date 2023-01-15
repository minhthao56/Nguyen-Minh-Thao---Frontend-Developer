import Banner from "../components/Banner";
import FormFilter from "../components/FormFilter";
import RocketCard from "../components/RocketCard";
import { useQuery } from "@tanstack/react-query";
import { apiRocket } from "../services/rocket";
import Loading from "../components/Loading";
import { useState } from "react";
import debounce from "lodash/debounce";
import { useWhoIAmContext } from "../contexts/WhoIAmContext";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const { email } = useWhoIAmContext();

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["rockets", search],
    queryFn: async () => {
      return await apiRocket.getRockets(search);
    },
    enabled: Boolean(localStorage.getItem("token")),
  });

  const onChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, 500);

  return (
    <>
      <Banner />
      {email ? (
        <div className="max-w-screen-2xl m-auto">
          <FormFilter
            onChange={onChange}
            onSearch={() => {
              refetch();
            }}
          />
          <h1 className="text-2xl uppercase  m-4">List rockets</h1>
          {isError && (
            <p className="text-red-800 text-center mb-4">
              {JSON.stringify(error instanceof Error ? error.message : error)}
            </p>
          )}
          {isLoading ? (
            <Loading />
          ) : (
            <div className="grid gap-4 p-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center">
              {data?.map((rocket, i) => {
                return (
                  <RocketCard
                    image={rocket?.flickr_images?.[0]}
                    description={rocket.description}
                    name={rocket.name}
                    country={rocket.country}
                    key={i}
                  />
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <p className="w-full text-center text-3xl py-24">
          Please{" "}
          <Link to={"/login"} className="text-blue-500 underline">
            Login
          </Link>{" "}
          or{" "}
          <Link to={"/register"} className="text-blue-600 underline">
            Sign In
          </Link>{" "}
          to see list rocket
        </p>
      )}
    </>
  );
}
