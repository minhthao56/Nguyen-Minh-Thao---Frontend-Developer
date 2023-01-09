export default function FormFilter() {
  return (
    <div className="m-4">
      <h1 className="text-2xl uppercase mb-6">Filter SpaceX</h1>
      <form className=" grid grid-cols-2 gap-4 rounded-md bg-white p-6">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Filter 1"
        />
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Filter 1"
        />
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Filter 1"
        />
        <button
          type="submit"
          className="text-white bg-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center"
        >
          Search
        </button>
      </form>
    </div>
  );
}
