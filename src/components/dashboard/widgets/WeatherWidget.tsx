import { Cloud, Sun } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function WeatherWidget() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Weather</CardTitle>
        <Sun className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">72°F</div>
        <p className="text-xs text-muted-foreground">
          Sunny with occasional clouds
        </p>
      </CardContent>
    </Card>
  );
}