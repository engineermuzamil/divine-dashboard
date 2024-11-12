import { useStore } from '@/store/useStore';
import { WeatherWidget } from './widgets/WeatherWidget';
import { TasksWidget } from './widgets/TasksWidget';
import { CalendarWidget } from './widgets/CalendarWidget';
import { NotesWidget } from './widgets/NotesWidget';

export function WidgetGrid() {
  const widgets = useStore((state) => state.widgets);

  const renderWidget = (widget: any) => {
    switch (widget.type) {
      case 'weather':
        return <WeatherWidget key={widget.id} {...widget} />;
      case 'tasks':
        return <TasksWidget key={widget.id} {...widget} />;
      case 'calendar':
        return <CalendarWidget key={widget.id} {...widget} />;
      case 'notes':
        return <NotesWidget key={widget.id} {...widget} />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {widgets.map(renderWidget)}
    </div>
  );
}