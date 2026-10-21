function openMenu() {
  document.getElementById("mobileMenu").style.display = "block";
  document.getElementById("menuMask").style.display = "block";
}

function closeMenu() {
  document.getElementById("mobileMenu").style.display = "none";
  document.getElementById("menuMask").style.display = "none";
}

function checkForm() {
  var checkin = document.getElementById("checkin").value;
  var checkout = document.getElementById("checkout").value;
  var guests = document.getElementById("guests").value;

  if (checkin == "") {
    alert("Please select check-in date");
    return false;
  }

  if (checkout == "") {
    alert("Please select check-out date");
    return false;
  }

  // 日期比较
  if (checkout <= checkin) {
    alert("Check-out must be after check-in");
    return false;
  }

  if (guests == "") {
    alert("Please select guests");
    return false;
  }

  alert("Booking submitted!");
  return false;
}
