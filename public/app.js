// write the logic for when a user clicks the submit button to create a new burger:
document.getElementById('submit').addEventListener('click', event => {
  event.preventDefault()

  console.log('works')
  axios.post('api/burgers', {
    burger_name: document.getElementById('burger').value,
    devoured: false
  })
    .then(({ data }) => {
      // now create a li element for the burger to append into the not devoured list
      let burgerElem = document.createElement('li')
      burgerElem.id = data.id
      burgerElem.className = 'list-group-item list-group-item-primary'
      burgerElem.innerHTML = `
        Burger Name: ${document.getElementById('burger').value}
        <button class="btn btn-success devour">✓</button>
      `
      // now append the burger list element to the not devourded unordered list 
      document.getElementById('notDevoured').append(burgerElem)
    })
    .catch(err => console.log(err))
})

// Next we will write the logic to update a burger, namely 'devouring' it or 'deatroying' it
document.addEventListener('click', event => {
  event.preventDefault()
  if (event.target.classList.contains('devour')) {
    console.log('ping')
  } else if (event.target.classList.contains('delete')) {
    console.log('ginp')
  }
})