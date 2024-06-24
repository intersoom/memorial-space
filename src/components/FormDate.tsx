import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const FormDate = <T extends { value: any; onChange: any }, U extends Date>(props: {
  field: T;
  initialDate?: U;
  formLabel: string;
}) => {
  return (
    <FormItem className="flex flex-col">
      <FormLabel>{props.formLabel}</FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant="outline"
              className={cn(
                'w-[240px] pl-3 text-left font-normal',
                !props.field.value && 'text-muted-foreground'
              )}
            >
              {props.field.value ? (
                format(props.field.value, 'yyyy-MM-dd')
              ) : (
                <span>Pick a date</span>
              )}
              <CalendarIcon className="ml-auto size-4 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={props.field.value}
            onSelect={props.field.onChange}
            disabled={(date) =>
              date < new Date('1900-01-01') ||
              (props.formLabel === '생년월일' ? date > new Date() : false)
            }
            defaultMonth={props.initialDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  );
};

export { FormDate };
