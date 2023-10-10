import React, { useState } from 'react'
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom'
import axios from 'axios';
import AppURL from '../api/AppURL';

function Letter_out4() {

  const [formData, setFormData] = useState({
    nomor: '',
    tanggal: '',
    perihal: '',
    nomor_surat: '',
    keterangan: '',
    file: null, // Ini digunakan untuk menyimpan file yang akan diunggah
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      file: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('nomor', formData.nomor);
      formDataToSend.append('tanggal', formData.tanggal);
      formDataToSend.append('perihal', formData.perihal);
      formDataToSend.append('nomor_surat', formData.nomor_surat);
      formDataToSend.append('keterangan', formData.keterangan);
      formDataToSend.append('file', formData.file);
  
      // Ganti URL_API dengan URL API Anda
      const response = await axios.post(AppURL.General, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
  
      console.log('Response:', response.data);
      
      // Redirect atau lakukan apa yang diperlukan setelah berhasil menyimpan data
      return window.location.href = '/list_letterout';
    } catch (error) {
      console.error('Error:', error);
      // Handle error jika ada
    }
  };

  if(!localStorage.getItem('token')){
    return window.location.href = '/login';
  }

  return (
  <>
    <div className='min-h-screen flex flex-col'>
      <Navbar/>
        <main className='flex flex-col items-center justify-center'>
          <div className='w-screen text-center m-8'>
            <h5 className='font-bold text-3xl'> LETTER OUT</h5>
            <h5 className='font-bold text-3xl'>(General)</h5>
          </div>
          <div className='bg-[#F0F0F0] w-11/12 h-auto m-8 border-2'>
            <div className='flex flex-row items-center justify-center h-16 border-b-2 border-black'>
              <Link to='/letterout1' className='flex justify-center h-full items-center w-1/4 hover:bg-blue-500 hover:text-white' href='#'>Surat Kuasa</Link>
              <Link to='/letterout2' className='flex justify-center h-full items-center w-1/4 hover:bg-blue-500 hover:text-white' href='#'>Surat Justifikasi</Link>
              <Link to='/letterout3' className='flex justify-center h-full items-center w-1/4 hover:bg-blue-500 hover:text-white' href='#'>Surat Kontak</Link>
              <Link to='/letterout4' className='flex justify-center h-full items-center bg-white w-1/4 hover:bg-blue-500 hover:text-white' href='#'>Surat Umum</Link>
            </div>
            <form className='p-6 lg:p-18 md:p-12 sm:p-10'  encType="multipart/form-data" onSubmit={handleSubmit}>
              <div className='flex mb-4'>
                <label htmlFor='nomor' className='w-1/3'>No.:</label>
                <input type='text' onChange={handleInputChange} id='nomor' name='nomor' className='w-2/3 border p-2' />
              </div>
              <div className='flex mb-4'>
                <label htmlFor='tanggal' className='w-1/3'>Tanggal:</label>
                <input type='date' onChange={handleInputChange} id='tanggal' name='tanggal' className='w-2/3 border p-2' />
              </div>
              <div className='flex mb-4'>
                <label htmlFor='perihal' className='w-1/3'>Perihal:</label>
                <input type='text' onChange={handleInputChange} id='perihal' name='perihal' className='w-2/3 border p-2' />
              </div>
              <div className='flex mb-4'>
                <label htmlFor='nomor_surat' className='w-1/3'>No. Surat:</label>
                <input type='text' onChange={handleInputChange} id='nomor_surat' name='nomor_surat' className='w-2/3 border p-2' />
              </div>
              <div className='flex mb-4'>
                <label htmlFor='keterangan' className='w-1/3'>Keterangan:</label>
                <input type='text' onChange={handleInputChange} id='keterangan' name='keterangan' className='w-2/3 border p-2' />
              </div>
              <div className='flex mb-4'>
                <label htmlFor='file' className='w-1/3'>File:</label>
                <input type='file' onChange={handleFileChange} id='file' name='file' className='w-2/3 border p-2' />
              </div>
              <div className='flex justify-start'>
                <button type='submit' className='bg-[#029096] hover:bg-blue-700 text-white font-bold py-4 px-8 rounded'>Submit</button>
              </div>
            </form>
          </div>
        </main>
    </div>
  </>
  )
}

export default Letter_out4