import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Error</h1>
      <br />
      <h2>Page Not Found</h2>
      <br />
      <div>
        <a onClick={() => navigate('/')}>Click back to Home</a>
      </div>
    </div>
  )
}
