'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { type ControllerRenderProps, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

import { FormDate } from './FormDate';
import { Textarea } from './ui/textarea';

export const FormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: '이름은 최소 2글자이어야 합니다.',
    })
    .max(4, {
      message: '이름은 최대 4글자이어야 합니다.',
    }),
  birthdate: z.coerce
    .date({
      required_error: '생년월일을 입력해주세요.',
      invalid_type_error: '년-월-일의 형태로 입력해주세요',
    })
    .max(new Date(), { message: '현재보다 이전 날짜를 입력해주세요' }),
  deathdate: z.coerce
    .date({
      required_error: '사망일자를 입력해주세요.',
      invalid_type_error: '년-월-일의 형태로 입력해주세요',
    })
    .max(new Date(), { message: '현재보다 이전 날짜를 입력해주세요' }),
  deathReason: z
    .string()
    .min(5, {
      message: '사망 사유는 최소 5글자이어야 합니다.',
    })
    .max(30, {
      message: '사망 사유는 최대 30글자이어야 합니다.',
    }),
});

const AddForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      birthdate: new Date('2001-01-01'),
      deathdate: new Date('2024-01-01'),
      deathReason: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: '업로드하신 내용은 다음과 같습니다.',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto mt-3 h-96 w-full space-y-3 overflow-y-auto scrollbar-hide"
      >
        <div className="flex h-[440px] w-full flex-col justify-between p-1">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-2/3">
                <FormLabel>이름</FormLabel>
                <FormControl>
                  <Input placeholder="이름을 입력해주세요." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="birthdate"
            render={({ field }) => (
              <FormDate<
                ControllerRenderProps<
                  {
                    username: string;
                    birthdate: Date;
                    deathdate: Date;
                    deathReason: string;
                  },
                  'birthdate'
                >,
                Date
              >
                field={field}
                initialDate={new Date(2001, 0)}
                formLabel="생년월일"
              />
            )}
          />
          <FormField
            control={form.control}
            name="deathdate"
            render={({ field }) => (
              <FormDate<
                ControllerRenderProps<
                  {
                    username: string;
                    birthdate: Date;
                    deathdate: Date;
                    deathReason: string;
                  },
                  'deathdate'
                >,
                Date
              >
                field={field}
                formLabel="사망날짜"
              />
            )}
          />
          <FormField
            control={form.control}
            name="deathReason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>사망 사유</FormLabel>
                <FormControl>
                  <Textarea placeholder="ex. 추락사, 자살 등" className="resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-4">
            제출
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { AddForm };
