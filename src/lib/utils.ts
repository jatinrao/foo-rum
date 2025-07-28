export const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleString('en-IN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

export function formatTimeAgo(dateStr: string): string {
  const now = new Date();
  const past = new Date(dateStr);
  const diff = Math.floor((now.getTime() - past.getTime()) / 1000); // in seconds

  if (diff < 60) return 'just now';
  if (diff < 3600) {
    const mins = Math.floor(diff / 60);
    return `${mins} min${mins > 1 ? 's' : ''} ago`;
  }
  if (diff < 86400) {
    const hours = Math.floor(diff / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
  if (diff < 2592000) {
    const days = Math.floor(diff / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }

  return past.toLocaleDateString(); // fallback -> full date
}

export function getRandomEmoji(): string {
  const emojis = [
    '😀', '😂', '🥳', '😎', '🤔',
    '🎉', '🚀', '🔥', '❤️', '✨',
    '💡', '📦', '🌈', '🧠', '📣',
    '🤖', '📌', '🧵', '🧩', '📺'
  ];

  const index = Math.floor(Math.random() * emojis.length);
  return emojis[index];
}