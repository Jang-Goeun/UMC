import { useState } from 'react'
import Modal from './components/modal';
import './App.css'

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button id="open" onClick={() => {console.log("모달이 켜짐"); setModalOpen(true);}}>버튼 열기</button>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

export default App
