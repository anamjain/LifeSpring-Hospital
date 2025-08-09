function updateSpecialization() {
    const doctorSelect = document.getElementById("doctor");
    const specializationInput = document.getElementById("specialization");

    const selectedDoctor = doctorSelect.options[doctorSelect.selectedIndex].value;
}

function submitForm() {
    const patientName = document.getElementById("patientName").value;
    const doctor = document.getElementById("doctor").value;
    const specialization = document.getElementById("specialization").value;
    const date1 = document.getElementById("date1").value;
    const date2 = document.getElementById("date2").value;

    const appointmentData = {
        patientName,
        doctor,
        date1,
        date2
    };
    
    function submitForm() {
        window.location.href="file:///F:/Project/hospital/3.html";
    }
    
    
    const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    existingAppointments.push(appointmentData);
    localStorage.setItem('appointments', JSON.stringify(existingAppointments));

    alert('Appointment saved successfully!');
}
