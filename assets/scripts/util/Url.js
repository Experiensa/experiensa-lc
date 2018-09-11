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
  console.log('pathname',pathname);
  var url1      = window.location.href;     // Returns full URL
  console.log('url1',url1);
  var origin1   = window.location.origin;   // Returns base URL
  console.log('origin1',origin1);
  return({
    mainRoute: pathname,
    voyageUrl: pathname+'voyage/:id',
    customUrl: pathname+'voyage/'
  });
}