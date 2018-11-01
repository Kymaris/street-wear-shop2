document.addEventListener("DOMContentLoaded", function() {
	var sticky = document.getElementsByClassName("sticky-wrapper")[0],
		popup = document.getElementsByClassName("popup-nav")[0],
		header = document.getElementsByTagName("header")[0],
		close = popup.getElementsByClassName("close")[0]
	if (!sticky || !popup || !header || !close)
		return;
	sticky.addEventListener("click", function() {
		popup.className += " open"
		header.style.position = "unset"
	}) 
	close.addEventListener("click", function() {
		popup.className = popup.className.replace(" open", "")
		header.style = ""
	})
	var offsetTop,
		scrollOpen,
		scrollClose
	window.addEventListener('scroll', function() { 	
		if (!scrollOpen && window.scrollY >= (offsetTop || (offsetTop = sticky.offsetTop)))
		{
			var logo = document.getElementsByClassName("logo")[0]
			//#region Change style
			var cs = getComputedStyle(logo)
			logo.style.height = "60Px"
			logo.style.top = cs.top.replace("px","") * 2 + "px"
			logo.style.left = "0Px"
			logo.style.marginTop = "0Px"
			sticky.getElementsByTagName("ul")[0].style.marginLeft = "177Px"
			//#endregion
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

	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve("result"), 4000)
		setTimeout(() => reject(new Error("wtf")), 3000)
	})

	promise.then(
		result => alert("Fulfilled " + result),
		error => alert("Rejected " + error)
	)
})

