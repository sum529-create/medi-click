/**
 * supabase 테이블 상수 모음
 * supabase 로직 사용할 때 이용
 * ex) const { data, error } = await supabase.from(TABLES.HOSPITALS);
 */

export const TABLE = {
  HOSPITALS: 'hospitals' as const,
  RESERVATIONS: 'reservations' as const,
  REVIEWS: 'reviews' as const,
  USERS: 'users' as const,
};

export const COLUMN = {
  ID: 'id' as const,
  USER_ID: 'user_id',
  DATE: 'date',
};
