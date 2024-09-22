import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contacts from './Contacts'
import ContactDetails from './ContactDetails'
import SendMessage from './SendMessage'

function App() {

  return (
    <Routes>
        <Route path="/" element={ <Contacts/> } />
        <Route path="/contact/:id" element={ <ContactDetails/> } />
        <Route path="send-message/:id" element={ <SendMessage/> } />
      </Routes>
  )
}

export default App
