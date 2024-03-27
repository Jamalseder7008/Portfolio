//initializes all controllers

const initControllers = function(){
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', submitEvent);
}

const submitEvent = function(){
    const formData = new Object();
    formData[entry1] = document.getElementById('Name').value
    formData[entry2] = document.getElementById('Email').value
    formData[entry3] = document.getElementById('Message').value

    postToGoogleDB(formData);
}

function showChoice(item) {
    document.getElementById("dropdownMenu1").innerHTML = item.innerHTML;
}


initControllers();