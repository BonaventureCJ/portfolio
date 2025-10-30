// src/components/Icon/icons.js
import { ReactComponent as UserTie } from 'assets/icons-decorative/user-tie.svg';
import { ReactComponent as Skillshare } from 'assets/icons-decorative/skillshare.svg';

// Export an object mapping *string keys* to the imported components
export const icons = {
  UserTie: UserTie,         // Map the string 'UserTie' to the component
  Skillshare: Skillshare,   // Map the string 'Skillshare' to the component
  // ... other icons
};

// A shorter, equivalent way using object property shorthand:
// export const icons = {
//   UserTie,
//   Skillshare,
// };
