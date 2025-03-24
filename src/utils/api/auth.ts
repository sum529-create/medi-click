import { supabase } from '../supabase/supabase';

interface FormData {
  email: string;
  password: string;
  name: string;
  phone: string;
  birth: string;
  role: string;
}

export const signUp = async (formData: FormData) => {
  await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        name: formData.name,
        phone_number: formData.phone,
        birth: formData.birth,
        role: formData.role,
      },
    },
  });
};

export const login = async (formData: FormData) => {
  await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });
};
