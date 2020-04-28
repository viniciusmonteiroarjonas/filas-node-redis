import Mail from '../lib/Mail'

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user } = data
    await Mail.sendMail({
      from: 'Email test <email.test@gmail.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${user.name}, Bem vindo ao sistema !`,
    })
  },
}
