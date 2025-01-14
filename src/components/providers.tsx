import { ThemeProvider } from "./theme-provider";

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <main>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </main>
  );
}
