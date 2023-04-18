import React, { ReactNode } from "react";

type ChildrenType = { 
  children: ReactNode
}

export default function RootLayout({ children }: ChildrenType){
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}