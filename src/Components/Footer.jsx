import style from '../Styles/footer.module.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <footer >
        <h2 className={style.fo}>Footer</h2>
    </footer >
  )
}

export default Footer