function validate(){
    let firstNameInput = document.getElementById('first name').value
    let lastNameInput = document.getElementById('last name').value
    let emailInput = document.getElementById('email').value
    let phoneInput = document.getElementById('phoneno').value
    let batchInput = document.getElementById('batchno').value
    let currmodInput = document.getElementById('currmod').value
    let conditionInput = document.getElementById('conditions').checked
    let error = false


    if(firstNameInput.length<=2){
        document.getElementById('first-name-invalid').style.display = 'block'
        error = true 
    }
    else{
        document.getElementById('first-name-invalid').style.display = 'none'
    }
   
    if(lastNameInput.length<=2){
        document.getElementById('last-name-invalid').style.display = 'block'
        error = true
    }
    
    else{
        document.getElementById('last-name-invalid').style.display = 'none'
    }

    if(emailInput && emailInput.includes("@") && emailInput.includes(".") && emailInput.lastIndexOf(".")<= emailInput.length - 3 && emailInput.indexOf('@')!==0 )
    {
        document.getElementById('email-invalid').style.display = 'none'
    }
    
    else{
        document.getElementById('email-invalid').style.display = 'block'
        error = true
     }

    if( !phoneInput.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/))
        {
            document.getElementById('phoneno-invalid').style.display = 'block'
            error = true
        }
    
    else{
        document.getElementById('phoneno-invalid').style.display = 'none'
    }

    if(batchInput==0){
        document.getElementById('batchno-invalid').style.display = 'block'
        error =true 
    }
    else{
        document.getElementById('batchno-invalid').style.display = 'none'
       
    }
    
    if(currmodInput==0){
        document.getElementById('currmod-invalid').style.display = 'block'
        error = true
    }
    else{
        document.getElementById('currmod-invalid').style.display = 'none'
    }
 
    if(!conditionInput){
        document.getElementById('conditions-invalid').style.display = 'block'
        error = true
    }
    else{
        document.getElementById('conditions-invalid').style.display = 'none'
        
    }

    if(!error){
       alert('Your details have been saved successfully')
       document.getElementById('first name').value = ''
       document.getElementById('last name').value = ''
       document.getElementById('email').value = ''
       document.getElementById('phoneno').value = ''
       document.getElementById('batchno').value = ''
       document.getElementById('currmod').value = ''
       document.getElementById('conditions').checked = ''

    }
}