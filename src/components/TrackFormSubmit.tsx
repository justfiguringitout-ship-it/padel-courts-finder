'use client';

import { useEffect } from 'react';
import { trackListYourCourtSubmit } from '@/lib/analytics';

export function TrackFormSubmit() {
  useEffect(() => {
    trackListYourCourtSubmit();
  }, []);
  return null;
}
