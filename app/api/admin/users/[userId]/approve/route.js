import { currentUser, clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { isAdmin } from '../../../../../lib/auth';

export async function POST(request, { params }) {
  const { userId } = await params;

  const user = await currentUser();
  if (!user || !isAdmin(user)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const client = await clerkClient();
  await client.users.updateUserMetadata(userId, {
    publicMetadata: { role: 'approved' },
  });

  return NextResponse.json({ success: true });
}
