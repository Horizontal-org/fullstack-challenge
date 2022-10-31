import ImageCard from "../ImageCard/ImageCard";

export default function Downloads({ images, saveImage }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {images.map((image, index) => (
        <li key={image.links[0].href} className="relative w-44 h-36">
          <ImageCard
            index={index}
            imageName={image.links[0].href}
            saveImage={saveImage}
          />
        </li>
      ))}
    </ul>
  );
}
