'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import Profile from './Profile';

const data = [
  {
    username: '이수만',
    birthdate: new Date('2001-01-01'),
    deathdate: new Date('2024-01-01'),
    deathReason: '자살',
  },
  {
    username: '이수만',
    birthdate: new Date('2001-01-01'),
    deathdate: new Date('2024-01-01'),
    deathReason: '자살',
  },
  {
    username: '이수만',
    birthdate: new Date('2001-01-01'),
    deathdate: new Date('2024-01-01'),
    deathReason: '자살',
  },
  {
    username: '이수만',
    birthdate: new Date('2001-01-01'),
    deathdate: new Date('2024-01-01'),
    deathReason: '자살',
  },
  {
    username: '이수만',
    birthdate: new Date('2001-01-01'),
    deathdate: new Date('2024-01-01'),
    deathReason: '자살',
  },
  {
    username: '이수만',
    birthdate: new Date('2001-01-01'),
    deathdate: new Date('2024-01-01'),
    deathReason: '자살',
  },
  {
    username: '이수만',
    birthdate: new Date('2001-01-01'),
    deathdate: new Date('2024-01-01'),
    deathReason: '자살',
  },
  {
    username: '이수만',
    birthdate: new Date('2001-01-01'),
    deathdate: new Date('2024-01-01'),
    deathReason: '자살',
  },
  {
    username: '이수만',
    birthdate: new Date('2001-01-01'),
    deathdate: new Date('2024-01-01'),
    deathReason: '자살',
  },
  {
    username: '이수만',
    birthdate: new Date('2001-01-01'),
    deathdate: new Date('2024-01-01'),
    deathReason: '자살',
  },
  {
    username: '이수만',
    birthdate: new Date('2001-01-01'),
    deathdate: new Date('2024-01-01'),
    deathReason: '자살',
  },
  {
    username: '이수만',
    birthdate: new Date('2001-01-01'),
    deathdate: new Date('2024-01-01'),
    deathReason: '자살',
  },
  {
    username: '이수만',
    birthdate: new Date('2001-01-01'),
    deathdate: new Date('2024-01-01'),
    deathReason: '자살',
  },
  {
    username: '이수만',
    birthdate: new Date('2001-01-01'),
    deathdate: new Date('2024-01-01'),
    deathReason: '자살',
  },
  {
    username: '이수만',
    birthdate: new Date('2001-01-01'),
    deathdate: new Date('2024-01-01'),
    deathReason: '자살',
  },
  {
    username: '이수만',
    birthdate: new Date('2001-01-01'),
    deathdate: new Date('2024-01-01'),
    deathReason: '자살',
  },
  {
    username: '이수만',
    birthdate: new Date('2001-01-01'),
    deathdate: new Date('2024-01-01'),
    deathReason: '자살',
  },
  {
    username: '이수만',
    birthdate: new Date('2001-01-01'),
    deathdate: new Date('2024-01-01'),
    deathReason: '자살',
  },
  {
    username: '이수만',
    birthdate: new Date('2001-01-01'),
    deathdate: new Date('2024-01-01'),
    deathReason: '자살',
  },
];

const ProfileList = () => {
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
            data
              .slice(offset, offset + limit)
              .map((item, _) => <Profile key={item.username} data={item} />)
          ) : (
            <p className="self-center text-center">아직 등록된 정보가 없습니다.</p>
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
