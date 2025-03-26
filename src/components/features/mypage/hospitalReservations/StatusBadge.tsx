'use client';
import { useQueryClient } from '@tanstack/react-query';
import clsx from 'clsx';
import { toast } from 'react-toastify';
import { QUERY_KEY } from '@/constants/queryKey';
import { APPOINTMENT_STYLES } from '@/constants/styles';
import { updateHospitalReservationStatus } from '@/utils/api/hospitalReservationList';

interface StatusBadgeProps {
  status: 'waiting' | 'ok' | 'cancel';
  regId: number;
}

const StatusBadge = ({ status, regId }: StatusBadgeProps) => {
  const queryClient = useQueryClient();

  const badgeStyle = clsx({
    [APPOINTMENT_STYLES.statusWaiting]: status === 'waiting',
    [APPOINTMENT_STYLES.statusCancel]: status === 'cancel',
    [APPOINTMENT_STYLES.statusConfirmed]: status === 'ok',
  });

  const handleToggleStatus = async () => {
    if (status !== 'waiting') return false;
    if (confirm('해당 환자의 예약을 확정하시겠습니까?')) {
      const res = await updateHospitalReservationStatus(regId, 'ok');
      if (!res || res.length === 0)
        return toast.error('예약상태 변경에 실패하였습니다.');

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.HOSPITAL_RESERVATION_LIST],
      });

      return toast.success('예약상태가 변경되었습니다.');
    }
  };

  return (
    <>
      {status === 'waiting' ? (
        <span
          className={clsx(
            `${badgeStyle} bg-gray03 hover:bg-gray04 hover:text-white`,
          )}
          onClick={handleToggleStatus}
        >
          대기중
        </span>
      ) : status === 'cancel' ? (
        <span className={badgeStyle}>취소</span>
      ) : (
        <span className={badgeStyle}>확정</span>
      )}
    </>
  );
};

export default StatusBadge;
