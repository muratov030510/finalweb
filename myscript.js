function Buy() {
    confirm("Are you want to buy this?")
}


var slider_img = document.querySelector('.slider-img');
var images = ['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}

function validateForm() {
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    if (username.length < 5) {
        alert('Username must be at least 5 characters');
        return false;
    }
    
    if (password.length < 8) {
        alert('Password must be at least 8 characters');
        return false;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }
    
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    saveUserToLocalStorage({ username, password });

    window.location.href = "login.html";
    return false;

    function saveUserToLocalStorage(user) {
        const users = getUsersFromLocalStorage();
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
    }
}

function getUsersFromLocalStorage() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

function login() {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    const enteredUsername = document.getElementById('login-username').value;
    const enteredPassword = document.getElementById('login-password').value;

    if (enteredUsername === "muratov" && enteredPassword === "bahromhon") {
        alert('Admin login successful');

        window.location.href = "admin.html";
    }
    else if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        alert('Login successfully')
        window.location.href = "index.html";
    } 
    else {
        alert('Login failed. Please check your username and password.');
    }
}
function editUser(index) {
    const users = getUsersFromLocalStorage();
    const editUsername = prompt("Enter new username:");
    const editPassword = prompt("Enter new password:");

    if (editUsername && editPassword) {
        users[index].username = editUsername;
        users[index].password = editPassword;
        localStorage.setItem('users', JSON.stringify(users));
        displayUserList();
    } else {
        alert("Username or password cannot be empty!");
    }
}