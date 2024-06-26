function calculateAge() {
    var year = document.getElementById('year').value;
    var month = document.getElementById('month').value;
    var day = document.getElementById('day').value;

    if (!year || !month || !day) {
        alert("الرجاء إدخال السنة والشهر واليوم.");
        return;
    }

    var birthDate = new Date(year, month - 1, day);
    var currentDate = new Date();

    if (birthDate > currentDate) {
        alert("تاريخ الميلاد لا يمكن أن يكون في المستقبل.");
        return;
    }

    var years = currentDate.getFullYear() - birthDate.getFullYear();
    var months = (years * 12) + (currentDate.getMonth() - birthDate.getMonth());
    var totalDays = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24));
    var weeks = Math.floor(totalDays / 7);
    
    // التعامل مع الأيام والشهور إذا كانت الأيام الحالية أقل من أيام تاريخ الميلاد
    if (currentDate.getDate() < birthDate.getDate()) {
        months--;
        totalDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate() - birthDate.getDate() + currentDate.getDate();
    }

    if (currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        years--;
    }

    // تحديث عناصر DOM
    document.getElementById('scren1').textContent = years;
    document.getElementById('scren2').textContent = months;
    document.getElementById('scren3').textContent = weeks;
    document.getElementById('scren4').textContent = totalDays;
}

function clearFields() {
    document.getElementById('year').value = '';
    document.getElementById('month').value = '';
    document.getElementById('day').value = '';
}
