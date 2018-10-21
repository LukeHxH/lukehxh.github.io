function getAge(birth) {
	var today = new Date();
	var age = today.getFullYear() - birth.getFullYear();
	var m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

window.onload = function() {
	var ageField = document.getElementById("myAge");
	ageField.innerHTML = getAge(new Date("06/29/1998"));
};