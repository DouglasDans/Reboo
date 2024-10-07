'use client'

import Image from 'next/image'
import styles from './index.module.scss'
import Link from 'next/link'
import Icon from '@/components/icon'
import Button from '@/components/buttons/button'
import makeLogin from '@/actions/user.action'
import { useState } from 'react'

export default function LoginPage() {
  const [wrongPassword, setWrongPassword] = useState<boolean>(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setWrongPassword(false)
    event.preventDefault()

    const data = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    }
    await makeLogin(data).catch(() => {
      setWrongPassword(true)
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={'/reboo-logo.svg'} alt='Logo do Aplicativo' height={200} width={200} />
      </div>
      <div className={styles.right}>
        <div className={styles.topContainer}>
          <Link href={"/"}>
            <Icon name='arrow_back' />
          </Link>
        </div>

        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <h3>Fazer Login no Reboo</h3>

          <div className={styles.inputWrapper}>
            <div>
              <input required name='email' type="email" placeholder='Email' />
              <input required className={wrongPassword ? styles.wrongPassword : ""} name="password" type="password" placeholder='Senha' />

              {wrongPassword && <small className={wrongPassword ? styles.wrongPassword : ""}>Senha Incorreta</small>}
            </div>
            <Button fullWidth>Realizar Login</Button>
          </div>

          <h6>Ou</h6>

          <Button variant='secondary' fullWidth>
            <Image src={"/google-icon.svg"} alt='Logo do Google' height={20} width={20} />
            Fazer login com o Google
          </Button>

          <div className={styles.subLinkWrapper}>
            {/* <Link href={"/google.com"}>
              Esqueci minha senha
            </Link> */}
            <Link href={"/register"}>
              Criar nova conta
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}