import { auth, currentUser, clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { isAdmin, SUPER_ADMIN_EMAIL } from '../../../lib/auth';

export async function GET() {
  const user = await currentUser();
  if (!user || !isAdmin(user)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const client = await clerkClient();
  const { data: users } = await client.users.getUserList({
    limit: 500,
    orderBy: '-created_at',
  });

  const userList = users.map((u) => ({
    id: u.id,
    email: u.emailAddresses?.[0]?.emailAddress || '',
    firstName: u.firstName,
    lastName: u.lastName,
    imageUrl: u.imageUrl,
    createdAt: u.createdAt,
    role: u.publicMetadata?.role || 'pending',
    isSuperAdmin: u.emailAddresses?.some((e) => e.emailAddress === SUPER_ADMIN_EMAIL),
  }));

  return NextResponse.json({ users: userList });
}
