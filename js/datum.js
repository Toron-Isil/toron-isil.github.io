

var year = new Date().getFullYear();

var day = new Date().getDate();

var month = new Date().getMonth() + 1;


document.write("Copyright &copy; " + year + " - Boehm, Bernd - " + day + "." + month + "." + year);


var weekdaylist = new Array(
	"Sonnday",
	"Monday",
	"Diensday",
	"Mittwoch",
	"Donnersday",
	"Freiday",
	"Samsday"
);

var monthlist = new Array(
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"Juli",
	"August",
	"September",
	"October",
	"November",
	"Dezember"
);

var aktweekday = new Date().getDay();

var aktmonth = new Date().getMonth();

document.write("<div>" + weekdaylist[aktweekday] + ", " + day + "." + + monthlist[aktmonth] " " + year + "</div>");