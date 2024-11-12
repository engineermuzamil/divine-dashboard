import { StickyNote } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

export function NotesWidget() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Quick Notes</CardTitle>
        <StickyNote className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <Textarea 
          placeholder="Write your notes here..."
          className="min-h-[100px] resize-none"
        />
      </CardContent>
    </Card>
  );
}