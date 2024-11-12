import { CheckSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function TasksWidget() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Tasks</CardTitle>
        <CheckSquare className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Complete dashboard layout</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Add more widgets</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}