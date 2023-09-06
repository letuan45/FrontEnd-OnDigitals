export const createHeaderSlice = (set) => ({
  isDark: false,
  headerBtnIsShown: true,
  expanseMenuIsOpen: false,
  setToDark: () => set({ isDark: true }),
  setToLight: () => set({ isDark: false }),
  hideHeaderBtn: () => set({ headerBtnIsShown: false }),
  showHeaderBtn: () => set({ headerBtnIsShown: true }),
  setExpanseMenuIsOpen: (expanseState = false) =>
    set({ expanseMenuIsOpen: expanseState }),
});
