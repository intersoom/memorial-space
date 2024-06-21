import { Plus } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';

const AddButton = () => {
  return (
    <Button
      asChild
      variant="outline"
      className="absolute bottom-5 right-5 size-14 rounded-full p-2 text-4xl leading-10"
    >
      <Plus size={44} strokeWidth={2} color="black" />
    </Button>
  );
};

export { AddButton };
