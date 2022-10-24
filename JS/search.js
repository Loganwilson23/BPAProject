function App() {

}

export default App;

const searchInput = document.querySelector("[data-search]")

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    console.log(value)
})


