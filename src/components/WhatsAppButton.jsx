'use client';
import { useDispatch } from 'react-redux';
import { triggerWhatsApp } from '@/store/whatsappSlice';
import { Phone } from 'lucide-react';

export default function WhatsAppButton({
  phoneNumber = "918003474733",
  message = "Hi! I'm interested in your services.",
  label = "Call on WhatsApp",
  onClick = null,
  className = "",
  children
}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(triggerWhatsApp({ phoneNumber, message }));
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  const appliedClassName = className.trim()
    ? className
    : "";

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      className={appliedClassName}
    >
      {children ? (
        children
      ) : (
        <span className="flex items-center justify-center">
          <Phone className="w-5 h-5 mr-2" />
          {label}
        </span>
      )}
    </button>
  );
}
