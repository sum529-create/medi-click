export interface ScheduleData {
  hospitalName: string;
  schedule: string;
  status: 'ok' | 'cancel' | 'waiting';
}
