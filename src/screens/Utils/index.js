export function getOS() {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macOsPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'darwin'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    position = null,
    os = null;

  if (macOsPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
    position = 'left';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
    position = 'top';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
    position = 'left';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
    position = 'bottom';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
    position = 'left';
  }
  return position;
}
