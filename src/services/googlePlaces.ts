export interface PlaceResult {
  id: string;
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
}


export function searchCourt(
  query: string,
  map: google.maps.Map
): Promise<PlaceResult[]> {

  return new Promise((resolve) => {

    const service = new google.maps.places.PlacesService(map);


    const request: google.maps.places.TextSearchRequest = {
      query: `${query} quadra esportiva`,
    };


    service.textSearch(request, (results, status) => {


      if (
        status !== google.maps.places.PlacesServiceStatus.OK ||
        !results
      ) {
        resolve([]);
        return;
      }


      const places: PlaceResult[] = results.map((place) => ({
        id: place.place_id ?? crypto.randomUUID(),

        name: place.name ?? "Local sem nome",

        address:
          place.formatted_address ??
          "Endereço não informado",

        location: {
          lat: place.geometry?.location?.lat() ?? 0,
          lng: place.geometry?.location?.lng() ?? 0,
        },
      }));


      resolve(places);

    });

  });

}