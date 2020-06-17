// Elements
let form_username = document.getElementById("form-username")

let input_username = document.getElementById("input-username")
let search_username = document.getElementById("search-username")

let user_name = document.getElementById("user-name")
let user_img = document.getElementById("user-img")

let followers = document.getElementById("user-followers-count")
let following = document.getElementById("user-following-count")

let repositorys = document.getElementById("user-repo-count")
let gists = document.getElementById("user-gist-count")

let user_id = document.getElementById("user-id")

// non-useable words
const unused_words = ["ş", "ğ", "ü", "ç", "İ", "Ç", "Ü", "Ğ"]

// Object's
const request = new GithubRequest()
const ui = new UI()

// Event Listeners's
eventListeners()

function eventListeners() {
	form_username.addEventListener("submit", newUserName)
}

// Func's
function newUserName(e) {
	let username = input_username.value
	if (username === "") {
		console.log("Boş YAPMA!")
	}
	else {
		request.get(username)
			.then(data => {
				if (data.message === "Not Found") console.log("Kullanıcı Yok");
				else UserToUI(data);
			})
			.catch(err => console.log("Bir Sorun Oluştu"))
	}

	e.preventDefault()
}

function UserToUI(newUser) {
	ui.changeUsername(user_name, newUser.login)
	ui.changeFollowers(followers, newUser.followers)
	ui.changeFollowing(following, newUser.following)
	ui.changeRepositorys(repositorys, newUser.public_repos)
	ui.changeGists(gists, newUser.public_gists)
	ui.changeID(user_id, newUser.id)
	ui.changeAvatar(user_img, newUser.avatar_url)
}