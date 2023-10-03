import React from 'react'
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom'

function Letter_out2() {
  return (
  <>
    <div className='min-h-screen flex flex-col'>
      <Navbar/>
        <main className='flex flex-col items-center justify-center'>
          <div className='w-screen text-center m-8'>
            <h5 className='font-bold text-3xl'> LETTER OUT</h5>
            <h5 className='font-bold text-3xl'>(Justification)</h5>
          </div>
          <div className='bg-[#F0F0F0] w-11/12 h-auto m-8 border-2'>
            <div className='flex flex-row items-center justify-center h-16 border-b-2 border-black'>
              <Link to='/letterout1' className='flex justify-center h-full items-center w-1/4 hover:bg-blue-500 hover:text-white' href='#'>Surat Kuasa</Link>
              <Link to='/letterout2' className='flex justify-center h-full items-center bg-white w-1/4 hover:bg-blue-500 hover:text-white' href='#'>Surat Justifikasi</Link>
              <Link to='/letterout3' className='flex justify-center h-full items-center w-1/4 hover:bg-blue-500 hover:text-white' href='#'>Surat Kontrak</Link>
              <Link to='/letterout4' className='flex justify-center h-full items-center w-1/4 hover:bg-blue-500 hover:text-white' href='#'>Surat Umum</Link>
            </div>
            <div className='p-24'>
              <div className='flex mb-4'>
                <label htmlFor='keterangan' className='w-1/3'>Keterangan:</label>
                <input type='text' id='keterangan' name='keterangan' className='w-2/3 border p-2' />
              </div>
              <div className='flex mb-4'>
                <label htmlFor='input1' className='w-1/3'>No.:</label>
                <input type='text' id='input1' name='input1' className='w-2/3 border p-2' />
              </div>
              <div className='flex mb-4'>
                <label htmlFor='tanggal' className='w-1/3'>Tanggal:</label>
                <input type='date' id='tanggal' name='tanggal' className='w-2/3 border p-2' />
              </div>
              <div className='flex mb-4'>
                <label htmlFor='input2' className='w-1/3'>Perihal:</label>
                <input type='text' id='input2' name='input2' className='w-2/3 border p-2' />
              </div>
              <div className='flex mb-4'>
                <label htmlFor='input3' className='w-1/3'>No. Justifikasi:</label>
                <input type='text' id='input3' name='input3' className='w-2/3 border p-2' />
              </div>
              <div className='flex mb-4'>
                <label htmlFor='keterangan' className='w-1/3'>Keterangan:</label>
                <input type='text' id='keterangan' name='keterangan' className='w-2/3 border p-2' />
              </div>
              <div className='flex mb-4'>
                <label htmlFor='file' className='w-1/3'>File:</label>
                <input type='file' id='file' name='file' className='w-2/3 border p-2' />
              </div>
              <div className='flex justify-start'>
              <Link to='/list_letterout'>
                  <button type='submit' className='bg-[#029096] hover:bg-blue-700 text-white font-bold py-4 px-8 rounded'>Submit</button>
                </Link>
              </div>
            </div>
          </div>
        </main>
    </div>
  </>
  )
}

export default Letter_out2