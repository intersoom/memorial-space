'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

import Profile from './Profile';
import { collection, onSnapshot, orderBy } from 'firebase/firestore';
import type { z } from 'zod';
import type { FormSchema } from './AddForm';
import db from '@/firebase/firestore';

const ProfileList = () => {
  const [data, setData] = useState<z.infer<typeof FormSchema>[]>([]);
  // const data: z.infer<typeof FormSchema>[] = [];

  useEffect(() => {
    onSnapshot(collection(db, 'profiles'), (results) => {
      let tempList: z.infer<typeof FormSchema>[] = [];
      results.forEach((doc: any) => {
        const data = doc.data();
        const transformedData = {
          ...data,
          birthdate: data.birthdate.toDate(),
          deathdate: data.deathdate.toDate(),
        };

        tempList.push(transformedData);
      });
      setData(tempList);
    });
  }, []);

  const [limit] = useState(12);
  const [page, setPage] = useState(1);

  const offset = (page - 1) * limit;

  const leftOnClick = () => {
    if (page > 1) {
      setPage((val) => val - 1);
    }
  };

  const rightOnClick = () => {
    if (data.length / limit > page) {
      setPage((val) => val + 1);
    }
  };

  return (
    <div className="flex size-full items-center justify-center">
      <ChevronLeft
        onClick={leftOnClick}
        className={`cursor-pointer ${page > 1 ? 'opacity-100' : 'opacity-10'}`}
      />
      <div className="flex size-full items-center justify-center">
        <div className="flex w-[1120px] flex-wrap items-start justify-start gap-[20px]">
          {data.length !== 0 ? (
            data.slice(offset, offset + limit).map((item, _) => <Profile key={_} data={item} />)
          ) : (
            <div className="size-full flex justify-center items-center">
              <p>아직 등록된 정보가 없습니다.</p>
            </div>
          )}
        </div>
      </div>
      <ChevronRight
        onClick={rightOnClick}
        className={`cursor-pointer ${data.length / limit > page ? 'opacity-100' : 'opacity-10'}`}
      />
    </div>
  );
};

export default ProfileList;
