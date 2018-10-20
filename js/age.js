function getAge() {
	var today = new Date();
	var birth = new Date("06/29/1998");
	var age = today.getFullYear() - birth.getFullYear();
	var m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

window.onload = function() {
	var ageField = document.getElementById("myAge");
	ageField.innerHTML = getAge();
};