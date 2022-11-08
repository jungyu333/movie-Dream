export interface ILayoutProps {
  isNavSearch: boolean;
  isMain: boolean;
  children: React.ReactNode;
  window?: () => Window;
}
