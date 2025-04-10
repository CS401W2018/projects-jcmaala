document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();

    const fullname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const birthdate = document.getElementById('birthdate').value;

    if(!fullname || !email){
        alert("You need a name and email!");
        return;
    }
    if(phone.length > 14){
        alert("Phone number invalid");
        return;
    }

    const formData = {
        name: fullname,
        email: email,
        phone: phone,
        birthdate: birthdate
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200){
            alert('Form submitted successfully.');
            document.getElementById('myForm').reset();
        }
        else if(xhr.readyState === 4){
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    console.log(formData);
});