import React from 'react';
import stylesConteiner from '../common/styles/Conteiner.module.css';
import styles from './Contacts.module.css';


const Contacts = () => {
  return (
    <div className={styles.contactsBlock}>
      <div className={`${stylesConteiner.conteiner} ${styles.skillsConteiner}`}>
        <h2 className={styles.title}>My contacts</h2>
        <form className={styles.form}>
          <div className={styles.inputBlock}>
            <input className={styles.input} type="text" placeholder={'Name'}/>
            <input className={styles.input} type="text" placeholder={'Surname'}/>
            <input className={styles.input} type="phone" placeholder={'Phone'}/>
            <span> <input type="checkbox" name="option1" value="a1"/> Viber </span>
            <span> <input type="checkbox" name="option1" value="a1"/> Telegram </span>
            <span> <input type="checkbox" name="option1" value="a1"/> WhatsApps </span>
            <input className={styles.input} type="email" placeholder={'Email'}/>
            <input className={styles.input} type="text"  placeholder={'Message subject'}/>
            <textarea className={styles.textarea} placeholder={'Text message'}/>
          </div>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
