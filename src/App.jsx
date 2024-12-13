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

  function toggleActiveRow(id, value) {
    console.log('toggleActiveRow', id, value);
    setRecords(records.map((record) => {
      if (record.id === id) {
        return {
          ...record,
          active: value
        }
      }
      return record
    }))
  }

  return (
    <>
      <GridComponent records={records} toggleActiveRow={toggleActiveRow} />
    </> 
  )
}

export default App
