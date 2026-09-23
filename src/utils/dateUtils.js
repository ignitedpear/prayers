const WEEKDAY_LABELS = {
  en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  la: ['Dom', 'Fer.II', 'Fer.III', 'Fer.IV', 'Fer.V', 'Fer.VI', 'Sab'],
  es: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
  pt: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  kok: ['Aitar', 'Somar', 'Mongl', 'Budh', 'Birest', 'Sukr', 'Son’var'],
};

const MONTH_LABELS = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  la: ['Ianuarius', 'Februarius', 'Martius', 'Aprilis', 'Maius', 'Iunius', 'Iulius', 'Augustus', 'September', 'October', 'November', 'December'],
  es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  pt: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
  kok: ['Janer', 'Febrer', 'Mars', 'Abril', 'Mai', 'Jun', 'Julai', 'Agost', 'Setembr', 'Oktobr', 'Novembr', 'Dezembr'],
};

export function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function addDays(date, amount) {
  const d = new Date(date);
  d.setDate(d.getDate() + amount);
  return d;
}

export function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export function weekdayLabel(date, lang) {
  return (WEEKDAY_LABELS[lang] || WEEKDAY_LABELS.en)[date.getDay()];
}

export function monthLabel(date, lang) {
  return (MONTH_LABELS[lang] || MONTH_LABELS.en)[date.getMonth()];
}

export function formatLongDate(date, lang) {
  const day = date.getDate();
  const month = monthLabel(date, lang);
  const year = date.getFullYear();
  if (lang === 'en') return `${month} ${day}, ${year}`;
  if (lang === 'la' || lang === 'kok') return `${day} ${month} ${year}`;
  return `${day} de ${month} de ${year}`;
}

// Returns an array of dates from `today - back` to `today + forward`, inclusive.
export function dateRange(centerDate, back = 3, forward = 3) {
  const days = [];
  for (let i = -back; i <= forward; i += 1) {
    days.push(addDays(centerDate, i));
  }
  return days;
}
