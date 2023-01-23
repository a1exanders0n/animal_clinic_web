map = new OpenLayers.Map("mapdiv");
map.addLayer(new OpenLayers.Layer.OSM());
   
var pois = new OpenLayers.Layer.Text( "My Points",
                { location:"./textfile.txt",
                  projection: map.displayProjection
                });
map.addLayer(pois);
// create layer switcher widget in top right corner of map.
var layer_switcher= new OpenLayers.Control.LayerSwitcher({});
map.addControl(layer_switcher);
//Set start centrepoint and zoom    
var lonLat = new OpenLayers.LonLat( 9.5788, 48.9773 )
      .transform(
        new OpenLayers.Projection("EPSG:4326"),
        map.getProjectionObject() 
      );
var zoom=11;
map.setCenter (lonLat, zoom); 

window.addEventListener("click", function() {
  document.querySelectorAll(".olPopup").forEach(popup => popup.addEventListener("click", function(event){
    popup.style.display = "none";
  }))
});

document.querySelectorAll(".olPopup").forEach(popup => popup.addEventListener("click", function(event){
  event.stopPropagation();
}))