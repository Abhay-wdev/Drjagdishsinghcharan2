import Link from 'next/link'
import React from 'react'

function Bookbutton() {
  return (
    <Link href='/book-appointment ' >
    <button  className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-lg">
    Book Your Consultation
  </button>
  </Link>
  )
}

export default Bookbutton;
