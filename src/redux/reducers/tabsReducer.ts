import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tab } from "../../models/Tab";

export interface TabsState {
  currentTabId: string | undefined;
  tabs: Tab[];
}

const initialState: TabsState = {
  currentTabId: undefined,
  tabs: [],
};

export const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    addTab: (state, action: PayloadAction<Tab>) => {
      state.tabs = [...state.tabs, action.payload];
      state.currentTabId = action.payload.id;
    },
    setCurrentTabId: (state, action: PayloadAction<string>) => {
      state.currentTabId = action.payload;
    },
    removeTabWithId: (state, action: PayloadAction<string>) => {
      const newTabs = state.tabs.filter((tab) => tab.id !== action.payload);
      state.tabs = newTabs;

      if (state.currentTabId === action.payload) {
        const newCurrentTabKey =
          newTabs.length > 0 ? newTabs[newTabs.length - 1].id : undefined;

        state.currentTabId = newCurrentTabKey;
      }
    },
  },
});

export const { addTab, setCurrentTabId, removeTabWithId } = tabsSlice.actions;

export default tabsSlice.reducer;
