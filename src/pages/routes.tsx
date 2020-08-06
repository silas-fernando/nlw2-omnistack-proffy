import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import TeacherList from './TeacherList/Index';
import TeacherForm from './TeacherForm';
import Landing from './Landing';

function Routes() {
    return (
        <BrowserRouter>
           <Route path="/" exact component={Landing}/> 
           <Route path="/study" component={TeacherList}/> 
           <Route path="/give-classes" component={TeacherForm}/> 
        </BrowserRouter>
    )
}

export default Routes;