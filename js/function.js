document.addEventListener("DOMContentLoaded", function() {
	var stickyWrappers = document.getElementsByClassName("sticky-wrapper"),
		popups = document.getElementsByClassName("popup-nav")
	if (!stickyWrappers.length || !popups.length)
		throw new Error("Not found stickyWrappers or popups")
	var sticky = stickyWrappers[0],
		popup = popups[0]
	sticky.addEventListener("click", function() {
		popup.className += " open"
	}) 
	var close = popup.getElementsByClassName("close")
	if (!close.length)
		return
	close[0].addEventListener("click", function() {
		popup.className = popup.className.replace(" open", "")
	})
	var offsetTop;
	window.addEventListener('scroll', function() { 
		if (window.scrollY >= (offsetTop || (offsetTop = sticky.offsetTop)))
			console.log(window.scrollY)
	})
})

