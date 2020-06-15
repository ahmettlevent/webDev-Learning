// Elements

let input_username = document.getElementById("input-username")

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
	input_username.addEventListener("input", newUserName)
}

// Func's

function newUserName(e) {
	let username = input_username.value
	if ((username).length > 0 && !(unused_words.indexOf(username) >= 0)) {
		request.get(input_username.value)
			.then(data => UserToUI(JSON.parse(data)))
			.catch(err => console.log("yarra yedig"))
	}
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