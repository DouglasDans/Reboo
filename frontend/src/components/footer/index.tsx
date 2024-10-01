import Image from 'next/image'
import styles from './index.module.scss'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image className={styles.logo} src={"/reboo-logo-gray.svg"} height={50} width={50} alt='Logo do aplicativo Reboo em cor cinza' />
        <span>2024 Reboo Book Tracker. Desenvolvido por Douglas Nascimento.</span>
      </div>

      <div className={styles.linkIcons}>
        <Link href={"https://discord.com/users/684092812312313927"}>
          <Image className={styles.linkIcon} src={"/discord-icon.svg"} width={30} height={30} alt='ícone do discord.' />
        </Link>
        <Link href={"https://github.com/DouglasDans/Reboo"}>
          <Image className={styles.linkIcon} src={"/github-icon.svg"} width={30} height={30} alt='ícone do github.' />
        </Link>
        <Link href={"https://www.instagram.com/douglas.dans/"}>
          <Image className={styles.linkIcon} src={"/instagram-icon.svg"} width={30} height={30} alt='ícone do instagram.' />
        </Link>
        <Link href={"https://www.linkedin.com/in/douglasdans/"}>
          <Image className={styles.linkIcon} src={"/linkedin-icon.svg"} width={30} height={30} alt='ícone do linkedin.' />
        </Link>
      </div>
    </div>
  )
}