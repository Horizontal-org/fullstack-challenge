import { useState, useEffect } from "react";
import { Search, Button, SearchResults, Downloads } from "../src/components";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloads, setDownloads] = useState(false);

  async function handleSearch() {
    setLoading(true);
    const response = await fetch(
      `https://images-api.nasa.gov/search?q=${query}&media_type=image`
    );
    const data = await response.json();
    setImages(data.collection.items.slice(0, 25));
    setQuery("");
    setDownloads(false);
    setLoading(false);
  }

  async function handleDownloads() {
    setLoading(true);
    const response = await fetch(`http://localhost:9000/file`);
    const data = await response.json();
    setDownloads(true);
    setImages(data.slice(0, 25));
    setLoading(false);
  }

  async function handleSaveImage(image) {
    try {
      const response = await fetch(
        `http://localhost:9000/file/save?image=${image}`
      );
      if (response.status === 200) {
        const data = await response.json();
        const { imageURL } = data;
        const res = await fetch(`http://localhost:9000/file`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: imageURL }),
        });
        return res;
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setLoading(true);
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
            <span>Search</span>
          </Button>
        </div>
      </div>
      {downloads ? (
        <button
          className="text-[14px] mt-2 hover:underline hover:text-gray-600"
          onClick={handleSearch}
        >
          Search Results
        </button>
      ) : (
        <button
          className="text-[14px] mt-2 hover:underline hover:text-gray-600"
          onClick={handleDownloads}
        >
          See Downloads
        </button>
      )}
      <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" className="sr-only">
          Recently viewed
        </h2>
        {downloads ? (
          <>
            {loading ? <span>Loading...</span> : <Downloads images={images} />}
          </>
        ) : (
          <>
            {loading ? (
              <span>Loading...</span>
            ) : (
              <>
                {images.length ? (
                  <SearchResults images={images} saveImage={handleSaveImage} />
                ) : (
                  <p className="text-[14px]">
                    Oops NASA no such images at the moment.
                  </p>
                )}
              </>
            )}
          </>
        )}
      </section>
    </div>
  );
}

export default App;
