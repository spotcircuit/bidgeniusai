import { NextResponse } from 'next/server';
import { SAMGovAPI } from '@/lib/api/sources/sam';
import { SearchParams } from '@/types/rfp';

export async function POST(request: Request) {
  try {
    const searchParams: SearchParams = await request.json();
    const samApi = new SAMGovAPI();
    
    // Search opportunities from SAM.gov
    const opportunities = await samApi.searchOpportunities(searchParams);

    // TODO: Add additional data sources (FPDS, USASpending, Data.gov)
    // Combine and deduplicate results

    return NextResponse.json({
      success: true,
      data: opportunities,
    });

  } catch (error) {
    console.error('Error searching RFP opportunities:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error searching RFP opportunities' 
      },
      { status: 500 }
    );
  }
}
