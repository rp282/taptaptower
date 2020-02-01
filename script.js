
function loginWithFacebook(e) {
	FB.login(response => {
		console.log(response)
	}, {scope: 'public_profile,email'})
	return false
}

document.getElementById('loginbtn').addEventListener('click', loginWithFacebook, false)
