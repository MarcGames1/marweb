import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(req: NextRequest, res:NextResponse) {


  try {
    // @ts-ignore
    const { slug } = req.body;
    // Revalidați pagina specifică
    revalidatePath('/blog', 'page')
    revalidatePath(`/blog/${slug}`,'page');
    revalidatePath('/blog/[item]/page','page');
    revalidatePath('/blog/[item]/page','layout');
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating', error: JSON.stringify(err) }, { status: 500 });
  }
}