
function loginWithFacebook(e) {
	FB.login(response => {
		console.log(response)
		const {authResponse:{accessToken, userID}} = response;

		fetch('/login-with-facebook', {
			method: 'POST',
			headers: {
				'Content-Type': 'aplication/json'
			},
			body: JSON.stringify({accessToken, userID})
		}).then(res => {
			console.log(res);
		});
	}, {scope: 'public_profile,email'})
	return false
}

document.getElementById('loginbtnFB').addEventListener('click', loginWithFacebook, false)
