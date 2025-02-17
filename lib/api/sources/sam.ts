import { RFPOpportunity, SearchParams } from '@/types/rfp';

export class SAMGovAPI {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = process.env.SAM_GOV_API_KEY || '';
    this.baseUrl = 'https://api.sam.gov/opportunities/v2';
  }

  private async fetchWithAuth(endpoint: string, params: Record<string, any>) {
    const url = new URL(endpoint, this.baseUrl);
    Object.entries(params).forEach(([key, value]) => {
      if (value) url.searchParams.append(key, value.toString());
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

      const data = await this.fetchWithAuth('/search', searchParams);
      
      return data.opportunityList.map((opp: any) => ({
        id: opp.noticeId,
        title: opp.title,
        agency: opp.department,
        postDate: opp.postedDate,
        responseDate: opp.responseDate,
        description: opp.description,
        naicsCode: opp.naicsCode,
        setAside: opp.setAsideType,
        source: 'SAM.gov',
        status: opp.status.toLowerCase(),
        documents: opp.resources?.map((doc: any) => ({
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
      const data = await this.fetchWithAuth(`/opportunity/${id}`, {});
      
      return {
        id: data.noticeId,
        title: data.title,
        agency: data.department,
        postDate: data.postedDate,
        responseDate: data.responseDate,
        description: data.description,
        naicsCode: data.naicsCode,
        setAside: data.setAsideType,
        source: 'SAM.gov',
        status: data.status.toLowerCase(),
        documents: data.resources?.map((doc: any) => ({
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
