import { NextResponse } from "next/server";
export function middleware(request) {
  const cookies = request.cookies;

  // Get the accessToken value
  const accessToken = cookies.get("mm_accessToken")?.value;
  console.log("Access Token:", accessToken);

  if (!accessToken) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
}

export const config = {
  matcher: [
    "/story-upload"
  ],
};