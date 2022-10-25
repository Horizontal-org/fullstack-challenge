import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Search({ query, onQueryChange }) {
  return (
    <div>
      <div className="relative rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="search"
          name="search"
          id="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Search images from NASA..."
        />
      </div>
    </div>
  );
}
