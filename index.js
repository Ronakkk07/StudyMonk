function validateForm() {
    var name = document.forms["registrationForm"]["name"].value;
    var email = document.forms["registrationForm"]["email"].value;
    var password = document.forms["registrationForm"]["password"].value;

    if (name == "") {
      alert("Name must be filled out");
      return false;
    }

    if (email == "") {
      alert("Email must be filled out");
      return false;
    }

    // Simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address");
      return false;
    }

    if (password == "") {
      alert("Password must be filled out");
      return false;
    }

    // Additional password validation logic can be added here
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character");
        return false;
      }
    // If all validations pass, the form can be submitted
    return true;
  }