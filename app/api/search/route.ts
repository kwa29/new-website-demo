import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Missing search query' }, { status: 400 });
  }

  try {
    // Implement actual search logic here
    // This is a mock implementation
    const results = [
      { id: 1, title: `Search result for "${query}" 1`, description: 'Description 1' },
      { id: 2, title: `Search result for "${query}" 2`, description: 'Description 2' },
      { id: 3, title: `Search result for "${query}" 3`, description: 'Description 3' },
    ];
    return NextResponse.json({ results });
  } catch (error) {
    return NextResponse.json({ error: 'Search failed' }, { status: 500 });
  }
}