// Define the param list for your navigation stack
export type RootStackParamList = {
  Home: undefined;
  Dashboard: undefined;
};

// Declare global types for React Navigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
