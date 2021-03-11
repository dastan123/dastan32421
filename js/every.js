'use strict';

const success = document.querySelector('.success-content'),
failure = document.querySelector('.fail-content');

const forms = document.querySelector('.form'),
      btn = document.querySelector('.logo-tag'),
      modalContent = document.querySelector('.modal-content');

const message = {
      loading: 'Loading',
      success: 'Succesfully loaded',
      fail: "Failde"
};

postData(forms);

function postData(form) {
      form.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMessage = document.createElement('div');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', 'js/index.php');
            // request.setRequestHeader('Content-type',);
            const formData = new FormData(form);
            request.send(formData);

            request.addEventListener('load', () => {
                  if (request.status === 200) {
                        console.log(request.response);
                        statusMessage.textContent = message.success;
                        // form.reset();
                        setTimeout(() => {
                              statusMessage.remove();
                        }, 2000);
                        showModal(success);
                  } else {
                        statusMessage.textContent = message.fail;
                        form.reset(); 
                        showModal(failure);
                        hideModal(success);
                  }
            });
      });
 }



 // Modal 

 const btnModal = document.querySelector('.btn-modal'),
       modal = document.querySelector('.modal');

 function showModal(item) {
       item.classList.add('show');
       item.classList.remove('hide');
 }

 function hideModal(item) {
      item.classList.add('hide');
      item.classList.remove('show');
}

hideModal(modal);

btnModal.addEventListener('click', e => {
      hideModal(success);
      hideModal(failure);
      if (modal.classList.contains('hide')) {
            showModal(modal);
      } else {
            hideModal(modal);
      } 
      if (forms.classList.contains('hide')) {
            showModal(forms);
      } else {
            hideModal(forms);
      }
});

 // Modal result 
