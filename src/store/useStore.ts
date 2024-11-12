import { create } from 'zustand';

interface DashboardState {
  darkMode: boolean;
  widgets: Widget[];
  setDarkMode: (darkMode: boolean) => void;
  addWidget: (widget: Widget) => void;
  removeWidget: (id: string) => void;
  reorderWidgets: (widgets: Widget[]) => void;
}

export interface Widget {
  id: string;
  type: 'weather' | 'tasks' | 'calendar' | 'notes';
  position: number;
  data?: any;
}

export const useStore = create<DashboardState>((set) => ({
  darkMode: false,
  widgets: [],
  setDarkMode: (darkMode) => set({ darkMode }),
  addWidget: (widget) =>
    set((state) => ({ widgets: [...state.widgets, widget] })),
  removeWidget: (id) =>
    set((state) => ({
      widgets: state.widgets.filter((widget) => widget.id !== id),
    })),
  reorderWidgets: (widgets) => set({ widgets }),
}));