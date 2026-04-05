import Link from 'next/link';

export default function CTA() {
  return (
    <div className="mt-10 flex max-w-full flex-wrap items-center gap-4">
      <Link
        href="#contact"
        className="bg-ink inline-flex h-12 items-center rounded-full px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90"
      >
        立即預約諮詢
      </Link>

      <Link
        href="#services"
        className="border-line text-ink hover:border-brand hover:bg-brand-soft bg-background inline-flex h-12 items-center rounded-full border px-6 text-sm font-semibold transition hover:-translate-y-0.5"
      >
        查看服務內容
      </Link>
    </div>
  );
}
