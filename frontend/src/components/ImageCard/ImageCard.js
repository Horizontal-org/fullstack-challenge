export default function ImageCard({ imageName }) {
  return (
    <div className="group block w-full h-full rounded-lg bg-gray-100 overflow-hidden">
      <img
        src={imageName}
        alt={imageName}
        className="object-cover w-full h-full group-hover:opacity-75 cursor-pointer"
        load="lazy"
      />
    </div>
  );
}
