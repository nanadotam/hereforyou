'use client';

import { create } from 'zustand';

const useChangelogStore = create((set) => ({
  isOpen: false,
  openChangelog: () => set({ isOpen: true }),
  closeChangelog: () => set({ isOpen: false }),
}));

export default useChangelogStore; 