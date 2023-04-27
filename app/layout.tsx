import React, { ReactNode } from "react";
import styles from './page.module.css';

type ChildrenType = { 
  children: ReactNode
}

export default function RootLayout({ children }: ChildrenType){
  return (
    <html lang="en">
      <body className={styles.body}>
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