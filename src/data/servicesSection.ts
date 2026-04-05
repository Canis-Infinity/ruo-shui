import type { IconType } from 'react-icons';
import {
  RiFlowChart,
  RiRefreshLine,
  RiBuilding2Line,
  RiTaskLine,
} from 'react-icons/ri';

export type ServiceCard = {
  subject: string;
  content?: string;
  icon: IconType;
};

export type ServicesCards = ReadonlyArray<ServiceCard>;

type ServicesSection = {
  category: string;
  title: string;
  description: string;
  cards: ServicesCards;
};

export const servicesSection: ServicesSection = {
  category: '服務項目',
  title: '從需求梳理到系統落地，\n提供真正有用的解法',
  description: '技術只是手段，落地才是目的。我們不只是交付一套系統，而是協助企業把流程、資料與執行方式整理清楚。',
  cards: [
    {
      subject: '客製化軟體開發',
      content: '打造符合企業流程的專屬系統，避免為了配合工具而改變流程。',
      icon: RiFlowChart,
    },
    {
      subject: '企業流程再造（BPR）',
      content: '重新梳理流程，去除冗餘與低效環節，讓組織運作更順暢。',
      icon: RiRefreshLine,
    },
    {
      subject: '系統整合與資料串接',
      content: '整合內外部系統，打破資訊孤島，提升資料流動效率。',
      icon: RiBuilding2Line,
    },
    {
      subject: '顧問與技術導入',
      content: '協助企業選型、規劃與落地，不讓技術成為負擔。',
      icon: RiTaskLine,
    },
  ],
}