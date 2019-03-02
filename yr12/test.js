function loadshell()
{
	document.getElementsByTagName("body")[0].innerHTML = "<div id=\"writershell\"><script type=\"application\/javascript\" src=\"https:\/\/script.google.com\/macros\/s\/AKfycbyUUReOeIpiiIJWWMaKORJYURDTso_cm5RNuNu0W0oVKBPfNtdk\/exec\"><\/script>"
}
function shell(myobject)
{
	document.getElementsByTagName("body")[0].innerHTML = myobject.bodycontent; 
}