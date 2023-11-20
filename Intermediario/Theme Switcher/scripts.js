const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    console.log('Checkbox alterado!')
    document.body.classList.toggle('dark')
})
