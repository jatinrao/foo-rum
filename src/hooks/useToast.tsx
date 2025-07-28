import { useEffect, useState } from 'react';

export default function useToast(timeout = 2500) {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const showToast = (msg: string) => {
    setMessage(msg);
    setVisible(true);
  };

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setVisible(false), timeout);
    return () => clearTimeout(timer);
  }, [visible, timeout]);

  const Toast = () =>
    visible ? (
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded shadow z-50">
        {message}
      </div>
    ) : null;

  return { showToast, Toast };
}