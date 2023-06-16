import Card from 'react-bootstrap/Card'
import "./css/Home.css"
export default function Home() {
  return (
    <div className='HomePage'>
    <Card className='HomeCard'>
        <Card.Body>
            <Card.Title>Home</Card.Title>
            <Card.Text>
            Welcome to the home page!
            </Card.Text>
            <div className='ButtonsHomePage'>
                <a className='btn btn-secondary btn-lg active' href='/login' >Login</a>
                <a className='btn btn-secondary btn-lg active' href='/register' >Register</a>                
            </div>
        </Card.Body>
    </Card>        
    </div>


  )
}
