import { useState } from "react";
import styles from "./Homepage.module.scss";
import logo from "../../media/logo.png";
import {FaFacebookF, FaTwitter} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai'
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore"; 

const Homepage = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addDoc(collection(db, "mails"), {
          mail: email
        })
        setEmail('');
    }

  return (
    <>
      <div className={styles.home}>

      <div></div>
        <div></div>

        <div className={styles.logo}>
          <img src={logo} alt=""></img>
        </div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>

        <div className={styles.header}>
          <h1>Meet awesome people. Recreate amazing experiences.</h1>
        </div>
        <div >
          <p className={styles.body}>With more people craving social connections and physical experiences,
          Recreate gives you the opportunity to find people with similar
          interests, and discover a world teeming with experiences.</p>
        </div>
        <div className={styles.waitlist}>
        <form onSubmit={handleSubmit}>
          <input placeholder="Your email" value={email} type="email" onChange={(e) => {setEmail(e.target.value)}}></input>
          <button type="submit">JOIN THE WAITLIST</button>
          </form>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

        <footer>
            <div><p>©2021 Recreate. All rights reserved. </p></div>
            <div></div>
            <div>
                <FaFacebookF className={styles.icons} />
                <FaTwitter className={styles.icons} />
                <AiFillInstagram className={styles.icons} />
            </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;
