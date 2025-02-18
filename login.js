const users = [
  {
    username: "Omar Foda",
    email: "omarfoda@gmail.com",
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkG3RT0JH4jb_6UYj4hfgkf3jur87fYdYOYg&s",
    age: 28,
    hobbies: ["reading", "painting", "traveling"],
    password: "123456",
  },
  {
    username: "Omar . Foda",
    email: "omar.foda@gmail.com",
    profilePicture:
      "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png",
    age: 29,
    hobbies: ["reading", "painting", "traveling"],
    password: "123456",
  },
  {
    username: "Omar Foda 96",
    email: "omarfoda96@gmail.com",
    profilePicture: "https://sigc.edu/sigc/ad-sigc/datas/images/userimg.jpg",
    age: 30,
    hobbies: ["reading", "painting", "traveling"],
    password: "123456",
  },
];

jQuery(document).ready(function ($) {
  var $form_modal = $(".user-modal"),
    $form_login = $form_modal.find("#login"),
    $form_signup = $form_modal.find("#signup"),
    $form_forgot_password = $form_modal.find("#reset-password"),
    $form_modal_tab = $(".switcher"),
    $tab_login = $form_modal_tab.children("li").eq(0).children("a"),
    $tab_signup = $form_modal_tab.children("li").eq(1).children("a"),
    $forgot_password_link = $form_login.find(".form-bottom-message a"),
    $back_to_login_link = $form_forgot_password.find(".form-bottom-message a"),
    $main_nav = $(".main-nav");

  //open modal
  $main_nav.on("click", function (event) {
    if ($(event.target).is($main_nav)) {
      // on mobile open the submenu
      $(this).children("ul").toggleClass("is-visible");
    } else {
      // on mobile close submenu
      $main_nav.children("ul").removeClass("is-visible");
      //show modal layer
      $form_modal.addClass("is-visible");
      //show the selected form
      $(event.target).is(".signup") ? signup_selected() : login_selected();
    }
  });

  //close modal
  $(".user-modal").on("click", function (event) {
    if ($(event.target).is($form_modal) || $(event.target).is(".close-form")) {
      $form_modal.removeClass("is-visible");
    }
  });
  //close modal when clicking the esc keyboard button
  $(document).keyup(function (event) {
    if (event.which == "27") {
      $form_modal.removeClass("is-visible");
    }
  });

  //switch from a tab to another
  $form_modal_tab.on("click", function (event) {
    event.preventDefault();
    $(event.target).is($tab_login) ? login_selected() : signup_selected();
  });

  //hide or show password
  $(".hide-password").on("click", function () {
    var $this = $(this),
      $password_field = $this.prev("input");

    "password" == $password_field.attr("type")
      ? $password_field.attr("type", "text")
      : $password_field.attr("type", "password");
    "Show" == $this.text() ? $this.text("Hide") : $this.text("Show");
    //focus and move cursor to the end of input field
    $password_field.putCursorAtEnd();
  });

  //show forgot-password form
  $forgot_password_link.on("click", function (event) {
    event.preventDefault();
    forgot_password_selected();
  });

  //back to login from the forgot-password form
  $back_to_login_link.on("click", function (event) {
    event.preventDefault();
    login_selected();
  });

  function login_selected() {
    $form_login.addClass("is-selected");
    $form_signup.removeClass("is-selected");
    $form_forgot_password.removeClass("is-selected");
    $tab_login.addClass("selected");
    $tab_signup.removeClass("selected");
  }

  function signup_selected() {
    $form_login.removeClass("is-selected");
    $form_signup.addClass("is-selected");
    $form_forgot_password.removeClass("is-selected");
    $tab_login.removeClass("selected");
    $tab_signup.addClass("selected");
  }

  function forgot_password_selected() {
    $form_login.removeClass("is-selected");
    $form_signup.removeClass("is-selected");
    $form_forgot_password.addClass("is-selected");
  }

  //REMOVE THIS - it's just to show error messages
  $form_login.find('input[type="submit"]').on("click", function (event) {
    event.preventDefault();
    $form_login
      .find('input[type="email"]')
      .toggleClass("has-error")
      .next("span")
      .toggleClass("is-visible");
  });
  $form_signup.find('input[type="submit"]').on("click", function (event) {
    event.preventDefault();
    $form_signup
      .find('input[type="email"]')
      .toggleClass("has-error")
      .next("span")
      .toggleClass("is-visible");
  });
});

//credits https://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
jQuery.fn.putCursorAtEnd = function () {
  return this.each(function () {
    // If this function exists...
    if (this.setSelectionRange) {
      // ... then use it (Doesn't work in IE)
      // Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
      var len = $(this).val().length * 2;
      this.setSelectionRange(len, len);
    } else {
      // ... otherwise replace the contents with itself
      // (Doesn't work in Google Chrome)
      $(this).val($(this).val());
    }
  });
};

function submitLogin() {
  var emailValue = document.getElementById("signin-email").value;
  var passwordValue = document.getElementById("signin-password").value;
  if (emailValue || passwordValue) {
    var currentUser = users.find(user => user.email === emailValue);
    if (currentUser && passwordValue === currentUser.password) {
      localStorage.setItem("user", JSON.stringify(currentUser));
      alert("Welcome.");
      window.location.href =
        "D:/interns/weather%20app/Dopefolio-main/index.html";
    } else {
      alert("Invalid email or password.");
    }
  } else {
    alert("Please fill the form");
  }
}
