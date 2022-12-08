import { GoogleMap, LoadScript } from '@react-google-maps/api';

function Map() {
    const mapStyles = {        
        margin: "2em",
        height: "80vh",
        width: "95%",
        borderRadius: "2em"
    };
    
    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }

    return <>
    <LoadScript
       googleMapsApiKey='AIzaSyC-M5uwjxfOmKFYXjwKVpxBdAsY3Bv1LbQ'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
    </>;
}

export default Map;