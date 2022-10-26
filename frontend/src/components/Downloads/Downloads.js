import ImageCard from "../ImageCard/ImageCard";

export default function SearchResults({ images }) {
  console.log("images", images);
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {images.map((image) => (
        <li key={image.id} className="relative w-44 h-36">
          <ImageCard imageName={image.name} showDownloadIcon={false} />
        </li>
      ))}
    </ul>
  );
}
