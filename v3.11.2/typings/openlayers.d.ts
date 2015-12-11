// Type definitions for OpenLayers.js 3.0
// Project: https://github.com/openlayers/openlayers
// Definitions by: Ilya Bolkhovsky <https://github.com/bolhovsky>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module ol {

    export function inherits(value, target);


    export interface View2DOptions {
        projection?: any;
        center: number[];
        zoom: number;
        rotation?: number;

    }

    export interface FeatureOverlayOptions {
        map?: any;
        features?: Feature[];
        style?;
    }
    export interface Extent extends Array<number> {

    }
    interface Size extends Array<number> {

    }
    export interface IView {
    }
    class CollectionEvent<T> {
        element: T;
        type: string;
    }
    class MapEvent {
        map: Map;
        type: string;
        frameState;
    }

    class MapBrowserEvent extends MapEvent {
        browserEvent;
        originalEvent;
        coordinate: number[];
        pixel: number[];
        dragging;
    }
    class ImageTile {
        constructor(tileCoord, state, src, crossOrigin, tileLoadFunction);
    }
    class Tile {
        constructor(tileCoord, state);
    }
    class Sphere {
        constructor(radius: number);
        geodesicArea(coordinates: number[]);
        haversineDistance(c1: number[], c2: number[]);
    }
    class Map extends Observable {
        constructor(options: any)

        updateSize();
        getSize(): number[]
        renderSync();
        beforeRender(...options: any[]);

        forEachFeatureAtPixel(pixel, callback, opt_this?, opt_layerFilter?, opt_this2?)
        /**
        * Add the given control to the map.
        * @param {ol.control.Control} control Control.
        * @todo api
        */
        addControl(control: control.Control)
        /**
         * Add the given interaction to the map.
         * @param {ol.interaction.Interaction} interaction Interaction to add.
         * @todo api
         */
        addInteraction(interaction);
        removeInteraction(interaction);
        /**
 * Adds the given layer to the top of this map.
 * @param {ol.layer.Base} layer Layer.
 * @todo api
 */
        addLayer(layerbase: layer.Base);
        removeLayer(layerbase: layer.Base);
        /**
 * Add the given overlay to the map.
 * @param {ol.Overlay} overlay Overlay.
 * @todo api
 */
        addOverlay(overlay: Overlay);
        /**
 * Get the view associated with this map. This can be a 2D or 3D view. A 2D
 * view manages properties such as center and resolution.
 * @return {ol.View|undefined} View.
 * @todo api
 */
        getView(): View;
        /**
 * Set the view for this map. Currently {@link ol.View2D} is implememnted.
 * @param {ol.IView} view View.
 * @todo api
 */
        setView(view: IView);
        setTarget(target: string|HTMLElement);

        getLayers() : ol.Collection<ol.layer.Base>;
        render();
        getViewport();
        getEventPixel(evt);
        getEventCoordinate(evt);
        getCoordinateFromPixel(pixel:number[]): number[];
        getPixelFromCoordinate(coordinate: Array<number>): Array<number>;
    }

    class Overlay {
        constructor(opts?);
        setPosition(pos: number[]);
        getPosition(): number[];
        setOffset(pos: number[]);
    }
    class Feature extends Object {
        constructor(geom: geom.Geometry)
        constructor(geom: string)

        getGeometry<T>(): T
        getGeometryName(): string;
        getId(): any;
        setId(id);
        setStyle(style);
    }
    class FeatureOverlay {
        constructor(options?: FeatureOverlayOptions);
        setMap(map: ol.Map);
        getStyle(): ol.style.Style;
        getFeatures(): ol.Collection<ol.Feature>
        setFeatures(features: ol.Collection<ol.Feature>);
    }


    class View extends Object implements IView {
        constructor(options?: { center? ; constrainRotation? ; enableRotation? ; extent? ; maxResolution? ; minResolution?: number; maxZoom?: number; minZoom?: number; projection? ; resolution? ; resolutions? ; rotation? ; zoom? ; zoomFactor? ; });
        // getView2D(): View2D;
        fit(extend: any, size: number[], opt_options?);

        setCenter(center);
        setZoom(lvl: number);
        setResolution(res: number);
        getCenter(): any;
        getZoom(): any;

        fitGeometry(geometry, size, opt_options?);
        getRotation(): number;
        getResolution(): number;
        setRotation(rad: number);
        getProjection(): ol.proj.Projection;
        calculateExtent(size: number[]): number[];

    }
    class Geolocation {
    }
    class Coordinate {
        constructor(lng: number, lat: number)
    }

    class ObjectAccsor {
    }

    class Object extends Observable {
        get(key: string): any;
        bindTo(key: string, target: Object, targetkey?: string);
        getKeys(): string[];
        set(key, value);
        // NOt sure what Object.<string, *> means, which is the true return type;
        getProperties<T>() : T
    }

    class Observable {
        changed();
        on(type, listener, opt_this?);
        bindTo(type, el);
        once(type, listener, opt_this?);
    }

    //http://ol3js.org/en/master/apidoc/ol.Collection.html
    class Collection<T> extends Object {
        constructor(opt_array?);
        ///Remove all elements from the collection
        clear()
     
        extend(arr: any[]): Collection<T>
        forEach(f: (item: T) => void, thisobj?);
        getArray(): T[]
        push(obj: T);
        insertAt(idx: number, T);
        remove(obj: T);
      //  on(events: string[], callback: (e) => void, thisobj?);

    }

   

    module format {
        class WMTSCapabilities {
            read(data);
        }
        class GeoJSON extends FeatureBase{
            constructor(opt_options?: any);
           
            writeFeature(features: Feature): string;
            
            readProjection(source): proj.Projection;
            readGeometry(source, opt_options?): ol.geom.Geometry;
            writeGeometry(geometry, options?): string;
            writeGeometryObject(geometry, options?): any;
        }
        class GPX extends XMLFeature {
            constructor(opt?)
        }
        class IGC { }
        class KML extends XMLFeature{
            constructor(opt?)
        }
        class TopoJSON { }
        class XMLFeature extends FeatureBase {
            
        }
        class FeatureBase {
            readFeature(source): Feature;
            readFeatures(source, options?): Feature[];
            writeFeatures(feature: Feature[], opt?): string;
            writeFeaturesObject(feature: Feature[], opt?): any;
        }
    }
    module events {
        module condition {
            function shiftKeyOnly(options?);
            function singleClick(optons?);
            function altKeyOnly(options?);
        }
    }
    module tilegrid {
        class WMTS extends TileGrid {
            constructor(options?);

        }
        class TileGrid {

           // getZForResolution(resolution: number): number;
            getTileCoordForCoordAndResolution(coordinate, resolution, opt_tileCoord?): number[]
            getTileCoordForCoordAndZ(coordinate, z, opt_tileCoord?): number[]
            getTileRangeForExtentAndResolution(extent, resolution): any
            getTileCoordExtent(coord): number[]
            getResolutions(): number[]
            getResolution(coord): number;
            getOrigin(coord): number;
            getTileSize(coord): number;

        }
        class XYZ extends TileGrid {
            constructor(options?);
        }
        function createXYZ(opt?) : TileGrid;
    }
    module size {
        function toSize(p,o?);
    }
    module animation {
        function pan(options: any): any;
        function zoom(options: any): any;
        function bounce(options: any): any;
    }
    module control {

        class Control {
            constructor(opt?);
            getMap(): ol.Map;
        }
    }
    module layer {
        class Heatmap extends ol.layer.Vector {
            constructor(options?: any);
        }
        class Group extends Base {
            constructor(options?: any);
            addLayer(layer: Base);
        }
        class Base extends Object {
            setVisible(visible: boolean)
             getVisible(): boolean;
             setOpacity(o: number);
             setSource(source: ol.source.Source);
        }
        class Tile extends Base {
            constructor(options: any)
            getSource(): ol.source.Source
        }
        interface VectorLayerOptions {
            source: ol.source.Vector;
            style?: ol.style.Style;
        }
        class Vector extends Base {
            constructor(options: VectorLayerOptions);

            getSource();
        }
        class Image extends Layer { 
              constructor(options: any)

          
        }
        class Layer extends Base {
            constructor(options?: any);
            getSource() : ol.source.Source;
        }
    }
        module loadingstrategy{
            function tile(grid);
        }
    module source {
        class TileVector extends Vector{
            constructor(options ?);
        }
        class WMTS extends TileImage
        {
            constructor(options?);
            static optionsFromCapabilities(data, config);
        }
        class ImageVector extends ImageCanvas {
            constructor(options?: any)
        }
        class Cluster extends Vector {
          constructor(options?: any)
        }
        class Image extends Source {
                 constructor(options: any)
        }
        class ImageWMS extends Image {
                    constructor(options: any)
        }
        class TileDebug {
            constructor(options: any)
        }
        class ImageCanvas extends Image {
                  constructor(options: any)
        }
        class MapQuest {
            constructor(options: any)
        }
        //class GPX extends StaticVector {
        //    constructor(options: {
        //        projection?: string;
        //        url?: string
        //        doc: string;
        //    })
        //}
        
        //class GeoJSON extends StaticVector {
        //    constructor(options: {
        //        projection?: string;
        //        url?: string
        //    })
        //}
        class XYZ extends TileImage {
             constructor(options: any)
        }
        class OSM {
        }
        class StaticVector extends FormatVector {

        }
        class TileImage extends Tile{
            setTileLoadFunction(func: (tile, src) => void);
            getTileLoadFunction();
            setTileUrlFunction(func: (coord, resolution, proj) => string);
            getTileUrlFunction(): (coord, resolution, proj) => string;
        }
        class Tile extends Source {

        }
        class FormatVector extends Vector {

        }
        class Vector extends Source {
            constructor(options?);
            getFeaturesCollection(): ol.Collection<ol.Feature>;
            getFeaturesInExtent(extent: ol.Extent): ol.Feature[];
            addFeature(feature: Feature);
            addFeatures(feature: Feature[]);
            removeFeature(feature: Feature);
            getFeaturesAtCoordinate(point: number[]): Feature[];
            getFeatures(): Array<Feature>;
            getFeatureById(id:string|number): Feature;
            getClosestFeatureToCoordinate(coordinate: number[]): Feature;
            clear();
            getExtent(): any;
            forEachFeatureInExtent(extend, f, opt_this?);
            forEachFeatureIntersectingExtent(extend, f, opt_this?);
        }
        class VectorEvent {
            type: string;
            feature: Feature;
        }
        class BingMaps extends TileImage{
             constructor(options: any)
        }
        class ImageStatic {
              constructor(options: any)
        }
        class Source extends Observable {
            constructor(options?);

            getProjection(): ol.proj.Projection;
            setUrl(url: string);
     
        }
    }
    module style {
        class Style {
            constructor(options: { fill?; stroke?; image?;})
        }
        class Fill {
            constructor(options: { color?})
        }
        class Stroke {
            constructor(options: { color?; width?; lineDash?})
        }
        class RegularShape {
            constructor(options: any)
        }
        class Circle {
            constructor(options: { radius?; fill?;stroke?})
        }
        class Text {
             constructor(options?: any)
        }
    }
    module extent {
        function getHeight(extent: ol.Extent): number;
        function getWidth(extent: ol.Extent): number;
        function getCenter(extent: ol.Extent): Array<number>;
        function getIntersection(extent1: ol.Extent, extent2: ol.Extent): Array<number>;
        function extend(extent1: ol.Extent, extent2: ol.Extent): Array<number>;
    }
    module proj {

        class Projection {
            constructor(options: any);

            getExtent();
            getCode():string;
            setExtent(extent:Extent);
        }
        function fromLonLat(coordinate, opt_proj?):Array<number>;
        function addCoordinateTransforms(currentProj, projection,
            forward, inverse);
        function addEquivalentProjections(projs:Projection[]);
        function addProjection(proj: Projection);
        function get(proj: string):Projection;
        function transform(point: any[], from: string, to: string);
        function transform(point: Coordinate, from: string, to: string);
        function transform(point: Coordinate, from: string, to: ol.proj.Projection);
        function transform(point: Coordinate, from: ol.proj.Projection, to: ol.proj.Projection);
        function transform(point: Coordinate, from: ol.proj.Projection, to: string);
    }

    module control {
        function defaults(options?);
        class FullScreen { }
        class OverviewMap {
            constructor(opt?);
            setCollapsed(bool: boolean);
            setCollapsible(bool: boolean);
        }
        class ScaleLine { }
    }
    module geom {

        /**
         * The geometry type. One of `'Point'`, `'LineString'`, `'LinearRing'`,
         * `'Polygon'`, `'MultiPoint'`, `'MultiLineString'`, `'MultiPolygon'`,
         * `'GeometryCollection'`, `'Circle'`.
         * @enum {string}
         * @todo api
         */
        enum GeometryType {
            POINT,
            LINE_STRING,
            LINEAR_RING,
            POLYGON,
            MULTI_POINT,
            MULTI_LINE_STRING,
            MULTI_POLYGON,
            GEOMETRY_COLLECTION,
            CIRCLE
        }

        class Geometry extends Observable {

            clone();
            //An array of numbers representing an extent: [minx, miny, maxx, maxy].      
            getExtent(opt_extent?: any): number[];
            getType():string;

        }
        class SimpleGeometry extends Geometry {

        }
        class LineString extends SimpleGeometry {
            constructor(data: any);
            appendCoordinate(coordinate: number[]);
            getClosestPoint(point: number[], opt_closestPoint?): number[];
            getCoordinateAtM(m, opt_extrapolate?): number[];
            getLastCoordinate(): number[];
            getCoordinates(): number[][];
            setCoordinates(coords: number[][], layout?: string);
            getLength(): number;
        }
        class Point extends Geometry {
            getCoordinates(): number[];
            setCoordinates(coord: number[]);
            constructor(data: any)
        }
        class GeometryCollection extends Geometry {
            constructor(geoms?: Array<Geometry>);
        }
        class Polygon extends Geometry {
        constructor(rawpolygon: any[])
            getCoordinates() : any[][];
            setCoordinates(rawpolygon: any[]);
            getInteriorPoint();
            getArea(): number;
        }
        class Circle extends Geometry {
        constructor(center: number[], radius: number)
        }

    }
    module interaction {
        class MouseWheelZoom extends Interaction {
        }
        class Interaction extends Object {
                       constructor(data?: any)
        }
        class Pointer extends Interaction {
                         constructor(data?: any)
        }
        class Snap extends Interaction {
                         constructor(data?: any)
        }
        class DragBox extends Pointer {
                           constructor(data?: any)
            getGeometry(): ol.geom.Geometry;
        }
        class Draw extends Observable {
            constructor(data?: any)
            finishDrawing();
            handleEvent(evt);
        }
        class Select extends Observable {
              constructor(data?: any)

            getFeatures(): Collection<Feature>
        }
        class Modify extends Observable {
            constructor(options?: any);
        }
        function defaults(opt?)
        class DragAndDrop extends Observable {
            constructor(options: any);
        }
    }

    class Attribution {
        constructor(options: any)
    }

}
declare module "openLayers" {
    export = ol;
}



