import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import AppURL from '../api/AppURL';
import axios from 'axios'; // You might need to install this library

function List_document1() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [documentType, setDocumentType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = new URLSearchParams({
          start_date: startDate,
          end_date: endDate,
          document_type: documentType,
        });

        const response = await axios.get(`${AppURL.Documents}?${queryParams.toString()}`);
        // const response = await axios.get(AppURL.Documents);
        if (response.data && Array.isArray(response.data.surat)) {
          setData(response.data.surat); // Gunakan properti "surat" dari respons API
        } else {
          console.error('Unexpected API response:', response.data);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };
  
    fetchData(); // Panggil fungsi fetchData() untuk mengambil data dari API
  }, []);

  if(!localStorage.getItem('token')){
    return window.location.href = '/login';
  }
  

  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <main className='flex flex-col items-center justify-center'>
          <div className='flex flex-row w-11/12 border-b-2 border-black py-2'>
            <Link to="/list_letterin" className='font-bold flex items-center justify-center w-32 h-12 mx-4 md:text-xl sm:text-base hover:bg-blue-500 hover:text-white'>Letter In</Link>
            <Link to="/list_letterout" className='font-bold flex items-center justify-center border border-[#029096] w-32 h-12 mx-4 md:text-xl sm:text-base hover:bg-blue-500 hover:text-white'>Letter Out</Link>
          </div>
          <div className='w-11/12 flex flex-row py-6 space-x-4'>
            <input
              type="text"
              className='p-3 pl-4 w-5/12 h-12 bg-[#ECECEC]'
              placeholder="Search..."
              
            />
            <select
              className='flex items-center justify-center w-2/12 h-12 bg-[#D9D9D9] p-2'
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
            >
              <option value="">All</option>
              <option value="authority">Authority</option>
              <option value="justification">Justification</option>
              <option value="contract">Contract</option>
              <option value="general">General</option>
              {/* Add your document type options here */}
            </select>
            <input
              type="date"
              className='flex items-center justify-center w-2/12 h-12 bg-[#D9D9D9] p-4'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <p className='flex items-center justify-center'>to</p>
            <input
              className='flex items-center justify-center w-2/12 h-12 bg-[#D9D9D9] p-4'
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <button
              className='bg-[#197B80] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={() => {
                window.location.href = AppURL.Export;
              }}
            >
              XLS
            </button>
          </div>
          <div className='w-11/12 bg-[#F7F7F7] h-auto p-6 overflow-x-auto'>
            <table className='w-full'>
              <thead className='border-b border-black '>
                <tr>
                  <th className='text-center p-4 w-20 sm:w-32 md:w-40 lg:w-48'>No.</th>
                  <th className='text-center p-4 w-20 sm:w-32 md:w-40 lg:w-48'>Document Type</th>
                  <th className='text-center p-4 w-20 sm:w-32 md:w-40 lg:w-48'>Date</th>
                  <th className='text-center p-4 w-20 sm:w-32 md:w-40 lg:w-48'>Perihal</th>
                  <th className='text-center p-4 w-20 sm:w-32 md:w-40 lg:w-48'>No. Surat</th>
                  <th className='text-center p-4 w-20 sm:w-32 md:w-40 lg:w-48'>Jumlah</th>
                  <th className='text-center p-4 w-20 sm:w-32 md:w-40 lg:w-48'>Scan (Document)</th>
                  <th className='text-center p-4 w-20 sm:w-32 md:w-40 lg:w-48'>Action</th>
                </tr>
              </thead>
              <tbody >
              {isLoading ? (
                <tr>
                  <td>Loading data...</td>
                </tr>
              ) : (
                data.map((item, index) => (
                  <tr key={index} className='border-b border-gray-300'>
                    <td className='text-center p-4'>{item.nomor}</td>
                    <td className='text-center p-4'>{item.document_type}</td>
                    <td className='text-center p-4'>{item.tanggal}</td>
                    <td className='text-center p-4'>{item.perihal}</td>
                    <td className='text-center p-4'>{item.nomor_surat}</td>
                    <td className='text-center p-4'>{item.jumlah}</td>
                    <td className='text-center p-4'>
                    <a
                      href={AppURL.view(item.id)} // Assuming 'id' is the ID of the PDF you want to view
                      target="_blank"
                      rel="noopener noreferrer"

                    >
                      View
                    </a>
                    </td>
                    <td className='text-center'>
                    <i className='fas fa-edit text-blue-500'></i> {/* Edit Icon */}
                    <i className='fas fa-trash-alt text-red-500'></i> {/* Delete Icon */}
                    <i className='fas fa-download text-green-500'></i> {/* Download Icon */}
                    </td>
                  </tr>
                  ))
                )}
              </tbody>
            </table>
        </div>
        </main>
      </div>
    </>
  );
}

export default List_document1;
