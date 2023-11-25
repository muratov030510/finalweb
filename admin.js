document.addEventListener('DOMContentLoaded', function () {
    displayUserList();
});

function displayUserList() {
    const userListDiv = document.getElementById('userList');
    const users = getUsersFromLocalStorage();

    if (users && users.length > 0) {
        userListDiv.innerHTML = "<h2>User List</h2><ul>";
        users.forEach((user, index) => {
            userListDiv.innerHTML += `<li>${user.username} - ${user.password} <button class="edit-button" onclick="editUser(${index})">Edit</button><button class="delete-button" onclick="deleteUser(${index})">Delete</button></li>`;
        });
        userListDiv.innerHTML += "</ul>";
    } else {
        userListDiv.innerHTML = "<p>No users found.</p>";
    }
}

function getUsersFromLocalStorage() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

function deleteUser(index) {
    const users = getUsersFromLocalStorage();
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    displayUserList();
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
