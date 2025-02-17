import { RFPOpportunity, SearchParams } from '@/types/rfp';

interface SAMApiResponse {
  opportunityList: SAMOpportunity[];
}

interface SAMDetailResponse {
  opportunity: SAMOpportunity;
}

interface SAMOpportunity {
  noticeId: string;
  title: string;
  department: string;
  postedDate: string;
  responseDate: string;
  description: string;
  naicsCode?: string;
  setAsideType?: string;
  status: string;
  resources?: SAMResource[];
}

interface SAMResource {
  title: string;
  url: string;
  type: string;
}

export class SAMGovAPI {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = process.env.SAM_GOV_API_KEY || '';
    this.baseUrl = 'https://api.sam.gov/opportunities/v2';
  }

  private async fetchWithAuth<T>(endpoint: string, params: Record<string, string | undefined>): Promise<T> {
    const url = new URL(endpoint, this.baseUrl);
    Object.entries(params).forEach(([key, value]) => {
      if (value) url.searchParams.append(key, value);
    });

    const response = await fetch(url.toString(), {
      headers: {
        'x-api-key': this.apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`SAM.gov API error: ${response.statusText}`);
    }

    return response.json();
  }

  async searchOpportunities(params: SearchParams): Promise<RFPOpportunity[]> {
    try {
      const searchParams = {
        keywords: params.keyword,
        agency: params.agency,
        postedFrom: params.dateRange?.start,
        postedTo: params.dateRange?.end,
        naicsCode: params.naicsCode,
        setAside: params.setAside,
      };

      const data = await this.fetchWithAuth<SAMApiResponse>('/search', searchParams);
      
      return data.opportunityList.map((opp) => ({
        id: opp.noticeId,
        title: opp.title,
        agency: opp.department,
        postDate: opp.postedDate,
        responseDate: opp.responseDate,
        description: opp.description,
        naicsCode: opp.naicsCode,
        setAside: opp.setAsideType,
        source: 'SAM.gov' as const,
        status: opp.status.toLowerCase() as 'active' | 'archived' | 'draft',
        documents: opp.resources?.map((doc) => ({
          title: doc.title,
          url: doc.url,
          type: doc.type,
        })),
      }));
    } catch (error) {
      console.error('Error searching SAM.gov opportunities:', error);
      throw error;
    }
  }

  async getOpportunityDetail(id: string): Promise<RFPOpportunity> {
    try {
      const data = await this.fetchWithAuth<SAMDetailResponse>(`/opportunity/${id}`, {});
      const opp = data.opportunity;
      
      return {
        id: opp.noticeId,
        title: opp.title,
        agency: opp.department,
        postDate: opp.postedDate,
        responseDate: opp.responseDate,
        description: opp.description,
        naicsCode: opp.naicsCode,
        setAside: opp.setAsideType,
        source: 'SAM.gov' as const,
        status: opp.status.toLowerCase() as 'active' | 'archived' | 'draft',
        documents: opp.resources?.map((doc) => ({
          title: doc.title,
          url: doc.url,
          type: doc.type,
        })),
      };
    } catch (error) {
      console.error('Error fetching SAM.gov opportunity detail:', error);
      throw error;
    }
  }
}
