import { useState, useEffect } from "react";
import { Search, Button, ImageCard } from "../src/components";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    setLoading(true);
    const response = await fetch(
      `https://images-api.nasa.gov/search?q=${query}&media_type=image`
    );
    const data = await response.json();
    setImages(data.collection.items.slice(0, 25));
    setQuery("");
    setLoading(false);
  }

  useEffect(() => {
    async function fetchNasaImages() {
      const response = await fetch(
        `https://images-api.nasa.gov/search?q=space&description=moon&media_type=image`
      );
      const data = await response.json();
      setImages(data.collection.items.slice(0, 25));
    }
    setLoading(true);
    fetchNasaImages();
    setLoading(false);
  }, []);

  return (
    <div className="mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-60">
      <h2 className="text-2xl font-bold mb-4">NASA Image Search</h2>
      <div className="lg:flex">
        <div className="w-full lg:w-9/12">
          <Search
            query={query}
            onQueryChange={(searchQuery) => setQuery(searchQuery)}
          />
        </div>
        <div className="w-full mt-2 lg:w-3/12 lg:ml-4 lg:mt-0">
          <Button onClick={handleSearch}>
            {loading ? <span>Loading...</span> : <span>Search</span>}
          </Button>
        </div>
      </div>
      <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" className="sr-only">
          Recently viewed
        </h2>
        {loading ? (
          <span>Loading...</span>
        ) : (
          <>
            {images.length ? (
              <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {images.map((image) => (
                  <li key={image.links[0].href} className="relative w-44 h-36">
                    <ImageCard imageName={image.links[0].href} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[14px]">
                Oops NASA no such images at the moment.
              </p>
            )}
          </>
        )}
      </section>
    </div>
  );
}

export default App;
