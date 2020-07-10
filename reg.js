'use strict';

window.addEventListener('load', () => {

//    let form = document.getElementById('form1');
//    form.addEventListener('submit', () => {
//        
//        
//      let access = confirm('Do you agree?');
//        if (access === true) {
//            form.submit();
//        } else {
//            alert('Change password!');
//        }
//    });
    
    const controller = new Controller('login', 'pass1', 'pass2', 'email', 'form1');
    controller.activateLiseners();
    
    
    
    
    
});
