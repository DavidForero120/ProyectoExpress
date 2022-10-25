const bot1 = document.getElementById('butt1');
const bot2 = document.getElementById('butt2');
//const bot3 = document.getElementById('butt4');

/* parts*/
const about = document.getElementById('about');
const resum = document.getElementById('resume_');
const cont = document.getElementById('contact_');


bot1.addEventListener('click', ()=>{
      about.classList.toggle('active');  
      resum.classList.replace('res', 'resume_');
      cont.classList.replace('cont_off','contact_');
});

bot2.addEventListener('click', ()=>{
      resum.classList.toggle('res');   
      about.classList.replace('active', 'about');
      cont.classList.replace('cont_off','contact_');
});

/*bot3.addEventListener('click', ()=>{
      cont.classList.toggle('cont_off');
      about.classList.replace('active', 'about');
      resum.classList.replace('res', 'resume_');
})*/