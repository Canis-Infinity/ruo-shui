import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z.string().trim().min(1, '請輸入姓名').max(50, '姓名長度不能超過 50 字'),
  companyName: z
    .string()
    .trim()
    .max(100, '公司名稱長度不能超過 100 字')
    .optional()
    .or(z.literal('')),
  phone: z
    .string()
    .trim()
    .refine((value) => value === '' || /^[0-9+\-()#\s]{6,20}$/.test(value), '電話格式不正確'),
  email: z
    .string()
    .trim()
    .refine((value) => value === '' || z.email().safeParse(value).success, '電子郵件格式不正確'),
  message: z.string().trim().min(1, '請輸入留言內容').max(1000, '留言內容不能超過 1000 字'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
