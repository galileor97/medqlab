import React from 'react';
import { twMerge } from 'tailwind-merge';

export function Table({ className, ...props }: React.ComponentProps<'table'>) {
  return (
    <table
      className={`w-full border-collapse overflow-hidden ${className}`}
      {...props}
    ></table>
  );
}

export function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      className={twMerge(
        'h-14 px-4 text-left font-inter text-base font-bold text-[#19212E]',
        className ? className : ''
      )}
      {...props}
    ></th>
  );
}

export function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      {...props}
      className={twMerge(
        'h-10 p-4 font-inter text-base text-[#19212E]',
        className
      )}
    ></td>
  );
}

export function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return <tr className={twMerge('group', 'px-0 py-0', className)} {...props} />;
}

export function TableRowHeader({
  className,
  ...props
}: React.ComponentProps<'tr'>) {
  return (
    <tr
      className={twMerge(
        'group',
        'bg-new-stroke-default px-0 py-0',
        '[&>th:first-child]:rounded-tl-lg [&>th:last-child]:rounded-tr-lg',
        className
      )}
      {...props}
    />
  );
}