import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  if (url.pathname !== "/coming-soon") {
    url.pathname = "/coming-soon";
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}
