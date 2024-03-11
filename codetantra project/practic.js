var dt = new Date();
var h1 = 60, h2 = 30, h3 = 150, h4 = 200, h5 = 150, h6 = 200;
var dat_avi = ['16-8-2023', '18-8-2023', '22-8-2023'];

function ck(no_of_rooms, bt, date, hotel, pa) {
    var p = document.getElementById(pa);
    var n = parseInt(document.getElementById(no_of_rooms).value);
    var d = new Date(document.getElementById(date).value);

    if (d < dt) {
        alert("Enter a valid date.");
        return;
    }

    if (hotel == 1) {
        if ((n > 0 && n <= h1) && d >= dt) {
            document.getElementById(bt).innerHTML = "Booking Confirmed";
        } else if (n > h1) {
            alert("Only " + h1 + " rooms are available");
        } else {
            document.getElementById(bt).innerHTML = "Enter valid";
        }
    } else if (hotel == 2) {
        if (n > 0 && n <= h2) {
            document.getElementById(bt).innerHTML = "Booking Confirmed";
        } else if (n > h2) {
            alert("Only " + h2 + " rooms are available");
        } else {
            document.getElementById(bt).innerHTML = "Enter valid";
        }
    } else if (hotel == 3) {
        if (n > 0 && n <= h3) {
            document.getElementById(bt).innerHTML = "Booking Confirmed";
        } else if (n > h3) {
            alert("Only " + h3 + " rooms are available");
        } else {
            document.getElementById(bt).innerHTML = "Enter valid";
        }
    } else if (hotel == 4) {
        if (n > 0 && n <= h4) {
            document.getElementById(bt).innerHTML = "Booking Confirmed";
        } else if (n > h4) {
            alert("Only " + h4 + " rooms are available");
        } else {
            document.getElementById(bt).innerHTML = "Enter valid";
        }
    } else if (hotel == 5) {
        if (n > 0 && n <= h5) {
            document.getElementById(bt).innerHTML = "Booking Confirmed";
        } else if (n > h5) {
            alert("Only " + h5 + " rooms are available");
        } else {
            document.getElementById(bt).innerHTML = "Enter valid";
        }
    } else if (hotel == 6) {
        if (n > 0 && n <= h6) {
            document.getElementById(bt).innerHTML = "Booking Confirmed";
        } else if (n > h6) {
            alert("Only " + h6 + " rooms are available");
        } else {
            document.getElementById(bt).innerHTML = "Enter valid";
        }
    }
}