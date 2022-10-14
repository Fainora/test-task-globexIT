function openForm(data) {
    obj = JSON.parse(data);

    document.getElementById('name').innerHTML = obj.name;
    document.getElementById('phone').innerHTML = obj.phone;
    document.getElementById('email').innerHTML = obj.email;
    document.getElementById('hire_date').innerHTML = obj.hire_date;
    document.getElementById('position_name').innerHTML = obj.position_name;
    document.getElementById('department').innerHTML = obj.department;
    document.getElementById('address').innerHTML = obj.address;
    
    document.getElementById('pop-up').style.display = 'block';
}

function closeForm(event) {
    let modal = document.getElementById('pop-up');
    let close = document.getElementById('close');

    if (event.target == modal || event.target == close) {
        document.getElementById('pop-up').style.display = 'none';
    }
}