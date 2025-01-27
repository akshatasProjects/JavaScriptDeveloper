let monthNum = prompt("Enter a number of month", "1");
let monthName;

switch (monthNum) {
  case "1":
    monthName = "Jan";
    break;

  case "2":
    monthName = "Feb";
    break;

  case "3":
    monthName = "March";
    break;

  case "4":
    monthName = "April";
    break;

  case "5":
    monthName = "May";
    break;

  case "6":
    monthName = "June";
    break;

  case "7":
    monthName = "July";
    break;

  case "8":
    monthName = "Aug";
    break;

  case "9":
    monthName = "Sep";
    break;

  case "10":
    monthName = "Oct";
    break;

  case "11":
    monthName = "Nov";
    break;

  case "12":
    monthName = "Dec";
    break;

  default:
    console.log("bad input");
}
