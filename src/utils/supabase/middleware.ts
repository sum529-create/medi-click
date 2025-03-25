import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { PATH } from '@/constants/routerPath';

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

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
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    supabaseResponse.headers.set('x-user-info', JSON.stringify(user));
  }

  //로그인되지 않은 사용자를 로그인 페이지로 보내는 로직
  if (
    !user &&
    !request.nextUrl.pathname.startsWith(PATH.LOGIN) &&
    !request.nextUrl.pathname.startsWith(PATH.SIGNUP) &&
    !request.nextUrl.pathname.startsWith(PATH.HOME)
  ) {
    const url = request.nextUrl.clone();
    url.pathname = PATH.LOGIN;
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
