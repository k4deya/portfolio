function send(){
    
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxkhus1LY3iNdX0tgBr9o9-jM5JLyVlDp9wTIC_K_c17Mx3vrDAZzrJa04cUPJaBpQf/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Dziekuje. Twoje zgłoszenie zostało wysłane" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})