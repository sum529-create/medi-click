import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { PATH } from '@/constants/routerPath';

export async function updateSession(request: NextRequest) {
  const supabaseResponse = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // 사용자의 쿠키에서 로그인 세션을 가져옴
        getAll() {
          return request.cookies.getAll();
        },

        //새로운 세션 정보를 쿠키에 저장 (로그인 상태 유지)
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options);
          });
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const currentPath = request.nextUrl.pathname;

  //로그인되지 않은 사용자를 로그인 페이지로 보내는 로직
  const isProtectedPage = [PATH.MYPAGE, PATH.RESERVE].some((path) =>
    currentPath.startsWith(path),
  );
  if (!user && isProtectedPage) {
    return NextResponse.redirect(new URL(PATH.LOGIN, request.url));
  }

  //로그인한 사용자가 로그인 관련 페이지에 접근할 경우 → 홈페이지로 리디렉트
  const isAuthPage = [PATH.LOGIN, PATH.SIGNUP].some((path) =>
    currentPath.startsWith(path),
  );
  if (user && isAuthPage) {
    return NextResponse.redirect(new URL(PATH.HOME, request.url));
  }

  return supabaseResponse;
}
