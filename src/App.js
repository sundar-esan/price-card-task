
import './App.css';
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="cardcontainer">
     <Card/>
     <Card1/>
     <Card2/>
    </div>
  );
}

export default App;

function Card(){
  return(
    <div className="card">
      <div className="cardhead">
      <p>FREE</p>
      <h2>$0<sub>/month</sub></h2>
      </div>
      <hr/>
      <ul className="crd">
        <li>Single User</li>
        <li>5GB Storage</li>
        <li>Unlimited Public Projects</li>
        <li>Community Access</li>
        <li>Unlimited Private Projects</li>
        <li>Dedicated Phone Support</li>
        <li>Free Subdomain</li>
        <li> Monthly Status Report</li>
       
      </ul>
      <Button className='button' style={{marginLeft:"30px"}} variant="contained">Button</Button>

    </div>
  )
}
function Card1(){
  return(
    <div className="card1">
      <div className="cardhead">
      <p>PLUS</p>
      <h2>$9<sub>/month</sub></h2>
      </div>
      <hr/>
      <ul className="crd1">
        <li><b>5 Users</b></li>
        <li>50GB Storage</li>
        <li>Unlimited Public Projects</li>
        <li>Community Access</li>
        <li>Unlimited Private Projects</li>
        <li>Dedicated Phone Support</li>
        <li>Free Subdomain</li>
        <li> Monthly Status Report</li>
        
      </ul>
      <Button className='button' style={{marginLeft:"30px"}}  variant="contained">Button</Button>

    </div>
  )
}
function Card2(){
  return(
    <div className="card2">
      <div className="cardhead">
      <p>PRO</p>
      <h2>$49<sub>/month</sub></h2>
      </div>
      <hr/>
      <ul className="crd2">
        <li><b>Unlimited User</b></li>
        <li>150GB Storage</li>
        <li>Unlimited Public Projects</li>
        <li>Community Access</li>
        <li>Unlimited Private Projects</li>
        <li>Dedicated Phoen Support</li>
        <li><b>Unlimited </b>Free Subdomains</li>
        <li>Monthly Status Reports</li>
      </ul>
      <Button className='button' style={{marginLeft:"30px"}}  variant="contained">Button</Button>

    </div>
  )
}
