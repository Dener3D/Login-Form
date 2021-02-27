import { useEffect, useState } from 'react';
import styles from '../styles/components/Form.module.css';



export function Form(){
    const [IsLogging, setIsLogging] = useState(false);

    function openLoader(){
        setIsLogging(true);
    }

    return(
        <div className={styles.container}>
            <div className={styles.FormContainer}>
            <div><img src="user.png" alt="user image"/></div>
            <input className={styles.InputUsername} type="text"/>
            <input className={styles.InputPassword} type="password"/>
            <button 
            onClick={openLoader}
            type="button">Login</button>
            <p>Forgot username/password?</p>
            {IsLogging && <div className={styles.loader} />}
            <p>Create a new account</p>
            
        </div>
        </div>
        
    );
}