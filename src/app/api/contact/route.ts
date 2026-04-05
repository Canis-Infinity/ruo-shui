import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z, ZodError } from 'zod';
import { contactFormSchema, type ContactFormValues } from '@/lib/validations/contact-schema';

type SuccessResponse = {
  success: true;
  message: string;
};

type ErrorResponse = {
  success: false;
  message: string;
  fieldErrors?: Partial<Record<keyof ContactFormValues, string[]>>;
};

function buildValidationErrorResponse(error: ZodError): NextResponse<ErrorResponse> {
  const flattened = z.flattenError(error);

  return NextResponse.json(
    {
      success: false,
      message: '表單資料驗證失敗',
      fieldErrors: flattened.fieldErrors as Partial<Record<keyof ContactFormValues, string[]>>,
    },
    { status: 400 },
  );
}

function parseFailRate(value: string | undefined): number {
  if (!value) return 0;

  const parsed = Number(value);

  if (Number.isNaN(parsed)) return 0;
  if (parsed < 0) return 0;
  if (parsed > 1) return 1;

  return parsed;
}

export async function POST(
  request: Request,
): Promise<NextResponse<SuccessResponse | ErrorResponse>> {
  try {
    const json = (await request.json()) as unknown;
    const data = contactFormSchema.parse(json);

    const emailEnabled = process.env.EMAIL_ENABLED === 'true';

    if (!emailEnabled) {
      await new Promise((resolve) => {
        setTimeout(resolve, 800);
      });

      const mockForceFail = process.env.MOCK_CONTACT_FORCE_FAIL === 'true';
      const mockFailRate = parseFailRate(process.env.MOCK_CONTACT_FAIL_RATE);
      const randomValue = Math.random();

      const isFail = mockForceFail || randomValue < mockFailRate;

      console.log('收到表單資料（mock mode）:', data);
      console.log('mock env:', {
        EMAIL_ENABLED: process.env.EMAIL_ENABLED,
        MOCK_CONTACT_FORCE_FAIL: process.env.MOCK_CONTACT_FORCE_FAIL,
        MOCK_CONTACT_FAIL_RATE: process.env.MOCK_CONTACT_FAIL_RATE,
      });
      console.log('mock result:', {
        mockForceFail,
        mockFailRate,
        randomValue,
        isFail,
      });

      if (isFail) {
        return NextResponse.json(
          {
            success: false,
            message: '測試模式：模擬送出失敗',
          },
          { status: 500 },
        );
      }

      return NextResponse.json({
        success: true,
        message: '已成功送出！目前為測試模式，尚未真的寄信。',
      });
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo = process.env.CONTACT_EMAIL_TO ?? 'hhhe3828@gmail.com';

    if (!emailUser || !emailPass) {
      return NextResponse.json(
        {
          success: false,
          message: '寄信設定不完整，請檢查環境變數。',
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    await transporter.sendMail({
      from: emailUser,
      to: emailTo,
      subject: `新聯絡表單｜${data.fullName}`,
      text: [
        `姓名：${data.fullName}`,
        `公司名稱：${data.companyName || '未填寫'}`,
        `電話：${data.phone || '未填寫'}`,
        `電子郵件：${data.email || '未填寫'}`,
        '',
        '留言內容：',
        data.message,
      ].join('\n'),
    });

    return NextResponse.json({
      success: true,
      message: '已成功送出！',
    });
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      return buildValidationErrorResponse(error);
    }

    console.error('contact api error:', error);

    return NextResponse.json(
      {
        success: false,
        message: '伺服器發生錯誤，請稍後再試',
      },
      { status: 500 },
    );
  }
}
