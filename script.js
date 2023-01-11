const menuTag=qs('.menu-icon');
const headerTag=qs('.header');
const crossTag=qs('.cross-icon');
const navTag=qs('nav');
const mailsTag=document.querySelectorAll('.mails');
const ReadPageTag=qs('.ReadPage');
const mailConteinerTag=qs('.mails-container');
const mailsCreateTag=qs('.mail-create')
const backbtnTag=qs('.back-btn');
const floatbtnTag=qs('.createFloat-btn');
const btnbackTag=qs('.btn-back');
const seoTag=qs('.seo');
const dropper=qs('.dropper');
const dropboxTag=qs('.dropbox');
const deletebtnTag=qs('.deletebtn');
const deleteAlertTag=qs('.del-alert');
const AlertDarkTag=document.querySelectorAll('.alert-dark');
const AlertCancleBtn=qs('.alert-cancle')
function qs(el) {
    return document.querySelector(el);
 }
menuTag.addEventListener('click',()=>{
    let menuTagStyle=menuTag.style.display;
    if(menuTagStyle!='none'){
        navTag.style.left='0';
        document.querySelector('.mobile-nav').style.visibility='visible';
    }

})
crossTag.addEventListener('click',()=>{
    let crossTagStyle=crossTag.style.display;
    if(crossTagStyle!='none'){
        navTag.style.left='-100%';
        document.querySelector('.mobile-nav').style.visibility='visible';
        
    }

})
mailsTag.forEach(mailTag => {
    mailTag.addEventListener('click',()=>{
        mailConteinerTag.style.display='none';
        ReadPageTag.style.display='block';
        floatbtnTag.style.display='none';
    })
});

backbtnTag.addEventListener('click',()=>{
    mailConteinerTag.style.display='block';
    ReadPageTag.style.display='none';
    floatbtnTag.style.display='flex';
})
floatbtnTag.addEventListener('click',()=>{
    createSection();
})
btnbackTag.addEventListener('click',()=>{
    hidecreateSection();
})
function createSection(){
    mailConteinerTag.style.display='none';
    seoTag.style.display="none";
    headerTag.textContent='Create Message';
    mailsCreateTag.style.display='block';
    floatbtnTag.style.display='none';
}
function hidecreateSection(){
    mailConteinerTag.style.display='block';
    seoTag.style.display="flex";
    headerTag.textContent='Inbox';
    mailsCreateTag.style.display='none';
    floatbtnTag.style.display='flex';
}
dropper.addEventListener('click',()=>{
    if(dropboxTag.style.display=="block"){
        dropboxTag.style.display="none";
    }else{
        dropboxTag.style.display="block";
    }
});

    window.addEventListener('click',(e)=>{
        if(dropboxTag.style.display=='block'){
            if(dropboxTag.contains(e.target) ||dropper.contains(e.target)){
              return;
            }else{
                dropboxTag.style.display="none";
            };
        }
    })

deletebtnTag.addEventListener('click',deleteAlert);
function deleteAlert() {
    ForAlert('block');
}
AlertCancleBtn.addEventListener('click',cancle)
function cancle() {
    ForAlert('none');
}

function ForAlert(style) {
    deleteAlertTag.style.display=style;
    AlertDarkTag.forEach(element => {
        element.style.display=style;
    });;
}