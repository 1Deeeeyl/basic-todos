// import React from 'react'

function Modal({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors
    ${open ? "visible bg-black/20" : "invisible"}`}
    >
      <div className={`bg-white rounded-3xl shadow p-6 transition-all text-center flex flex-col items-center
        ${open ? 'scale=100 opacity-100': 'scale-125 opacity-0'}`}
        onClick={(e)=>{e.stopPropagation()}}> {children}</div>
    </div>
  );
}

export default Modal;
