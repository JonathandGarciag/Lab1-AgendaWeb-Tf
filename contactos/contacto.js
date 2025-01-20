document.addEventListener('DOMContentLoaded', function () {
    const modalLinks = document.querySelectorAll('.open-modal');
    const modalContainer = document.getElementById('modalContainer');
  
    modalLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); 
  
        const modalUrl = this.getAttribute('data-modal-url'); 
  
        fetch(modalUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Error al cargar el modal.');
            }
            return response.text();
          })
          .then(html => {
            modalContainer.innerHTML = html;
            const modalElement = modalContainer.querySelector('.modal'); 
            const modalInstance = new bootstrap.Modal(modalElement); 
            modalInstance.show(); 
          })
          .catch(err => console.error('Error al cargar el modal:', err));
      });
    });
});
  
document.addEventListener('DOMContentLoaded', function () {
    const modalLinks = document.querySelectorAll('.open-modal2');
    const modalContainer = document.getElementById('modalContainer');
  
    modalLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); 
  
        const modalUrl = this.getAttribute('data-modal-url'); 
  
        fetch(modalUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Error al cargar el modal.');
            }
            return response.text();
          })
          .then(html => {
            modalContainer.innerHTML = html;
            const modalElement = modalContainer.querySelector('.modal');
            const modalInstance = new bootstrap.Modal(modalElement); 
            modalInstance.show();
          })
          .catch(err => console.error('Error al cargar el modal:', err));
      });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modalLinks = document.querySelectorAll('.open-modal3');
    const modalContainer = document.getElementById('modalContainer');
  
    modalLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); 
  
        const modalUrl = this.getAttribute('data-modal-url'); 
  
        fetch(modalUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Error al cargar el modal.');
            }
            return response.text();
          })
          .then(html => {
            modalContainer.innerHTML = html; 
            const modalElement = modalContainer.querySelector('.modal'); 
            const modalInstance = new bootstrap.Modal(modalElement); 
            modalInstance.show(); 
          })
          .catch(err => console.error('Error al cargar el modal:', err));
      });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modalLinks = document.querySelectorAll('.open-modal4');
    const modalContainer = document.getElementById('modalContainer');
  
    modalLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); 
  
        const modalUrl = this.getAttribute('data-modal-url');
  
        fetch(modalUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Error al cargar el modal.');
            }
            return response.text();
          })
          .then(html => {
            modalContainer.innerHTML = html; 
            const modalElement = modalContainer.querySelector('.modal'); 
            const modalInstance = new bootstrap.Modal(modalElement);
            modalInstance.show(); 
          })
          .catch(err => console.error('Error al cargar el modal:', err));
      });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modalLinks = document.querySelectorAll('.open-modal5');
    const modalContainer = document.getElementById('modalContainer');
  
    modalLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); 
  
        const modalUrl = this.getAttribute('data-modal-url'); 
  
        fetch(modalUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Error al cargar el modal.');
            }
            return response.text();
          })
          .then(html => {
            modalContainer.innerHTML = html; 
            const modalElement = modalContainer.querySelector('.modal');
            const modalInstance = new bootstrap.Modal(modalElement); 
            modalInstance.show(); 
          })
          .catch(err => console.error('Error al cargar el modal:', err));
      });
    });
});
  