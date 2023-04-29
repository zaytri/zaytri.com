import styles from '../../styles/Home.module.css'

export default function SocialButton({ classes = [], url = '', label = '' }) {
  return (
    <a className={[styles.social, 'row', ...classes].join(' ')} href={url}>
      <div className={styles.icon}></div>
      <p>{label}</p>
      <div className={styles.icon}></div>
    </a>
  )
}
