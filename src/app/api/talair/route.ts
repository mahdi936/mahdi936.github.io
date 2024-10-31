// app/api/get-tala-price/route.js

import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 1;
export async function GET() {
  try {
    const response = await fetch('https://api.talasea.ir/api/market/getGoldPrice', {
      method: 'GET',
      cache:"no-cache"
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
