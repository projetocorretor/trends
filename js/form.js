$(document).ready(function () {
  emailjs.init('-tEeEkGS-yfpbQMUa')

  const errorMsg = $('#error_msg').hide()
  const successMsg = $('#success_msg').hide()

  $('#phone').mask('(00) 00000-0000');

  $('#form').on('submit', (e) => {
    e.preventDefault()

    const name = $('#name').val()
    const phone = $('#phone').val()
    const email = $('#email').val()

    errorMsg.hide()

    // Send email
    const formParams = {
      from_name: email,
      to_name: 'dsi@dsimoveis.com',
      name,
      email,
      celphone: phone,
    }
    emailjs.send('bioarq', 'template_trends', formParams)
      .then(function () {
        successMsg.show()
      }, function (error) {
        console.log(error);
        alert('Não foi possivel enviar o email')
      });
  })
})
