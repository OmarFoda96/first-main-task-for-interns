function fillLoggedUserInfo() {
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  if (!loggedUser) {
    return;
  } else {
    const name = document.getElementById("userName");
    const avatar = document.getElementById("UserImage");
    const heroUserName = document.getElementById("heroUserName");

    name.innerText = loggedUser.username;
    heroUserName.innerText = loggedUser.username;
    avatar.src = loggedUser.profilePicture;
  }
}

fillLoggedUserInfo();

function getUserName() {
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  if (!loggedUser) {
    return "";
  } else {
    return loggedUser.username;
  }
}
function getUserEmail() {
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  if (!loggedUser) {
    return "";
  } else {
    return loggedUser.email;
  }
}
function getUserAge() {
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  if (!loggedUser) {
    return "";
  } else {
    return loggedUser.age;
  }
}
