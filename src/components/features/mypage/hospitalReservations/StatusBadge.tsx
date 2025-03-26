import { APPOINTMENT_STYLES } from '@/constants/styles';

interface StatusBadgeProps {
  status: 'waiting' | 'confirmed';
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const badgeStyle =
    status === 'waiting'
      ? APPOINTMENT_STYLES.statusWaiting
      : APPOINTMENT_STYLES.statusConfirmed;

  return (
    <span className={badgeStyle}>
      {status === 'waiting' ? '대기중' : '확정'}
    </span>
  );
};

export default StatusBadge;
