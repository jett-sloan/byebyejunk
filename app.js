
  // 1) Initialize EmailJS with your user ID (get this from your EmailJS dashboard)
  

  // 2) Wait for the DOM to be ready
  document.addEventListener('DOMContentLoaded', function(){
     emailjs.init('ngHLolmjUmhv-nAiq');
    // target your form (you can also give it an id instead of using 'form')
    const form = document.querySelector('form');
 if (!form) {
    console.error("Form with id 'contact-form' not found.");
    return;
  }
    form.addEventListener('submit', function(event){
      event.preventDefault();

      // 3) Send the form using your service ID and template ID

      emailjs.sendForm("service_dtofyo8", "template_c2z1dhp", this)
      .then(() => {
        alert("Message sent!");
        this.reset();
      })
      .catch((err) => {
        alert("Failed to send message.");
        console.error(err);
      });
  });
      
  });

