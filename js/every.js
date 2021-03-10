'use strict';
const forms = document.querySelector('.form'),
      btn = document.querySelector('.logo-tag');

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
                        form.reset();
                        setTimeout(() => {
                              statusMessage.remove();
                        }, 2000);
                  } else {
                        statusMessage.textContent = message.fail;
                  }
            });
      });


}