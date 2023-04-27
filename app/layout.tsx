import React, { ReactNode } from "react";
import "./global.css";

type ChildrenType = { 
  children: ReactNode
}

export default function RootLayout({ children }: ChildrenType){
  return (
    <html lang="en">
      <body>
        <aside>
          Hola
        </aside>
        <section>
          {children}
        </section>
      </body>
    </html>
  );
}