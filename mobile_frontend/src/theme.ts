export type ThemeMode = 'light' | 'dark';

export interface Theme {
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    success: string;
    error: string;
    background: string;
    surface: string;
    text: string;
    mutedText: string;
    border: string;
    shadow: string;
    overlay: string;
    inputBg: string;
    inputBorder: string;
    placeholder: string;
    cardGradientStart: string;
    cardGradientEnd: string;
  };
  radius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    pill: number;
  };
  spacing: (n: number) => number;
  shadowStyle: {
    shadowColor: string;
    shadowOffset: { width: number; height: number };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  };
  transitionMs: number;
}

const base = {
  name: 'Ocean Professional',
  description: 'Blue & amber accents',
  radius: {
    sm: 6,
    md: 10,
    lg: 14,
    xl: 18,
    pill: 999,
  },
  spacing: (n: number) => n * 8,
  transitionMs: 180,
  shadowStyle: {
    shadowColor: '#111827',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
};

export const lightTheme: Theme = {
  ...base,
  colors: {
    primary: '#2563EB',
    secondary: '#F59E0B',
    success: '#F59E0B',
    error: '#EF4444',
    background: '#f9fafb',
    surface: '#ffffff',
    text: '#111827',
    mutedText: '#6B7280',
    border: '#E5E7EB',
    shadow: '#111827',
    overlay: 'rgba(0,0,0,0.06)',
    inputBg: '#ffffff',
    inputBorder: '#E5E7EB',
    placeholder: '#9CA3AF',
    cardGradientStart: 'rgba(37, 99, 235, 0.06)',
    cardGradientEnd: 'rgba(249, 250, 251, 1)',
  },
};

export const darkTheme: Theme = {
  ...base,
  colors: {
    primary: '#3B82F6',
    secondary: '#F59E0B',
    success: '#22C55E',
    error: '#F87171',
    background: '#0B1220',
    surface: '#111827',
    text: '#F9FAFB',
    mutedText: '#D1D5DB',
    border: '#1F2937',
    shadow: '#000000',
    overlay: 'rgba(255,255,255,0.06)',
    inputBg: '#0F172A',
    inputBorder: '#1F2937',
    placeholder: '#9CA3AF',
    cardGradientStart: 'rgba(59, 130, 246, 0.08)',
    cardGradientEnd: 'rgba(17, 24, 39, 1)',
  },
};
