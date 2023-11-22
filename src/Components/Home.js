import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmpDetails from './EmpDetails';
import AddEmp from './AddEmp';
import EditEmp from './EditEmp';

function Home(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = '/' element={<EmpDetails/>}/>
                     <Route path = '/create' element={<AddEmp/>}/>
                     
                   
                      <Route path = '/edit' element={<EditEmp/>}/>   
                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default Home;
