import { APPOINTMENT_STYLES } from '@/constants/styles';
import StatusBadge from './StatusBadge';

interface Reservation {
  time: string;
  memo: string;
  id: number;
  users: {
    name: string;
    phone_number: string;
  };
  status: 'waiting' | 'ok' | 'cancel';
}

interface ReservationTableProps {
  reservations: Reservation[];
}

const ReservationTable = ({ reservations }: ReservationTableProps) => {
  const thData = ['시간', '환자명', '연락처', '증상', '상태'];

  return (
    <div className={APPOINTMENT_STYLES.container}>
      <table className='min-h-40 w-full border-collapse'>
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
          {reservations.length > 0 ? (
            reservations.map((appointment, index) => (
              <tr key={index} className={APPOINTMENT_STYLES.tableRow}>
                <td className={APPOINTMENT_STYLES.tableCell}>
                  {appointment.time}
                </td>
                <td className={APPOINTMENT_STYLES.tableCell}>
                  {appointment.users.name}
                </td>
                <td className={APPOINTMENT_STYLES.tableCell}>
                  {appointment.users.phone_number}
                </td>
                <td className={`px-6 py-6`}>{appointment.memo}</td>
                <td className={APPOINTMENT_STYLES.tableCell}>
                  <StatusBadge
                    status={appointment.status}
                    regId={appointment.id}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>해당 날짜에 예약된 일정이 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationTable;
