export interface ProviderProps {
  primaryColor?: string;
  secondaryColor?: string;
  errorColor?: string;
  warningColor?: string;
  successColor?: string;
  neutralColor?: string;
  textColor?: string;
  customTheme?: any;
  fontFamily?: string;
  children: React.ReactNode;
}
