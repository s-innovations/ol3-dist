interface AUTHORITY {
    EPSG;
}
interface GEOGCS {
    name: string;
}
interface def {
    units;
    axis;
    projName;
    to_meter: number;
    GEOGCS: GEOGCS; 
    AUTHORITY: AUTHORITY;
}
interface transformer {
    forward(a:number[]);
    inverse(a:number[]);
}
interface proj4 {
    (a, b, c): number[];
    (a, b): transformer;
    (b): transformer;
    defs: (name: string, def?: string) =>def;
}
//declare function proj4(a, b, c): number[];
declare var proj4: proj4;

declare module "proj4"
{
    export = proj4;
}


