
import { useState } from 'react';
import './App.css';
import { doctorsData, hospitalData } from './component/Doctor/Doc';
import Home from './component/Home';
import DataContext from './component/Datacontext';
import { patientsData } from './component/Doctor/Doc';

function App() {
  const [doctorData,setdoctorData]=useState([...doctorsData])
  const [patients,setpatients]=useState([...patientsData])
  const [open, setOpen] = useState(false);
  const [events,setEvents] = useState([...hospitalData])
console.log(events)
  return (
    <div className="App">
      <DataContext.Provider value={{doctorData,setdoctorData,patients,setpatients,open,setOpen,events,setEvents}}>
     <Home/>
     </DataContext.Provider>
    </div>
  );
}

export default App;
