document.addEventListener("DOMContentLoaded", function() {
	var stickyWrappers = document.getElementsByClassName("sticky-wrapper"),
		popups = document.getElementsByClassName("popup-nav")
	if (!stickyWrappers.length || !popups.length)
		throw new Error("Not found stickyWrappers or popups")
	var sticky = stickyWrappers[0],
		popup = popups[0]
	sticky.addEventListener("click", function() {
		popup.className += " open"
		document.getElementsByTagName("header")[0].style.position = "unset"
	}) 
	var close = popup.getElementsByClassName("close")
	if (!close.length)
		return
	close[0].addEventListener("click", function() {
		popup.className = popup.className.replace(" open", "")
		document.getElementsByTagName("header")[0].style = ""
	})
	var offsetTop,
		scrollOpen,
		scrollClose
	window.addEventListener('scroll', function() { 	
		if (!scrollOpen && window.scrollY >= (offsetTop || (offsetTop = sticky.offsetTop)))
		{
			var logo = document.getElementsByClassName("logo")[0]
			var cs = getComputedStyle(logo)
			logo.style.top = cs.top.replace("px","") * 2 + "px"
			logo.style.marginTop = "2Px"
			sticky.getElementsByTagName("ul")[0].style.marginLeft = "190Px"
			scrollOpen = true
			scrollClose = false
		} 
		if (!scrollClose && window.scrollY < (offsetTop || (offsetTop = sticky.offsetTop)) / 2)
		{
			var logo = document.getElementsByClassName("logo")[0]
			var cs = getComputedStyle(logo)
			logo.style = ""
			sticky.getElementsByTagName("ul")[0].style = ""
			scrollClose = true
			scrollOpen = false
		}
	})
})

