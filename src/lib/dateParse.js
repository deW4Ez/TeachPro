export function getDayOfTheWeek(src){ 
  const week = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"] 
  const date = new Date(src) 
  return week[date.getDay()]
}

export function getDay(src){
  const date = new Date(src)
  const result = date.getDate()
  if (result < 10){
    return "0" + (result+1).toString()
  }
  return result.toString()
}

export function getMonth(src){
  const date = new Date(src)
  const result = date.getMonth()
  if (result < 10){
    return "0" + (result+1).toString()
  }
  return result.toString()
}

export function getScheduleDate(src){
  return `${getDayOfTheWeek(src)}, ${getDay(src)}.${getMonth(src)}`
}
