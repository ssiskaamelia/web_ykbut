import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

export default function Maps(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAugmzIXNxLkMEtz1inSgWV1aFfJiYMsjY",
  });
  if (!isLoaded) return <p>Loading...</p>;
  return (
    <div className="App">
      <GoogleMap
        zoom={15}
        center={{ lat: -6.186705274242954, lng: 106.93027984944642 }}
        mapContainerStyle={{ width: "500px", height: "500px" }}
      >
        <Marker
          position={{ lat: -6.186705274242954, lng: 106.93027984944642 }}
        />
      </GoogleMap>
    </div>
  );
}
