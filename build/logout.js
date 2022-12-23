"use strict";
const logout = document.getElementById("logoutId");
logout === null || logout === void 0 ? void 0 : logout.addEventListener("click", localstorageClear);
function localstorageClear() {
    localStorage.clear();
    alert("You are logged out !");
    window.location.href = "index.html";
}
////////////////////////
///////////////////////
const edit = document.getElementById("editAccountId");
edit === null || edit === void 0 ? void 0 : edit.addEventListener("click", sendToMyAccountPage);
function sendToMyAccountPage() {
    window.location.href = "account.html";
}
