export type ProcessStep = {
  subject: string;
  content?: string;
};

export type ProcessSteps = ReadonlyArray<ProcessStep>;

type ProcessSection = {
  category: string;
  title: string;
  description: string;
  steps: ProcessSteps;
};

export const processSection: ProcessSection = {
  category: '顧問流程',
  title: '把複雜的事拆清楚，\n才有辦法真的做成',
  description: '從訪談、盤點到導入與優化，每一步都圍繞實際問題展開，清楚每個環節，才能確保結果。',
  steps: [
    {
      subject: '需求訪談',
      content: '深入了解企業現況與痛點，而不是只聽表面需求。',
    },
    {
      subject: '流程盤點',
      content: '釐清現有流程，找出效率瓶頸與問題根源。',
    },
    {
      subject: '解決方案設計',
      content: '提出可行且可落地的解決方案，而不是理想化規劃。',
    },
    {
      subject: '系統開發與導入',
      content: '實作系統並逐步導入，確保不影響既有運作。',
    },
    {
      subject: '持續優化',
      content: '根據實際使用情況持續調整，讓系統越用越順。',
    },
  ],
}