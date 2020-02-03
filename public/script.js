
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

		FB.api('/me', function(response) {
			console.log(JSON.stringify(response));
		});

	}, {scope: 'public_profile,email'})
	return false
}

document.getElementById('loginbtn').addEventListener('click', loginWithFacebook, false)
