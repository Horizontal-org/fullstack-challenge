import { FolderArrowDownIcon } from "@heroicons/react/20/solid";

export default function ImageCard({ imageName }) {
  return (
    <div className="group block w-full h-full rounded-lg bg-gray-100 overflow-hidden">
      <div className="absolute z-10 bottom-2 right-2 flex items-center">
        <FolderArrowDownIcon
            className="h-6 w-6 text-gray-200 cursor-pointer hover:text-white"
            aria-hidden="true"
          />
      </div>
      <img
        src={imageName}
        alt={imageName}
        className="object-cover w-full h-full group-hover:opacity-75 cursor-pointer"
        load="lazy"
      />
    </div>
  );
}
