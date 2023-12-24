export const filterReducer = (filterState, { type, payload }) => {
  switch (type) {
    case "SEARCH_PRODUCTS":
      return {
        ...filterState,
        search: payload,
      };
    case "FILTER_BEDS":
      return {
        ...filterState,
        beds: payload,
        filteredArray: filterState.filteredArray.includes("Bed")
          ? filterState.filteredArray.filter((value) => value !== "Bed")
          : [...filterState.filteredArray, "Bed"],
      };

    case "FILTER_DRESSING_TABLES":
      return {
        ...filterState,
        dressingTables: payload,
        filteredArray: filterState.filteredArray.includes("Dressing Table")
          ? filterState.filteredArray.filter(
              (item) => item !== "Dressing Table"
            )
          : [...filterState.filteredArray, "Dressing Table"],
      };
    case "FILTER_SOFAS":
      return {
        ...filterState,
        sofa: payload,
        filteredArray: filterState.filteredArray.includes("Sofa")
          ? filterState.filteredArray.filter((item) => item !== "Sofa")
          : [...filterState.filteredArray, "Sofa"],
      };

    case "FILTER_LUXURY_SET":
      return {
        ...filterState,
        luxurySets: payload,
        filteredArray: filterState.filteredArray.includes("Luxury set")
          ? filterState.filteredArray.filter((item) => item !== "Luxury set")
          : [...filterState.filteredArray, "Luxury set"],
      };
    case "FILTER_CATEGORY":
      return {
        ...filterState,
      };
    case "SORT_BY_PRICE":
      return {
        ...filterState,
        sort: payload,
      };
    case "RATINGS":
      return {
        ...filterState,
        rating: payload,
      };
    case "PRICE_RANGE":
      return {
        ...filterState,
        priceRange: payload,
      };
    case "RESET_ALL_FILTER":
      return {
        filteredArray: [],
        sort: null,
        search: "",
        rating: "",
        sofa: false,
        beds: false,
        luxurySets: false,
        dressingTables: false,
        priceRange: 1200,
      };

    default:
      throw new Error(`invelid type ${type} check-> filterReducer`);
  }
};
