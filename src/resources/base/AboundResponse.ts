// response entity with a `data` property that is the resource
export interface AboundResponse<T> {
  data: T;
  request: RequestMetadata;
}

// response entity with a `data` property that contains an array of instances of the resource
export interface AboundBulkResponse<T> {
  data: T[];
  count: number;
  nextPage?: string;
  request: RequestMetadata;
}

export interface RequestMetadata {
  timestamp: number;
  requestId: string;
}
