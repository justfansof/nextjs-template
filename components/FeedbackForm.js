import styles from './FeedbackForm.module.css'
import Button from '@components/Button'

export default function FeedbackForm() {
  return (
      <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="feedback"
        method="POST"
        action="/success"
      >
        <input type="hidden" name="form-name" value="feedback" />
          <p className={styles.hidden}>
              <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
          </p>
    
          <input id="firstName" className={styles['form-field']} type="text" name="firstName" placeholder="First Name" required />

          <input id="lastName" className={styles['form-field']} type="text" name="lastName" placeholder="Last Name" required />

          <input id="address" className={styles['form-field']} type="text" name="address" placeholder="Address" required />

          <input id="city" className={styles['form-field']} type="text" name="city" placeholder="City" required />

          <input id="state" className={styles['form-field']} type="text" name="state" placeholder="State" required />

          <input id="zip" className={styles['form-field']} type="number" name="zip" placeholder="Zip" required />

          <input id="email" className={styles['form-field']} type="email" name="email" placeholder="Email" required />

          <input id="phoneNumber" className={styles['form-field']} type="text" name="phoneNumber" placeholder="Phone Number" required />

          <textarea id="message" className={styles['message']} wrap="soft" name="message" placeholder="Message" required />
          
          <Button text="Submit" type="submit" backgroundColor="bg-blue-dark"  />
      </form>
  )
}
