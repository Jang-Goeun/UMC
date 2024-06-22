import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import '../App.css'

function Modal({ isOpen, onClose }) {
  const [modalDisplay, setModalDisplay] = useState('none');
  return (
    <>
      <div className="modal" style={{ display: isOpen ? 'flex' : 'none' }}>
        <div className="modal-content">
            <div className="modal-title">안녕하세요</div>
            <p>모달 내용은 어쩌고 저쩌고..</p>
            <div className="modal-close">
            <button id="close" onClick={() => { console.log("모달이 꺼짐"); onClose(); }}>닫기</button>
            </div>
        </div>
        </div>
    </>
  )
}

export default Modal
