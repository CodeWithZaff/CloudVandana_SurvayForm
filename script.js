function submitForm() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(e => e.value);
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    // Perform any additional validation here
    // You can use regular expressions, etc.

    // Display the results in a popup
    const resultText = `First Name: ${firstName}\nLast Name: ${lastName}\nDate of Birth: ${dob}\nCountry: ${country}\nGender: ${gender.join(", ")}\nProfession: ${profession}\nEmail: ${email}\nMobile Number: ${mobile}`;
    alert(resultText);

    // Reset the form
    resetForm();
}

function resetForm() {
    document.getElementById("survey-form").reset();
}