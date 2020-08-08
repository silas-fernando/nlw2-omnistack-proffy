import express from 'express';
import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';

const routes = express.Router();

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

// Desestruturação: Divide um dado em várias partes e atribui cada uma delas à uma variável.
routes.post('/classes', async (request, response) => {
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule
  } = request.body; // Os dados virão por meio do corpo da requisição (request).

  // Executa todas as operações no banco dados. Caso alguma retornar erro, desfaz 
  // as outras que já tinham sido executadas.
  const trx = await db.transaction();

  try {
      // A função insert retorna a lista de ids dos usuários que estão no BD.
    const insertedUsersIds = await trx('users').insert({ 
      // short syntax: Se o nome da propriedade do objeto tem o mesmo nome do valor, o valor pode ser omitido.
      // Sem short syntax ficaria assim: propriedade: 'valor'.
      name,
      avatar,
      whatsapp,
      bio,
    })

    const user_id = insertedUsersIds[0]; // Pega o primeiro id da lista.

    const insertedClassesIds = await trx('classes').insert({ 
      // short syntax: Se o nome da propriedade do objeto tem o mesmo nome do valor, o valor pode ser omitido.
      // Sem short syntax ficaria assim: propriedade: 'valor'.
      subject,
      cost,
      user_id,
    });

    const class_id = insertedClassesIds[0];

    const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
      return {
        class_id,
        week_day: scheduleItem.week_day,
        from: convertHourToMinutes(scheduleItem.from),
        to: convertHourToMinutes(scheduleItem.to),
      };
    });

    await trx('class_schedule').insert(classSchedule);

    // Se todas as operações não retornarem erro, só aí então é que elas de fato serão enviadas para o BD. 
    await trx.commit(); 

    // 201: status criado com sucesso.
    return response.status(201).send();
  } catch (err) {
    // Desfaz qualquer mudança que tenha sido feita no bd antes de dar o erro aqui capturado.
    await trx.rollback();
    return response.status(400).json({
      err: 'Unexpected error while creating new class'
    })
  }
});

export default routes;
