export default function getBaseUrl() {
  console.log("get base url"); // eslint-disable-line no-console
  console.log(getQueryStringParameterByName('useMockApi') ? 'http://localhost:8090/' : '/'); // eslint-disable-line no-console
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:8090/' : '/';
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
