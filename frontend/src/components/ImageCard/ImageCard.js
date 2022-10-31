import { useState } from "react";
import { FolderArrowDownIcon } from "@heroicons/react/20/solid";
import classNames from "../../utils/classnames";

export default function ImageCard({
  index,
  imageName,
  showDownloadIcon = true,
  saveImage,
}) {
  const [selectedImage, setSelectedImage] = useState(false);

  async function handleSaveImage(index, image) {
    if (index) {
      setSelectedImage(true);
      await saveImage(image);
      setTimeout(() => {
        setSelectedImage(false);
      }, 3000);
    }
  }

  return (
    <div className="group block w-full h-full rounded-lg bg-gray-100 overflow-hidden">
      {showDownloadIcon && (
        <button
          className={classNames(
            "absolute z-10 bottom-2 right-2 flex items-center transition duration-300 ease-in-out transform",
            selectedImage ? "animate-pulse" : "animate-none"
          )}
          onClick={() => handleSaveImage(index, imageName)}
        >
          <FolderArrowDownIcon
            className={classNames(
              "h-6 w-6 cursor-pointer text-blue-300 hover:text-blue-500"
            )}
            aria-hidden="true"
          />
        </button>
      )}
      <img
        src={imageName}
        alt={imageName}
        className="object-cover w-full h-full group-hover:opacity-80 cursor-pointer"
        load="lazy"
      />
    </div>
  );
}
