// code to make proggrece in skills page 
document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress-done');

    progressBars.forEach(bar => {
        const done = bar.getAttribute('data-done'); // قراءة القيمة من الخاصية data-done
        bar.style.width = done + '%'; // ضبط عرض الشريط بناءً على النسبة
        bar.style.opacity = 1; // جعل الشريط مرئيًا
    });
});
//************************************** */
let form = document.getElementById("input-contact-section");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let name = document.querySelector(".name").value
     let email = document.querySelector(".email").value
     let number = document.querySelector(".number").value
     let title = document.querySelector(".titleMsg").value
     let textMain = document.querySelector(".input-text").value
     console.log(name,email,number,title,textMain);
     let msgTelegram = `name : ${name} %0A email is : ${email} %0A the numberPhone : ${number} %0A the title is : ${title} %0A the text masegge is :  ${textMain}`;
     let token = "8056771436:AAGa_JnAzgCoybpD8AOH710shfk6oeQ0q0g";
     let chatId = -1002566956165 ; 
     var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${msgTelegram}/`
     let api = new XMLHttpRequest();
     api.open("GET",url,true);
     api.send();
     alert("send form is true")
     console.log("tm programmer omar torky ");

})
/*********/
// function to show photo in full scren 
function openModal(image) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modalImage').src = image.src;
}
function openModal(image) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modalImage').src = image.src;
}

// إضافة مستمع الأحداث للمودال
document.getElementById('modal').addEventListener('click', function(event) {
    // إذا كان النقر على المودال نفسه وليس على الصورة
    if (event.target === this) {
        this.style.display = 'none';
    }
});

// منع إغلاق المودال عند النقر على الصورة
document.getElementById('modalImage').addEventListener('click', function(event) {
    event.stopPropagation();
});
 