import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Prayer {
  name: string;
  time: string;
  completed: boolean;
}

interface DailyState {
  date: string;
  imaanLevel: number;
  note: string;
  prayers: Prayer[];
  dhikrCount: number;
  quranPages: number;
  quranMinutes: number;
}

interface DashboardState {
  dailyState: DailyState;
  setImaanLevel: (level: number) => void;
  setNote: (note: string) => void;
  togglePrayer: (prayerName: string) => void;
  incrementDhikr: () => void;
  resetDhikr: () => void;
  setQuranPages: (pages: number) => void;
  setQuranMinutes: (minutes: number) => void;
}

const defaultPrayers: Prayer[] = [
  { name: 'Fajr', time: '05:30', completed: false },
  { name: 'Dhuhr', time: '13:00', completed: false },
  { name: 'Asr', time: '16:30', completed: false },
  { name: 'Maghrib', time: '19:30', completed: false },
  { name: 'Isha', time: '21:00', completed: false },
];

export const useDashboardStore = create<DashboardState>()(
  persist(
    (set) => ({
      dailyState: {
        date: new Date().toISOString().split('T')[0],
        imaanLevel: 5,
        note: '',
        prayers: defaultPrayers,
        dhikrCount: 0,
        quranPages: 0,
        quranMinutes: 0,
      },
      setImaanLevel: (level) =>
        set((state) => ({
          dailyState: { ...state.dailyState, imaanLevel: level },
        })),
      setNote: (note) =>
        set((state) => ({
          dailyState: { ...state.dailyState, note },
        })),
      togglePrayer: (prayerName) =>
        set((state) => ({
          dailyState: {
            ...state.dailyState,
            prayers: state.dailyState.prayers.map((prayer) =>
              prayer.name === prayerName
                ? { ...prayer, completed: !prayer.completed }
                : prayer
            ),
          },
        })),
      incrementDhikr: () =>
        set((state) => ({
          dailyState: {
            ...state.dailyState,
            dhikrCount: state.dailyState.dhikrCount + 1,
          },
        })),
      resetDhikr: () =>
        set((state) => ({
          dailyState: { ...state.dailyState, dhikrCount: 0 },
        })),
      setQuranPages: (pages) =>
        set((state) => ({
          dailyState: { ...state.dailyState, quranPages: pages },
        })),
      setQuranMinutes: (minutes) =>
        set((state) => ({
          dailyState: { ...state.dailyState, quranMinutes: minutes },
        })),
    }),
    {
      name: 'divine-dashboard',
    }
  )
);