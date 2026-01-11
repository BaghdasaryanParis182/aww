import Email from '../../services/backend/Email'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, formSubject, women } = req.body
    try {
      const emailService = new Email()

      await emailService.send(formSubject, {
        value: `Էլ. հասցե: ${email}\n հարցվող: ${women}`,
      })

      return res.status(201).json({})
    } catch (error) {
      return res.status(400).json({ error })
    }
  }

  return res.status(404).json({})
}
