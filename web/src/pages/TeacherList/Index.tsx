import React from 'react';
import PageHeader from 'src/components/PageHeader';
import TeacherItem from 'src/components/TeacherItem';
import Input from 'src/components/Input';

import './styles.css';


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                  <Input name="subject" label="Matéria"/>
                  <Input name="week_day" label="Dia da semana"/>
                  <Input type="time" name="time" label="Hora"/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;