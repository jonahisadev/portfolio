import { DateTime } from 'luxon';

const fmt_tenure = (start, end) => {
  const startDate = DateTime.fromFormat(start, 'MM/yyyy');
  const endDate =
    end === 'now' ? DateTime.now() : DateTime.fromFormat(end, 'MM/yyyy');

  const diff = Math.ceil(endDate.diff(startDate, 'months').toObject().months);
  const years = Math.floor(diff / 12);
  const months = diff % 12;

  if (years > 0) return `${years} yr, ${months} mo`;

  return `${months} mo`;
};

const jobs = [
  {
    company: 'University of Illinois - Springfield',
    title: 'B.S. Computer Science',
    tags: ['DS', 'Algorithms', 'Networking', 'Architecture'],
    length: 'Spring 2022',
    current: false,
    img: 'uis'
  },
  {
    company: 'World Wide Technology',
    title: 'Software Engineer II',
    tags: ['React', 'Vue', 'Javascript', 'Agile'],
    length: fmt_tenure('02/2022', 'now'),
    current: true,
    img: 'wwt'
  },
  {
    company: 'Gravity Wiz',
    title: 'Software Engineer',
    tags: ['PHP', 'Wordpress', 'Vue', 'Gravity Forms'],
    length: fmt_tenure('12/2021', '02/2022'),
    current: false,
    img: 'gravitywiz'
  },
  {
    company: 'DataAutomation',
    title: 'Backend Developer',
    tags: ['PHP', 'AWS'],
    length: fmt_tenure('08/2021', '11/2021'),
    current: false,
    img: 'da'
  },
  {
    company: 'Precision Planting',
    title: 'Junior Software Developer',
    tags: ['C++', 'Qt', 'Firmware'],
    length: fmt_tenure('06/2019', '08/2021'),
    current: false,
    img: 'precision'
  }
];

export default jobs;