'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.scss';
import Icon from '@/components/icon';
import Button from '@/components/buttons/button';
import makeRegister from '@/actions/register.action';
import { redirect, useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter()
  const [wrongPassword, setWrongPassword] = useState<boolean>(false)
  const [emailInUse, setEmailInUse] = useState<boolean>(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setWrongPassword(false)

    const data = {
      name: event.currentTarget.nameUser.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
      confirmPassword: event.currentTarget.confirmPassword.value,
    }

    if (data.password !== data.confirmPassword) {
      setWrongPassword(true)
      return null
    } else {
      // makeRegister(data)
    }

    // console.log(userId);
    // router.push(`/${userId}/dashboard`)
  }


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
        <form onSubmit={handleSubmit} className={styles.registerForm}>
          <h3>Registrar no Reboo</h3>

          <div className={styles.inputWrapper}>
            <div>
              <input required name="nameUser" type="text" placeholder='Nome' />
              <input required name='email' type="email" placeholder='Email' />
              <input required className={wrongPassword ? styles.wrongPassword : ""} name="password" type="password" placeholder='Senha' />
              <input required className={wrongPassword ? styles.wrongPassword : ""} name="confirmPassword" type="password" placeholder='Confirmar Senha' />

              {wrongPassword && <small className={wrongPassword ? styles.wrongPassword : ""}>As senhas não coincidem</small>}
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