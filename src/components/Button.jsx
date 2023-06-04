// import '@/styles/components/Button.scss'

export default function Button({ children, onClick, primary, ...props }) {
  const isPrimary = primary || false
  return (
    <button className={`btn ${primary ? 'primary' : 'secondary'}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
