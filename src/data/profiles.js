//import GitHubProfileIcon from 'components/NavigationIcons/GitHubProfileIcon';
//import LinkedInIcon from 'components/NavigationIcons/LinkedInIcon';
//import TwitterIcon from 'components/NavigationIcons/TwitterIcon';
import { ReactComponent as GitHubProfileIcon } from 'assets/icons/github.svg';


const profiles = [
  {
    id: 'github',
    Icon: GitHubProfileIcon,
    url: 'https://github.com/BonaventureCJ',
    label: 'GitHub Profile',
    ariaLabel: "Visit BonaventureCJ's GitHub profile",
    hoverText: 'Bonaventure Ugwu on GitHub',
  },
  //Data not updated with correct info yet
/*   {
    id: 'linkedin',
    Icon: LinkedInIcon,
    url: 'https://linkedin.com/in/yourprofile',
    label: 'LinkedIn Profile',
    ariaLabel: "Visit my LinkedIn profile",
    hoverText: 'Connect with me on LinkedIn',
  },
  {
    id: 'twitter',
    Icon: TwitterIcon,
    url: 'https://twitter.com/yourhandle',
    label: 'Twitter Profile',
    ariaLabel: "Visit my Twitter profile",
    hoverText: 'Follow me on Twitter',
  }, */
];

export default profiles;
