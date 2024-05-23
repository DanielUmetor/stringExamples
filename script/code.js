document.getElementById('idForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const idNumber = document.getElementById('idNumber').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    
    // Check if ID number is 13 characters long and numeric
    if (idNumber.length !== 13 || isNaN(idNumber)) {
        resultDiv.innerHTML = '<p class="error">ID number must be 13 numeric characters long.</p>';
        return;
    }
    
    // Extract day, month, and year
    let year = idNumber.slice(0, 2);
    let month = idNumber.slice(2, 4);
    let day = idNumber.slice(4, 6);
    
    // Determine gender
    let genderCode = parseInt(idNumber.charAt(6));
    let gender = genderCode >= 5 ? 'Male' : 'Female';
    
    // Display the data
    resultDiv.innerHTML = `
        <p>Day: ${day}</p>
        <p>Month: ${month}</p>
        <p>Year: 19${year}</p>
        <p>Gender: ${gender}</p>
    `;
});
