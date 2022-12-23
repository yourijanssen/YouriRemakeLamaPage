const logout = document.getElementById("logoutId");
logout?.addEventListener("click", localstorageClear);

function localstorageClear() {
  localStorage.clear();
  alert("You are logged out !");
  window.location.href = "index.html";
}
////////////////////////
///////////////////////

const edit = document.getElementById("editAccountId");
edit?.addEventListener("click", sendToMyAccountPage);

function sendToMyAccountPage(){
    window.location.href = "account.html";
}
