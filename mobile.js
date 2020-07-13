


const mobile = function isMobile()
{ // i:正規表現のoption.大文字／小文字を区別しない
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  //両方falseのときのみmobileはfalse
  return isAndroid || isiOS;
}


export {mobile};