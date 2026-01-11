import axios from 'axios'

export default class Email {
  async send(subject, content) {
    console.log(content)
    await axios.post(
      'https://api.courier.com/send',
      {
        message: {
          to: { email: 'femalepowerhousearm@gmail.com' },
          content: {
            title: subject,
            body: content.value,
          },
        },
      },
      {
        headers: {
          Authorization: 'Bearer pk_prod_G3YNWTF6RTMZT7QBSHGB650WTJYC',
        },
      }
    )
  }
}
