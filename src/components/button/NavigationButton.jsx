import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavigationButton({ to, label, className }) {
  const navigate = useNavigate();

  return (
    <button className={className} onClick={() => navigate(to)}>
      {label}
    </button>
  );
}
