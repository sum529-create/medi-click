import ReservationDetailClientPage from './client.page';

interface Params {
  params: { id: string };
}
const ReservationDetailPage = ({ params }: Params) => {
  return <ReservationDetailClientPage pathId={params.id} />;
};

export default ReservationDetailPage;
