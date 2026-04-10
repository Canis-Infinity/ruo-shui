type BrandConcept = {
  readonly title: string;
  readonly description: string;
  readonly badge: string;
  readonly concepts: ReadonlyArray<string>;
};

export const brandConcept: BrandConcept = {
  title: '若水之道，順勢而為',
  description:
    '「上善若水」象徵靈活、包容與適應力。若水科技致力於以合適的技術與策略，協助企業在變動中找到最適合自己的解決方案。',
  badge: '上善若水',
  concepts: [
    '理解企業需求，重視實際流程與落地性',
    '技術與管理並重，兼顧系統效能與營運效率',
    '提供可擴充、可維護的解決方案，避免後續重做成本',
  ],
};

type Highlights = ReadonlyArray<{
  type: 'count' | 'text';
  label: string | number;
  description: string;
}>;

type HeroSection = {
  readonly title: string;
  readonly description: string;
  readonly badge: string;
  readonly highlights: Highlights;
};

export const heroSection: HeroSection = {
  title: `讓管理更清晰，\n讓數位轉型真正落地。`,
  description:
    '若水科技管理顧問有限公司，專注於客製化軟體開發與企業流程再造，協助企業透過數位化與流程優化，提升整體營運效率與競爭力。',
  badge: '客製化軟體開發 × 企業流程再造',
  highlights: [
    { type: 'count', label: 10, description: '流程優化經驗' },
    { type: 'text', label: '跨部門', description: '整合規劃能力' },
    { type: 'text', label: '可落地', description: '執行導向方案' },
  ],
};
