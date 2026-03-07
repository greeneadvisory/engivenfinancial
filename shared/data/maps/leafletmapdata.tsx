import React, { Fragment } from "react";
import { MapContainer, TileLayer, Popup, CircleMarker, Polyline, Rectangle, Polygon, Circle } from "react-leaflet";

const position: any = [51.505, -0.09];
const redOptions: any = { color: "red" };
const center: any = [51.51, -0.12];
const fillBlueOptions = { fillColor: "blue" };
const blackOptions = { color: "black" };
const limeOptions = { color: "lime" };
const purpleOptions = { color: "purple" }

const polyline: any = [
	[51.505, -0.09],
	[51.51, -0.1],
	[51.51, -0.12],
];

const multiPolyline: any = [
	[
		[51.5, -0.1],
		[51.5, -0.12],
		[51.52, -0.12],
	],
	[
		[51.5, -0.05],
		[51.5, -0.06],
		[51.52, -0.06],
	],
];

const polygon: any = [
	[51.515, -0.09],
	[51.52, -0.1],
	[51.52, -0.12],
];

const multiPolygon: any = [
	[
		[51.51, -0.12],
		[51.51, -0.13],
		[51.53, -0.13],
	],
	[
		[51.51, -0.05],
		[51.51, -0.07],
		[51.53, -0.07],
	],
];

const rectangle: any = [
	[51.49, -0.08],
	[51.5, -0.06],
];

function Leafletmapsdata() {
	const renderCard = (title: string, content: React.ReactNode) => (
		<div className="xl:col-span-6 col-span-12">
			<div className="box custom-card">
				<div className="box-header">
					<div className="card-title">{title}</div>
				</div>
				<div className="box-body">{content}</div>
			</div>
		</div>
	);

	return (
		<Fragment>

			<div className="grid grid-cols-12 gap-x-6">
				{renderCard(
					"Leaflet Map",
					<div id="map">
						<MapContainer center={position} zoom={13} scrollWheelZoom={true} className='mapleaflet ht-300' id="leaflet1" style={{ height: "300px" }}>
							<TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
						</MapContainer>
					</div>
				)}
				{renderCard(
					"Map With Markers,Circle and Polygons",
					<div id="map1">
						<MapContainer center={center} zoom={13} scrollWheelZoom={true} className="mapleaflet ht-200 ht-sm-300 ht-md-400 popup-map" id="leaflet3" style={{ height: "300px" }}>
							<TileLayer
								attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
							<Circle center={center} pathOptions={fillBlueOptions} radius={200} />
							<CircleMarker center={[51.51, -0.12]} pathOptions={redOptions} radius={20}>
								<Popup>Popup in CircleMarker</Popup>
							</CircleMarker>
							<Polyline pathOptions={limeOptions} positions={polyline} />
							<Polyline pathOptions={limeOptions} positions={multiPolyline} />
							<Polygon pathOptions={purpleOptions} positions={polygon} />
							<Polygon pathOptions={purpleOptions} positions={multiPolygon} />
							<Rectangle bounds={rectangle} pathOptions={blackOptions} />
						</MapContainer>
					</div>
				)}
				{renderCard(
					"Map With Popup",
					<div id="map-popup">
						<MapContainer center={center} zoom={13} scrollWheelZoom={true} className="mapleaflet ht-300 circle-map" id="leaflet2" style={{ height: "300px" }}>
							<TileLayer
								attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
							<CircleMarker center={[51.51, -0.12]} pathOptions={redOptions} radius={20}>
								<Popup>Popup in CircleMarker</Popup>
							</CircleMarker>
						</MapContainer>
					</div>
				)}
				{renderCard(
					"Interactive Choropleth Map",
					<div id="interactive-map">
						<MapContainer center={position} zoom={13} scrollWheelZoom={true} className='mapleaflet ht-300' id="interactive-map" style={{ height: "300px" }}>
							<TileLayer
								attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
						</MapContainer>
					</div>
				)}
			</div>

		</Fragment>
	);
}
export default Leafletmapsdata;
