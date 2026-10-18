export type Destination = {
  id: string;
  label: string;
  href: string;
  emoji: string;
};

export const destinations: readonly Destination[] = [
  { id: 'personal', label: 'Matthew Wen', href: 'https://www.matthewwen.com', emoji: '👋' },
  { id: 'metrics', label: 'Metrics', href: 'https://metrics.mwenclubhouse.com', emoji: '📊' },
  { id: 'excalidraw', label: 'Excalidraw', href: 'https://excalidraw.mwenclubhouse.com', emoji: '✏️' },
  { id: 'docs', label: 'Docs', href: 'https://docs.mwenclubhouse.com', emoji: '📚' },
];
