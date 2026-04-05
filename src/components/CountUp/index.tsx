'use client';

import { animate, useInView, useMotionValue } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

type CountDirection = 'up' | 'down';

type CountUpProps = {
  readonly to: number;
  readonly from?: number;
  readonly direction?: CountDirection;
  readonly delay?: number;
  readonly duration?: number;
  readonly className?: string;
  readonly startWhen?: boolean;
  readonly separator?: string;
  readonly suffix?: string;
  readonly onStart?: () => void;
  readonly onEnd?: () => void;
};

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  suffix = '+',
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);
  const isInView = useInView(ref, { once: true, margin: '0px' });

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();

    if (!str.includes('.')) {
      return 0;
    }

    const decimals = str.split('.')[1];
    if (!decimals) {
      return 0;
    }

    return Number.parseInt(decimals, 10) !== 0 ? decimals.length : 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest: number): string => {
      const hasDecimals = maxDecimals > 0;

      const options: Intl.NumberFormatOptions = {
        useGrouping: Boolean(separator),
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0,
      };

      const formattedNumber = new Intl.NumberFormat('en-US', options).format(latest);

      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator],
  );

  useEffect(() => {
    const initialValue = direction === 'down' ? to : from;

    if (ref.current) {
      ref.current.textContent = `${formatValue(initialValue)}${suffix}`;
    }
  }, [direction, formatValue, from, suffix, to]);

  useEffect(() => {
    const unsubscribe = motionValue.on('change', (latest: number) => {
      if (ref.current) {
        ref.current.textContent = `${formatValue(latest)}${suffix}`;
      }
    });

    return () => unsubscribe();
  }, [formatValue, motionValue, suffix]);

  useEffect(() => {
    if (!isInView || !startWhen) {
      return undefined;
    }

    onStart?.();

    const startValue = direction === 'down' ? to : from;
    const endValue = direction === 'down' ? from : to;

    motionValue.set(startValue);

    let controls: ReturnType<typeof animate> | null = null;

    const timeoutId = window.setTimeout(() => {
      controls = animate(motionValue, endValue, {
        duration,
        ease: 'linear',
        onComplete: () => {
          onEnd?.();
        },
      });
    }, delay * 1000);

    return () => {
      window.clearTimeout(timeoutId);
      controls?.stop();
    };
  }, [delay, direction, duration, from, isInView, motionValue, onEnd, onStart, startWhen, to]);

  return <span className={className} ref={ref} />;
}
