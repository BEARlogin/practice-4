import { useState } from 'react'
import './App.css'
import { GridComponent } from './components/GridComponent'


const dataSource = [
  {
    firstName: 'John',
    lastName: 'Doe',
    active: false,
    id: 1,
  },
  {
    firstName: 'Mary',
    lastName: 'Moe',
    active: true,
    id: 2,
  },
  {
    firstName: 'July',
    lastName: 'Dooley',
    active: true,
    id: 3,
  },
]


function App() {

  const [records, setRecords] = useState(dataSource);

  return (
    <>
      <GridComponent records={records} />
    </> 
  )
}

export default App
