import React , {useState} from 'react';
//import Routing from "../src/reactLeafletRoutingMachine.jsx";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
export default function MapView(){
    
    const dataPoints = [
        [ 45.383321536272049,-75.3372987731628],
        [ 45.467134581917357,-75.546518086577947],
        [ 45.295014379864874,-75.898610599532319],
        [ 45.23032561834377,-75.468561642270757],
        [ 45.260659774950561,-75.926651366520872],
        [ 45.345566668964558,-75.760933332842754],
        [ 45.280622216516925,-75.760235255689508],
        [ 45.147641950106689,-75.60118478829267],
        [ 45.408488357092367,-75.703622500360268],
        [ 45.314086718258636,-75.609516309730921]
    ]
    const position = [51.505, -0.09]
    let [refMap , setRefMap] = useState(null);
    const saveMap = (map)=>{
        setRefMap(map)
    }
    return(
        <div className="mapHolder">
            <Map center={[45.4, -75.7]} zoom={11} ref={saveMap}>
                <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            { dataPoints.map((data , index)=>{
                console.log(data)
                return(
                <Marker key={index} position={data}>
                <Popup>
                    Sample Popup
                </Popup>
                </Marker>  
            )
            })}
            </Map>
        </div>
    )
}