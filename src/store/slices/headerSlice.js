export const createHeaderSlice = (set) => ({
  isDark: false,
  headerBtnIsShown: true,
  setToDark: () => set((state) => ({ ...state, isDark: true })),
  setToLight: () => set((state) => ({ ...state, isDark: false })),
  hideHeaderBtn: () => set((state) => ({ ...state, headerBtnIsShown: false })),
  showHeaderBtn: () => set((state) => ({ ...state, headerBtnIsShown: true })),
});
