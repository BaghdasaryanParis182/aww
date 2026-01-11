import Email from '../../services/backend/Email'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message, formSubject } = req.body
    try {
      const emailService = new Email()

      await emailService.send(formSubject, {
        value: `Անուն: ${name}\nԷլ. հասցե: ${email}\nԹեմա: ${subject}\nՀաղորդագրություն: ${message}`,
      })

      return res.status(201).json({})
    } catch (error) {
      return res.status(400).json({ error })
    }
  }

  return res.status(404).json({})
}
