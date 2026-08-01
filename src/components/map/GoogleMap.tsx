import {
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

type Props = {
  center: google.maps.LatLngLiteral;
  marker?: google.maps.LatLngLiteral;
  zoom?: number;
  onLoad?: (map: google.maps.Map) => void;
};

const containerStyle = {
  width: "100%",
  height: "100%",
};

const mapOptions: google.maps.MapOptions = {
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  clickableIcons: false,
  gestureHandling: "greedy",
};

const libraries: ("places")[] = ["places"];

function GoogleMapComponent({
  center,
  marker,
  zoom = 15,
  onLoad,
}: Props) {

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (!isLoaded) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 600,
        }}
      >
        Carregando mapa...
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      options={mapOptions}
      onLoad={onLoad}
    >
      {marker && <Marker position={marker} />}
    </GoogleMap>
  );
}

export default GoogleMapComponent;