import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const InputResult = (props: { value: string; id: string; label: string }) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={props.id}>{props.label}</Label>
      <Input
        id={props.id}
        value={props.value}
        className="disabled:cursor-default disabled:text-black disabled:opacity-100"
        disabled
      />
    </div>
  );
};

export default InputResult;
