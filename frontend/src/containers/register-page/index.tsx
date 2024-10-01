import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.scss';
import Icon from '@/components/icon';
import Button from '@/components/buttons/button';
import makeRegister from '@/actions/register.action';

export default function RegisterPage() {
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
        <form action={makeRegister} className={styles.registerForm}>
          <h3>Registrar no Reboo</h3>

          <div className={styles.inputWrapper}>
            <div>
              <input name="name" type="text" placeholder='Nome' />
              <input name='email' type="email" placeholder='Email' />
              <input name="password" type="password" placeholder='Senha' />
              <input name="confirmPassword" type="password" placeholder='Confirmar Senha' />
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