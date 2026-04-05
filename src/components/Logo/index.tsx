type LogoProps = {
  className?: string;
  withText?: boolean;
  size?: 'small' | 'medium' | 'large';
};

export default function Logo({ className, withText = true, size = 'medium' }: LogoProps) {
  return (
    <div className={`flex w-fit items-center gap-3 ${className ?? ''}`}>
      <svg
        width={size === 'small' ? '32' : size === 'large' ? '80' : '44'}
        height={size === 'small' ? '32' : size === 'large' ? '80' : '44'}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="若水科技管理顧問有限公司 Logo"
        role="img"
        className="shrink-0"
      >
        <circle cx="22" cy="22" r="20" fill="#EAF8F6" />
        <path
          d="M22 9.5C18.5 14.2 14.5 18.8 14.5 24C14.5 28.7 17.9 32.5 22 32.5C26.1 32.5 29.5 28.7 29.5 24C29.5 18.8 25.5 14.2 22 9.5Z"
          fill="#81D8D0"
        />
        <path
          d="M11 28C13.8 31.2 17.7 33 22 33C26.3 33 30.2 31.2 33 28"
          stroke="#5FC9C0"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M13.5 13.8C15.9 11.7 18.9 10.5 22 10.5C25.1 10.5 28.1 11.7 30.5 13.8"
          stroke="#5FC9C0"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>

      {withText ? (
        <div className="leading-tight">
          <p className="text-ink text-base font-semibold tracking-[0.08em]">若水科技</p>
          <p className="text-sub-ink text-xs">管理顧問有限公司</p>
        </div>
      ) : null}
    </div>
  );
}
