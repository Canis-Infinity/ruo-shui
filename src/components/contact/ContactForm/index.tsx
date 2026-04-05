'use client';

import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import {
  contactFormSchema,
  type ContactFormValues,
} from '@/lib/validations/contact-schema';

function Field({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex flex-col gap-2">{children}</div>;
}

const inputClassName =
  'w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-ink placeholder:text-muted-foreground/80 transition-all hover:border-ink/20 focus:border-brand focus:ring-4 focus:ring-brand/20 focus:outline-none';

const errorClassName = 'border-destructive focus:border-destructive focus:ring-destructive/20';

type ApiSuccessResponse = {
  success: true;
  message: string;
};

type ApiErrorResponse = {
  success: false;
  message: string;
  fieldErrors?: Partial<Record<keyof ContactFormValues, string[]>>;
};

type ApiResponse = ApiSuccessResponse | ApiErrorResponse;

export default function ContactForm() {
  const defaultValues = useMemo<ContactFormValues>(
    () => ({
      fullName: '',
      companyName: '',
      phone: '',
      email: '',
      message: '',
    }),
    []
  );

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: 'onBlur',
  });

  const onSubmit = async (values: ContactFormValues): Promise<void> => {
  await toast.promise(
    (async () => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const result = (await response.json()) as ApiResponse;

      if (!response.ok || !result.success) {
        if ('fieldErrors' in result && result.fieldErrors) {
          const entries = Object.entries(result.fieldErrors) as Array<
            [keyof ContactFormValues, string[] | undefined]
          >;

          for (const [field, messages] of entries) {
            const firstMessage = messages?.[0];
            if (firstMessage) {
              setError(field, {
                type: 'server',
                message: firstMessage,
              });
            }
          }
        }

        throw new Error(result.message || '送出失敗，請稍後再試');
      }

      reset(defaultValues);

      return result.message;
    })(),
    {
      loading: '送出中...',
      success: (message) => message,
      error: (error: unknown) =>
        error instanceof Error ? error.message : '系統忙線中，請稍後再試',
    }
  );
};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="shadow-soft mx-auto w-full max-w-4xl space-y-8 rounded-[2rem] bg-white p-6 sm:p-8 md:p-10"
    >
      <p className="text-muted-foreground text-xs">
        <span className="text-destructive">*</span> 為必填欄位
      </p>

      <Field>
        <label htmlFor="fullName" className="text-ink text-base font-semibold">
          姓名<span className="text-destructive ml-1 text-xs">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          placeholder="請輸入姓名"
          aria-invalid={errors.fullName ? 'true' : 'false'}
          className={`${inputClassName} ${errors.fullName ? errorClassName : ''}`}
          {...register('fullName')}
        />
        {errors.fullName ? (
          <p className="text-destructive text-sm">{errors.fullName.message}</p>
        ) : null}
      </Field>

      <Field>
        <label htmlFor="companyName" className="text-ink text-base font-semibold">
          公司名稱
        </label>
        <input
          id="companyName"
          type="text"
          placeholder="請輸入公司名稱"
          aria-invalid={errors.companyName ? 'true' : 'false'}
          className={`${inputClassName} ${errors.companyName ? errorClassName : ''}`}
          {...register('companyName')}
        />
        {errors.companyName ? (
          <p className="text-destructive text-sm">{errors.companyName.message}</p>
        ) : null}
      </Field>

      <Field>
        <label htmlFor="phone" className="text-ink text-base font-semibold">
          電話
        </label>
        <input
          id="phone"
          type="tel"
          inputMode="tel"
          placeholder="請輸入電話"
          aria-invalid={errors.phone ? 'true' : 'false'}
          className={`${inputClassName} ${errors.phone ? errorClassName : ''}`}
          {...register('phone')}
        />
        {errors.phone ? (
          <p className="text-destructive text-sm">{errors.phone.message}</p>
        ) : null}
      </Field>

      <Field>
        <label htmlFor="email" className="text-ink text-base font-semibold">
          電子郵件
        </label>
        <input
          id="email"
          type="email"
          inputMode="email"
          placeholder="請輸入電子郵件"
          aria-invalid={errors.email ? 'true' : 'false'}
          className={`${inputClassName} ${errors.email ? errorClassName : ''}`}
          {...register('email')}
        />
        {errors.email ? (
          <p className="text-destructive text-sm">{errors.email.message}</p>
        ) : null}
      </Field>

      <Field>
        <label htmlFor="message" className="text-ink text-base font-semibold">
          留言<span className="text-destructive ml-1 text-xs">*</span>
        </label>
        <textarea
          id="message"
          placeholder="請簡單描述您的需求"
          rows={5}
          aria-invalid={errors.message ? 'true' : 'false'}
          className={`${inputClassName} min-h-36 resize-none ${
            errors.message ? errorClassName : ''
          }`}
          {...register('message')}
        />
        {errors.message ? (
          <p className="text-destructive text-sm">{errors.message.message}</p>
        ) : null}
      </Field>

      <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-ink inline-flex h-12 items-center rounded-full px-6 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? '送出中...' : '送出留言'}
        </button>

        <button
          type="button"
          disabled={isSubmitting}
          onClick={() => reset(defaultValues)}
          className="border-border bg-background text-ink hover:border-brand/40 hover:bg-brand-soft inline-flex h-12 items-center rounded-full border px-6 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
        >
          清除重填
        </button>
      </div>
    </form>
  );
}