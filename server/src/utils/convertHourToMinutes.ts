export default function convertHourToMinutes(time:string) {
  
  // const [hour, minutes]: Desestruturação: Divide um dado em várias partes e atribui cada uma delas à uma variável.
  // Na linha de baixo, por exemplo, hour receberá a primeira parte antes dos : e minutes a segunda depois dos :.
  const [hour, minutes] = time.split(':').map(Number) // Separa a string horário e converte cada parte em number.
  const timeInMinutes = (hour * 60) + minutes; // Converte a hora em minutos.
  
  return timeInMinutes;
}