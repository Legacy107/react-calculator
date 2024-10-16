import React from 'react';
import styles from '../style/components.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <h3>Welcome to our page!</h3>

      <div>
        Our vision for
        <b> Math Magicians, </b>
        fuelled by our Purpose, is to be the most trusted and relevant professional services
        business in the world - one that attracts the best talent and combines the most innovative
        technologies, to help organisations build trust with their stakeholders and deliver
        sustained outcomes.
      </div>
      <div>
        We’re calling our new global strategy The New Equation, and it addresses the major
        challenges shaping the world today including technological disruption, climate change,
        fractured geopolitics, social tension and the continuing needs organisations are grappling
        with.
      </div>
      <div>
        First is the urgency to successfully respond to these shifts by delivering sustained
        outcomes which create value for today and tomorrow for organisations, their stakeholders,
        their customers and broader society. Second is the need to build trust at a time when it is
        both more fragile and more complicated to earn.
      </div>
    </div>
  );
}
