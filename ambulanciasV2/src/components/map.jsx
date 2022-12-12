import { GoogleMap, LoadScript } from '@react-google-maps/api';

function Map() {
    const mapStyles = {        
        margin: "0",
        height: "100%",
        width: "100%",
        borderRadius: "0"
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