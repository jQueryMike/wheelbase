export interface UmbracoBlockGridItem {
  rowSpan: number;
  columnSpan: number;
  areaGridColumns: number;
  areas: UmbracoBlockGridArea[];
  content: UmbracoBlockGridContentItem;
  settings: UmbracoBlockGridItemSettings;
}

export interface UmbracoBlockGridArea {
  alias: string;
  rowSpan: number;
  columnSpan: number;
  items: UmbracoBlockGridItem[];
}

export interface UmbracoBlockGridContentItem {
  id: string;
  contentType: string;
  properties: { [propName: string]: any };
}

export interface UmbracoBlockGridItemSettings {
  id: string;
  contentType: string;
  properties: { [propName: string]: any };
}

export interface UmbracoImage {
  id: string;
  name: string;
  mediaType: 'Image' | string;
  url: string;
  extension: string;
  width: number;
  height: number;
  bytes: number;
}
