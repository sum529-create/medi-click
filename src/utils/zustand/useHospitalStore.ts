import { create } from 'zustand';

interface HospitalStore {
  selectedHospital: { lat: number; lng: number } | null;
  setSelectedHospital: (hospitalLocation: { lat: number; lng: number }) => void;
}

export const useHospitalStore = create<HospitalStore>((set) => ({
  selectedHospital: null,
  setSelectedHospital: (hospitalLocation) =>
    set({ selectedHospital: hospitalLocation }),
}));
