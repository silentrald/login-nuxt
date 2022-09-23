export enum HttpStatusCode {
  // 200
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,

  // 400
  BAD_REQUEST = 402,
  UNAUTHENTICATED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,

  I_AM_A_TEAPOT = 418,

  // 500
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
}

export enum HttpContentType {
  APPLICATION_JSON = 'application/json',
  APPLICATION_FLATBUFFERS = 'application/flatbuffers',
  TEXT_HTML = 'text/html',
}

