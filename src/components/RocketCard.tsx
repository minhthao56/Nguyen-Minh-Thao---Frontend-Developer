interface RocketCardProps {
  image?: string;
  description?: string;
  name?: string;
  country?: string;
}

export default function RocketCard({
  image,
  description,
  name,
  country,
}: RocketCardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full  h-72" src={image} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base line-clamp-2">{description}</p>
      </div>
      <div className="px-6 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {country}
        </span>
      </div>
    </div>
  );
}
