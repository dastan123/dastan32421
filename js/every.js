
const forms = document.querySelector('.form'),
      btn = document.querySelector('.logo-tag');

const message = {
      loading: 'images.jpg',
      success: 'Succesfully loaded',
      fail: "Failde"
};

postData(forms);


function postData(form) {
      form.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            width: 50px;
            height: 50px;
            `;
            modal.append(statusMessage);
            // showThanksModal(message.loading);
            const request = new XMLHttpRequest();
            request.open('POST', 'js/index.php');
            // request.setRequestHeader('Content-type',);
            const formData = new FormData(form);
            request.send(formData);

            request.addEventListener('load', () => {
                  if (request.status === 200) {
                        console.log(request.response);
                        // statusMessage.textContent = message.success;
                        form.reset();
                        // setTimeout(() => {
                        //       statusMessage.remove();
                        // }, 2000);
                        showThanksModal(message.success);
                        statusMessage.remove();
                  } else {
                        form.reset();
                        // statusMessage.textContent = message.fail;
                        // form.reset(); 
                        // setTimeout(() => {
                        //       statusMessage.remove();
                        // }, 2000);
                        showThanksModal(message.fail);
                  }
            });
      });
 }



 // Modal 

 const btnModal = document.querySelector('.btn-modal'),
       modal = document.querySelector('.modal'),
       modalDiolog = document.querySelector('.modal-diolog');


 function hideModal() {
      modal.classList.add('hide');
      modal.classList.remove('show');
      document.body.style.overflow = "";
}


function showModal() {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = "hidden";
      // clearInterval(timer);
}

hideModal();

// const timer = setTimeout(showModal, 5000);


btnModal.addEventListener('click', e => {

      if (modal.classList.contains('hide')) {
            showModal();
      } else {
            hideModal(modal);
      } 
});

      function showThanksModal(message) {
            const prevModalContent = document.querySelector('.modal-content');

            prevModalContent.classList.add('hide');
            showModal();

            const thanksModal = document.createElement('div');
            thanksModal.classList.add('modal-content');
            thanksModal.innerHTML = `
                  <div class="modal-content">
                       <h2>${message}</h2>
                       <button class="btn-close">close</button>
                  </div>;
            `;
            modalDiolog.append(thanksModal);
            setTimeout(() => {
            thanksModal.remove();
            prevModalContent.classList.add('show');
            prevModalContent.classList.remove('hide');
            hideModal();

            }, 4000);
      }


modal.addEventListener('click', e => {
      if (e.target.classList.contains('btn-close')) {
            hideModal(modal);
      }
      // if (e.target == modal) {
      //       hideModal();
      // }
});
 // Modal result 

 const div = document.createElement('div'),
      body = document.querySelector('body');

 div.innerHTML = `
      <p class="btn-close">Cloose</p>
 `;

 div.style.cssText = `
      margin-left: 150px;
      margin-top: -40px;
      heigth: 20px;
      background-color: red;
 `;

 forms.append(div);


 const setting = document.querySelector('.settings-list');

 const button = document.createElement('button'),
       about = document.querySelector('.about-section');

 button.textContent = `Switch to dark mode`;

button.classList.add('button');

button.addEventListener('click', e => {
      if (body.classList.contains('black') && about.classList.contains('black')) {
            body.classList.remove('black');
            about.classList.remove('black');
      } else {
            body.classList.add('black');
            about.classList.add('black');
            } 
});

setting.addEventListener('click', e => {
      setting.append(button);
});


const list = document.querySelectorAll('.li'),
      listParent = document.querySelector('.nav-list'),
      section = document.querySelectorAll('.my-page');

function hidePage() {
      section.forEach(page => {
            page.style.display = 'none';
      });

      list.forEach(item => {
            item.classList.remove('active');
      });
}


function showPage(i = 0) {
      section[i].style.display = 'block';

      list[i].classList.add('active');
}

hidePage();
showPage();

listParent.addEventListener('click', e =>{
      const target = e.target;

      if (target && target.classList.contains('li')) {
            list.forEach((item, i) => {
                  if (target == item) {
                        hidePage();
                        showPage(i);
      console.log('helo');

                  }
            });
      }

});

