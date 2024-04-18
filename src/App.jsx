import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './Component/Card/Card'

function App() {
 
  return (
    <div className='card'>
      <Detail name={'Minali Wickramasinghe'} bgcolor='#eccc68'
        description={"Went to Yasodara Devi Balika Maha Vidyalaya, Gampaha. Like to Listning Music, Reading Books.."}
        address={'Kirindiwela'}
        age={'25'}/>

      <Detail name={'Piyumi Kaveesha'} bgcolor='#ff7f50'
        description={"Went to Yasodara Devi Balika Maha Vidyalaya, Gampaha. Studying at Sabaragamuwa University "}
        address={'Radawana'}
        age={'26'}/>  

      <Detail name={'Malmi Tharika'} bgcolor='#ff6b81'
        description={"Went to Yasodara Devi Balika Maha Vidyalaya, Gampaha. "}
        address={'Anuradhapura'}
        age={'26'}/>    

      <Detail name={'Manu Vimukthini'} bgcolor='#7bed9f'
        description={"Went to Yasodara Devi Balika Maha Vidyalaya, Gampaha. Learning Japanese. "}
        address={'Divulapitiya'}
        age={'26'}/>    

      <Detail name={'Malhari Subasinghe'} bgcolor='#2ed573'
        description={"Went to Yasodara Devi Balika Maha Vidyalaya, Gampaha. Works as a post office manager"}
        address={'Miriswatta'}
        age={'25'}/>  

      <Detail name={'Madhura Wickramasinghe'} bgcolor='#1e90ff'
        description={"Went to Bandaranayake College, Gampaha. Lives in Rwanda"}
        address={'Rwanda'}
        age={'40'}/> 

      <Detail name={'Risinu Sanyuru'} bgcolor='#5758BB'
        description={"Studying in the grade 8 at Kiridivela Central College"}
        address={'Kiridiwela'}
        age={'12'}/>   

      <Detail name={'Inudi Sethumsa'} bgcolor='#833471'
        description={"Studying in the grade 2 at Sangamiththa Balika Vidyalaya"}
        address={'Kiridiwela'}
        age={'6'}/>  

      <Detail name={'Malindu Methsara'} bgcolor='#8854d0'
        description={"As an Audit Trainee in an Audit Firm"}
        address={'Matara'}
        age={'24'}/>  
      
      <Detail name={'Chamara Nakandala'} bgcolor='#747d8c'
        description={"Audit Supervisor"}
        address={'Nittabuwa'}
        age={'25'}/>    
    </div>
  )
}

export default App
