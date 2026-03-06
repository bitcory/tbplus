export const SUPER_ADMIN_EMAIL = 'ggamsire@gmail.com';

export function isAdmin(user) {
  if (!user) return false;
  const email = user.primaryEmailAddress?.emailAddress || user.email;
  return email === SUPER_ADMIN_EMAIL;
}

export function isApproved(user) {
  if (!user) return false;
  if (isAdmin(user)) return true;
  return user.publicMetadata?.role === 'approved';
}

export function getUserRole(user) {
  if (!user) return null;
  if (isAdmin(user)) return 'admin';
  return user.publicMetadata?.role || 'pending';
}
