const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#item-name').value.trim();
    // const needed_funding = document.querySelector('#project-funding').value.trim();
    // const description = document.querySelector('#project-desc').value.trim();
  
    if (name) {
      const response = await fetch(`/api/items`, {
        method: 'POST',
        body: JSON.stringify({ item_name }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/tailgate/:id');
      } else {
        alert('Failed to create item');
      }
    }
  };
  
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };
  
  document
    .querySelector('.new-item-form')
    .addEventListener('submit', newFormHandler);
  
//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);
  