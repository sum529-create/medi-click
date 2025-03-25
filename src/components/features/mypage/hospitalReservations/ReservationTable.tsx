import { APPOINTMENT_STYLES } from '@/constants/styles';
import StatusBadge from './StatusBadge';

interface Reservation {
  time: string;
  name: string;
  phone: string;
  symptoms: string;
  status: 'waiting' | 'confirmed';
}

interface ReservationTableProps {
  reservations: Reservation[];
}

const ReservationTable = ({ reservations }: ReservationTableProps) => {
  const thData = ['시간', '환자명', '연락처', '증상', '상태'];
  return (
    <div className={APPOINTMENT_STYLES.container}>
      <table className='w-full border-collapse'>
        <thead className={APPOINTMENT_STYLES.tableHeader}>
          <tr>
            {thData.map((th, i) => (
              <th key={i} className={APPOINTMENT_STYLES.tableHeaderCell}>
                {th}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='divide-y divide-[#cccbc8] text-center'>
          {reservations.map((appointment, index) => (
            <tr key={index} className={APPOINTMENT_STYLES.tableRow}>
              <td className={APPOINTMENT_STYLES.tableCell}>
                {appointment.time}
              </td>
              <td className={APPOINTMENT_STYLES.tableCell}>
                {appointment.name}
              </td>
              <td className={APPOINTMENT_STYLES.tableCell}>
                {appointment.phone}
              </td>
              <td className={`px-6 py-6`}>{appointment.symptoms}</td>
              <td className={APPOINTMENT_STYLES.tableCell}>
                <StatusBadge status={appointment.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationTable;
