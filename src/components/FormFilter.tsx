import Input from "./Input";
import PrimaryButton from "./PrimaryButton";

export default function FormFilter() {
  return (
    <div className="m-4">
      <h1 className="text-2xl uppercase mb-6">Filter SpaceX</h1>
      <form className=" grid grid-cols-2 gap-4 rounded-md bg-white p-6">
        <Input type="text" placeholder="Filter 1" />
        <Input type="text" placeholder="Filter 1" />
        <Input type="text" placeholder="Filter 1" />
        <PrimaryButton type="submit">Search</PrimaryButton>
      </form>
    </div>
  );
}
