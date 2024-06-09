import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export const revalidate = 3600
export async function POST(req: NextRequest, res:NextResponse) {
  const secret = req.headers.get("Authorization")?.replace('Bearer ', '');

  // Verificați secretul (opțional)
  if (secret !==   process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    // @ts-ignore
    const { slug } = req.body;
    // Revalidați pagina specifică
    revalidatePath('/blog', 'page')
    revalidatePath(`/blog/${slug}`,'page');
    revalidatePath('/blog/[item]/page','page');
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating', error: JSON.stringify(err) }, { status: 500 });
  }
}