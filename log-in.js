document.getElementById('btn-submit').addEventListener('click',function(){
    const emailBox=document.getElementById('my-email');
    const email= emailBox.value;
    const passwordBox=document.getElementById('my-pass');
    const password= passwordBox.value;
    if(email === 'aliimran718779@gmail.com' && password === '1234'){
        window.location.href= 'bank.html';
    }
    else{
        alert('Invalid User');
    }


})

