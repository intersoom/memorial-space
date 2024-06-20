import { AddDialog } from '@/components/AddDialog';
import ProfileList from '@/components/ProfileList';

const Find = () => {
  return (
    <div className="relative flex size-full items-center justify-center p-12">
      <AddDialog />
      <ProfileList />
    </div>
  );
};

export default Find;
