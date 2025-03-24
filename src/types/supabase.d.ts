export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      hospitals: {
        Row: {
          address: string;
          created_at: string;
          department: string;
          etc: string | null;
          id: string;
          info: string | null;
          lat: number;
          lng: number;
          name: string;
          operation_time: Json | null;
          tel: string | null;
        };
        Insert: {
          address: string;
          created_at?: string;
          department: string;
          etc?: string | null;
          id: string;
          info?: string | null;
          lat: number;
          lng: number;
          name: string;
          operation_time?: Json | null;
          tel?: string | null;
        };
        Update: {
          address?: string;
          created_at?: string;
          department?: string;
          etc?: string | null;
          id?: string;
          info?: string | null;
          lat?: number;
          lng?: number;
          name?: string;
          operation_time?: Json | null;
          tel?: string | null;
        };
        Relationships: [];
      };
      reservations: {
        Row: {
          created_at: string;
          date: string;
          hospital_id: string;
          id: number;
          memo: string | null;
          status: Database['public']['Enums']['reservation_status'];
          time: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          date: string;
          hospital_id: string;
          id?: number;
          memo?: string | null;
          status: Database['public']['Enums']['reservation_status'];
          time: string;
          updated_at: string;
          user_id?: string;
        };
        Update: {
          created_at?: string;
          date?: string;
          hospital_id?: string;
          id?: number;
          memo?: string | null;
          status?: Database['public']['Enums']['reservation_status'];
          time?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: '\breservation_hospital_id_fkey';
            columns: ['hospital_id'];
            isOneToOne: false;
            referencedRelation: 'hospitals';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: '\breservation_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      reviews: {
        Row: {
          created_at: string;
          hostpital_id: string | null;
          id: number;
          reservation_id: number;
          review: Database['public']['Enums']['review'] | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          hostpital_id?: string | null;
          id?: number;
          reservation_id: number;
          review?: Database['public']['Enums']['review'] | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          hostpital_id?: string | null;
          id?: number;
          reservation_id?: number;
          review?: Database['public']['Enums']['review'] | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'reviews_hostpital_id_fkey';
            columns: ['hostpital_id'];
            isOneToOne: false;
            referencedRelation: 'hospitals';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'reviews_reservation_id_fkey';
            columns: ['reservation_id'];
            isOneToOne: false;
            referencedRelation: 'reservations';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'reviews_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      users: {
        Row: {
          birth: string;
          created_at: string;
          id: string;
          name: string;
          phone_number: string;
          avatar_path?: string;
        };
        Insert: {
          birth: string;
          created_at?: string;
          id?: string;
          name?: string;
          phone_number: string;
          avatar_path?: string;
        };
        Update: {
          birth?: string;
          created_at?: string;
          id?: string;
          name?: string;
          phone_number?: string;
          avatar_path?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      review:
        | '친절해요'
        | '진료 대기가 없어요'
        | '시설이 좋고 청결해요'
        | '전문적이에요';
      reservation_status: 'ok' | 'cancel' | '';
    };
    waiting;
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;
