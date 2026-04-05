export type NavItem = {
  label: string;
  href: string;
  id: string;
};

export const navItems = [
  { label: '服務項目', href: '#services', id: 'services' },
  { label: '顧問流程', href: '#process', id: 'process' },
  { label: '成功案例', href: '#cases', id: 'cases' },
  { label: '聯絡我們', href: '#contact', id: 'contact' },
] as const satisfies readonly NavItem[];