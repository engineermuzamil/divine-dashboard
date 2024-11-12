import { Header } from '@/components/layout/Header';
import { WidgetGrid } from '@/components/dashboard/WidgetGrid';
import { useStore } from '@/store/useStore';
import { useEffect } from 'react';

function App() {
  const { addWidget } = useStore();

  useEffect(() => {
    // Initialize with some default widgets
    addWidget({
      id: '1',
      type: 'weather',
      position: 0,
    });
    addWidget({
      id: '2',
      type: 'tasks',
      position: 1,
    });
    addWidget({
      id: '3',
      type: 'calendar',
      position: 2,
    });
    addWidget({
      id: '4',
      type: 'notes',
      position: 3,
    });
  }, [addWidget]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto">
        <WidgetGrid />
      </main>
    </div>
  );
}

export default App;