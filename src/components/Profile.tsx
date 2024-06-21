import { format, getUnixTime, toDate } from 'date-fns';
import Image from 'next/image';
import type { z } from 'zod';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import type { FormSchema } from './AddForm';
import InputResult from './InputResult';

const Profile = (props: { data: z.infer<typeof FormSchema> }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex h-[240px] w-[170px] flex-col items-center justify-around rounded-sm bg-white p-5 text-gray-700 opacity-90">
          <Image src="/assets/images/profile.webP" alt="profile" width={300} height={300} />
          <div className="text-xl font-semibold">{props.data.username}</div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3">Information</DialogTitle>
          <DialogDescription className="mt-3 flex h-72 w-full flex-col justify-between">
            <InputResult value={props.data.username} id="username" label="이름" />
            <InputResult
              value={format(props.data.birthdate, 'yyyy/MM/dd')}
              id="birthdate"
              label="생년월일"
            />
            <InputResult
              value={format(props.data.deathdate, 'yyyy/MM/dd')}
              id="deathdate"
              label="사망일자"
            />
            {/* 글자수 제한 처리하기 */}
            <InputResult value={props.data.deathReason} id="deathReason" label="사망 사유" />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Profile;
