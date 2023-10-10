import React from 'react'
import Navbar from '../components/navbar'


function Letterin() {

    if(!localStorage.getItem('token')){
        return window.location.href = '/login';
      }
  return (
    <div className='min-h-screen flex flex-col'>
        <Navbar/>
        <main className='min-h-screen flex flex-col items-center justify-center'>
            <div>
                <h1 className='font-bold text-center text-5xl text-primary m-8'>LETTER IN</h1>
            </div>
            <div className='max-w-7xl w-full mx-auto bg-gray p-7 space-y-5'>
                <div className='flex'>
                    <div className='flex items-center w-1/3'>
                        <label className='w-1/3'>NO</label>
                        <input type='text' className='form-input w-2/3 rounded border border-gray-400'/>
                    </div>
                    <div className='flex items-center w-1/3'>
                        <label className='w-1/3 pl-8 pr-2'>TGL DITERIMA</label>
                        <input type='date' className='w-2/3 rounded border border-gray-400'/>
                    </div>
                </div>
                <div className='flex items-center w-1/3'>
                    <label className='w-1/3'>DARI</label>
                    <input type='text'className='w-2/3 rounded border border-gray-400'/>
                </div>
                <div className='flex'>
                    <div className='flex items-center w-1/3'>
                        <label className='w-1/3'>NO</label>
                        <input type='text' className='w-2/3 rounded border border-gray-400'/>
                    </div>
                    <div className='flex items-center w-1/3'>
                        <label className='w-1/3 pl-8'>TGL SURAT</label>
                        <input type='date' className='w-2/3 rounded border border-gray-400'/>
                    </div>
                    <div className='flex items-center w-1/3'> 
                        <label className='w-24 pl-8'>ND</label>
                        <input type='text' className='w-full rounded border border-gray-400'/>
                    </div>
                </div>
                <div className='flex items-center w-1/3'>
                    <label className='w-1/3'>PERIHAL</label>
                    <input type='text'className='w-2/3 rounded border border-gray-400'/>
                </div>
                <div className='flex items-center w-1/3'>
                    <label className='w-1/3'>PEJABAT BERWENANG</label>
                    <input type='text' className='w-2/3 rounded border border-gray-400'/>
                </div>
                <div className='flex items-center w-1/3'>
                    <label className='w-1/3'>JENIS SURAT</label>
                    <input type='text' className='w-2/3 rounded border border-gray-400'/>
                </div>
                <div className='flex items-center w-1/3'>
                    <label className='w-1/3'>KEPADA</label>
                    <select className='w-2/3 rounded border border-gray-400'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className='flex items-center w-1/3'>
                    <label className='w-1/3'>NOTA TINDAKAN</label>
                    <select className='w-2/3 rounded border border-gray-400'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className='flex'>
                    <div className='flex items-center w-1/3'>
                        <label className='w-1/3'>TGL DISPOSISI</label>
                        <input type='date' className='w-2/3 rounded border border-gray-400'/>
                    </div>
                    <div className='flex items-center w-1/2'>
                        <label className='pl-8 pr-8'>CATATAN EVP</label>
                        <textarea className='w-full p-6 rounded border border-gray-400'/>
                    </div>
                </div>
                <div className='flex items-center w-full'>
                    <label className='w-1/12'>CATATAN DEVP TELKOM REGIONAL VII</label>
                    <textarea className='w-full pl-96 p-6 ml-12 rounded border border-gray-400'/>
                </div>
                <div className='flex items-center w-full'>
                    <label className='pr-12'>CATATAN OSM</label>
                    <textarea className='w-full p-6 pr-96 rounded border border-gray-400'/>
                </div>
                <div className='flex items-center w-1/3'>
                    <label className='w-1/3'>SCAN</label>
                    <input type='file' className='w-2/3 border cursor-pointer focus:outline-none rounded border border-gray-400'/>
                </div>
                <div>
                    <button type='button' className="px-10 py-3.5 mt-6 text-base font-medium text-white bg-hijau hover:bg-hijau focus:outline-none rounded text-center dark:bg-hijau dark:hover:bg-hijau">SUBMIT</button>
                </div>
            </div>
        </main>
    </div>
  )}

export default Letterin