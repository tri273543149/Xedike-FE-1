import api from "../api";

function setHeaders(token, fingerprint) {
  if (token && fingerprint) {
    api.defaults.headers.common["Authorization"] = token;
    api.defaults.headers.common["fingerprint"] = fingerprint;
  } else {
    delete api.defaults.headers.common["Authorization"];
    delete api.defaults.headers.common["fingerprint"];
  }
}

export default setHeaders;
