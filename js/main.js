const lists = document.querySelectorAll('.list')

function addTask () {
  const btn = document.querySelector('.add__btn')
  const addBtn = document.querySelector('.add__item-btn')
  const cancelBtn = document.querySelector('.cancel__item-btn')
  const textArea = document.querySelector('.textarea')
  const form = document.querySelector('.form')

  let value

  btn.addEventListener('click', () => {
    form.style.display = 'block'
    btn.style.display = 'none'
    addBtn.style.display = 'none'
  })
}

addTask()