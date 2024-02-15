"use strict"

/* used this as prompt template
https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt
used this to format output:
https://www.freecodecamp.org/news/javascript-multiline-string-how-to-create-multi-line-strings-in-js/
*/

function calculate() 
{

    let student_response
    let residency_response
    let registration_fee
    let tuition_rate
    let student_type = prompt("Student Type (B/M):");
        if (student_type == "B"){
        student_response = "Bachelor"
        }
        if (student_type == "M"){
        student_response = "Master"
        }
    let residency = prompt("Residency(I/O):");
        if (residency == "I"){
        residency_response = "In-state"
    }
        if (residency == "O"){
        residency_response = "Out of State"      
    }
    let num_of_credits = prompt("Number of Credits Taking:")
    /* To find registration fees and tuition rate */
        if (residency == "I" && student_type == "B") {
        registration_fee = 200
        tuition_rate = 350
    }
        if (residency == "I" && student_type == "M"){
        registration_fee = 300
        tuition_rate = 450
    }
        if (residency == "O" && student_type == "B"){
        registration_fee = 600
        tuition_rate = 700
    }
        if (residency == "O" && student_type == "M"){
        registration_fee = 900
        tuition_rate = 900
        }
    /* To calculate tuition and total fee*/
    let tuition = tuition_rate * num_of_credits
    let total = registration_fee + tuition

    /*To print results */
    document.write('Please find your results below:')
    document.write('<br>')
    document.write('<br>')
    document.write('Student type: ' + student_response)
    document.write('<br>')
    document.write('<br>')
    document.write('Residencey: ' + residency_response)
    document.write('<br>')
    document.write('<br>')
    document.write('Credits Taking: ' + num_of_credits)
    document.write('<br>')
    document.write('<br>')
    document.write('Registration Fee ($): ' + registration_fee)
    document.write('<br>')
    document.write('<br>')
    document.write('Tuition Rate ($/credit): ' + tuition_rate)
    document.write('<br>')
    document.write('<br>')
    document.write('Tuition ($) : ' + tuition)
    document.write('<br>')
    document.write('<br>')
    document.write('Total ($): ' + total)
    
    }
