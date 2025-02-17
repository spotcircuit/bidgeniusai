export interface RFPOpportunity {
  id: string;
  title: string;
  agency: string;
  postDate: string;
  responseDate: string;
  description: string;
  naicsCode?: string;
  setAside?: string;
  source: 'SAM.gov' | 'FPDS' | 'USASpending' | 'Data.gov';
  status: 'active' | 'archived' | 'draft';
  documents?: {
    title: string;
    url: string;
    type: string;
  }[];
}

export interface SearchParams {
  keyword?: string;
  agency?: string;
  dateRange?: {
    start: string;
    end: string;
  };
  naicsCode?: string;
  setAside?: string;
  status?: 'active' | 'archived' | 'draft';
}

export interface DataSourceConfig {
  name: string;
  enabled: boolean;
  apiKey?: string;
  baseUrl: string;
  endpoints: {
    search: string;
    detail: string;
    download?: string;
  };
}
