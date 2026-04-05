export type CaseItem = {
  subject: string;
  problem: string;
  solution: string;
  results: ReadonlyArray<string>;
  summary?: string;
};

export type Cases = ReadonlyArray<CaseItem>;

type CasesSection = {
  category: string;
  title: string;
  description: string;
  cases: Cases;
};

export const casesSection: CasesSection = {
  category: '成功案例',
  title: '每一次優化，\n都是為了解決真實存在的問題',
  description: '每個專案的核心，不是做了什麼，而是改善了什麼。不只是做出系統，而是從問題、作法到成果都能說清楚，讓改善真正發生。',
  cases: [
    {
      subject: '製造業流程優化',
      problem:
        '跨部門流程複雜，資訊傳遞仰賴人工與口頭溝通，容易延誤與出錯。',
      solution:
        '重新盤點流程節點，整合表單與審核邏輯，導入系統化流程控管。',
      results: [
        '作業時間明顯縮短',
        '減少重複溝通與資料填寫',
        '流程狀態可即時掌握',
      ],
      summary: '讓流程不再靠人記，而是系統自動推進。',
    },
    {
      subject: '財務報表流程重構',
      problem:
        '報表資料分散於多個來源，需人工整理與轉換，耗時且容易錯誤。',
      solution:
        '整合資料來源，重構報表產出流程，建立一致的資料邏輯。',
      results: [
        '報表產出時間大幅縮短',
        '降低人工處理錯誤',
        '提升資料一致性與可信度',
      ],
      summary: '從「整理資料」變成「使用資料」。',
    },
    {
      subject: '內部作業數位化',
      problem:
        '紙本與零散工具並存，流程難以追蹤，資料也不透明。',
      solution:
        '逐步將流程數位化，建立可追蹤、可查詢的系統機制。',
      results: [
        '流程狀態清楚可視',
        '減少紙本與人為遺漏',
        '管理成本降低',
      ],
      summary: '不再靠經驗找資料，而是系統直接給答案。',
    },
  ],
};