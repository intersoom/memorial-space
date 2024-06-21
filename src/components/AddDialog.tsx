'use client';

import { useState } from 'react';
import { AddButton } from './AddButton';
import { AddForm } from './AddForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

const AddDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <AddButton />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>등록하기</DialogTitle>
          <AddForm setOpen={setOpen} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export { AddDialog };
