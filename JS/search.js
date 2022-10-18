import React from "react";
import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a Book Name..." data={BookData} />
    </div>
  );
}

export default App;

const searchInput = document.querySelector("[data-search]")

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    console.log(value)
})


