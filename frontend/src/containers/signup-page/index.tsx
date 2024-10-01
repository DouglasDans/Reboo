import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.scss';
import Icon from '@/components/icon';
import Button from '@/components/buttons/button';

export default function SignUpPage() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={'/reboo-logo.svg'} alt='Logo do Aplicativo' height={200} width={200} />
      </div>
      <div className={styles.right}>
        <div className={styles.topContainer}>
          <Link href={"/login"}>
            <Icon name='arrow_back' />
          </Link>
        </div>
        <form action="" className={styles.registerForm}>
          <h3>Registrar no Reboo</h3>

          <div className={styles.inputWrapper}>
            <div>
              <input type="text" placeholder='Nome' />
              <input type="email" placeholder='Email' />
              <input type="password" placeholder='Senha' />
              <input type="password" placeholder='Confirmar Senha' />
            </div>
            <Button fullWidth>Registrar</Button>
          </div>

          <h6>Ou</h6>

          <Button variant='secondary' fullWidth>
            <Image src={"/google-icon.svg"} alt='Logo do Google' height={20} width={20} />
            Registrar com Google
          </Button>
        </form>
      </div>
    </div>
  );
}