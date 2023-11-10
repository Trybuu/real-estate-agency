import './main.css'

const Search = () => {
  return (
    <div id="search">
      <div className="search-options">
        <select
          name="transactionType"
          id="transactionType"
          className="select-options"
        >
          <option value="rent">Rent</option>
          <option value="buy">Buy</option>
        </select>

        <select
          name="realEstateType"
          id="realEstateType"
          className="select-options"
        >
          <option value="flat">Flat</option>
          <option value="house">House</option>
        </select>
      </div>
      <div className="location-price">
        <input
          className="location-input"
          type="text"
          placeholder="Your desired location goes here"
        />
        <div className="price-control">
          {/* Price bar with controling value option here */}
        </div>
      </div>
      <div className="search-button-container">
        <button className="search-button">Search with Ai</button>
      </div>
    </div>
  )
}

export default Search
