{
  const redirectButton = document.getElementById('302')
  redirectButton.addEventListener('click', async () => {
    const res = await axios.post('/api/302')
    console.log(res)
  })
}

{
  const redirectButton = document.getElementById('303')
  redirectButton.addEventListener('click', async () => {
    const res = await axios.post('/api/303')
    console.log(res)
  })
}

{
  const redirectButton = document.getElementById('307')
  redirectButton.addEventListener('click', async () => {
    const res = await axios.post('/api/307')
    console.log(res)
  })
}
