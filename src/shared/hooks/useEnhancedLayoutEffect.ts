import * as React from 'react';
const canUseDOM = typeof window !== 'undefined';
export const useEnhancedLayoutEffect = canUseDOM ? React.useLayoutEffect : React.useEffect;
