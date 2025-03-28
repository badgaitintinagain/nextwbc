import { handleAuth } from '@/utils/auth';

export async function POST(request: Request) {
  return handleAuth(request);
}