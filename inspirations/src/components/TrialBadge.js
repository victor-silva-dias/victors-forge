import React from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { useEntitlement } from '../context/EntitlementContext';
import './Tooltip.css'; // Assuming Tooltip.css is available for the tooltip style

const TrialBadge = () => {
  const { entitlement } = useEntitlement();
  const navigate = useNavigate();

  if (!entitlement || !entitlement.em_trial || entitlement.dias_restantes <= 0) {
    return null;
  }

  const days = entitlement.dias_restantes;
  const daysText = days === 1 ? 'dia restante' : 'dias restantes';

  // Dynamic styling based on urgency
  const isUrgent = days <= 3;
  const badgeClasses = clsx(
    'text-xs font-semibold px-2.5 py-0.5 rounded-full cursor-pointer transition-colors',
    {
      'bg-green-100 text-green-800 hover:bg-green-200': !isUrgent,
      'bg-amber-100 text-amber-800 hover:bg-amber-200': isUrgent,
    }
  );

  const handleBadgeClick = () => {
    navigate('/planos');
  };

  return (
    <div className="tooltip" onClick={handleBadgeClick}>
      <span className={badgeClasses}>
        Trial: {days} {daysText}
      </span>
      <span className="tooltiptext">Seu período de teste está acabando. Clique para ver os planos e garantir seu acesso!</span>
    </div>
  );
};

export default TrialBadge;
