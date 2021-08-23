import { IonButton } from '@ionic/react';
import { useState } from 'react';
import styles from './login.module.css';

const Login: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.container}>
      <div className={`mx-2 px-2 py-1 pb-1 glass-bg rounded card-shadow`}>
        <label>Brugernavn</label>
        <input className="w-full card-shadow" value={userName} onChange={(e) => setUserName(e.target.value)} />

        <label>Adgangskode</label>
        <input className="w-full card-shadow" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <IonButton className="w-full bold" routerLink="/episodes">
          Login
        </IonButton>
      </div>
    </div>
  );
};
export default Login;
