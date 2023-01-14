import Input from "./Input";
import PrimaryButton from "./PrimaryButton";

interface FormFilterProps {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSearch?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function FormFilter({
  value,
  onChange,
  onSearch,
}: FormFilterProps) {
  return (
    <div className="m-4">
      <h1 className="text-2xl uppercase mb-6">Search SpaceX</h1>
      <div className="flex">
        <Input
          type="text"
          placeholder="Search By Name"
          value={value}
          onChange={onChange}
        />
        <PrimaryButton type="submit" className="ml-5" onClick={onSearch}>
          Search
        </PrimaryButton>
      </div>
    </div>
  );
}
