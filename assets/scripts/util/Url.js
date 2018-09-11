export function extractHostname(url) {
  var hostname;
  //find & remove protocol (http, ftp, etc.) and get hostname
  if (url.indexOf("//") > -1) {
    hostname = url.split('/')[2];
  }
  else {
    hostname = url.split('/')[0];
  }
  //find & remove port number
  hostname = hostname.split(':')[0];
  //find & remove "?"
  hostname = hostname.split('?')[0];
  return hostname;
}
export function getRoutes(){
  var pathname = window.location.pathname;
  return({
    mainRoute: pathname,
    voyageUrl: pathname+'voyage/:id',
    customUrl: pathname+'voyage/'
  });
}