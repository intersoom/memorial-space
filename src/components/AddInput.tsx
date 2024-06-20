import { Input } from './ui/input';

const AddInput = (props: { type: string; placeholder: string }) => {
  return <Input type={props.type} placeholder={props.placeholder} />;
};

export default AddInput;
