import { TFacility } from "@/types/TFacility";

// search facilities function with price range filter
export const searchFacilities = (
  facilities: TFacility[],
  query: string,
  minPrice: number = 0,
  maxPrice: number = Infinity || Infinity
): TFacility[] => {
  // Normalize the search query
  const normalCaseQuery = query.toLowerCase();

  // Filter facilities
  return facilities?.filter(
    (facility) =>
      facility.isDeleted === false &&
      (facility.name.toLowerCase().includes(normalCaseQuery) ||
        facility.location.toLowerCase().includes(normalCaseQuery)) &&
      facility.pricePerHour >= minPrice &&
      facility.pricePerHour <= maxPrice
  );
};
