import {
  IconMail,
  IconLinkedin,
  IconInstagram,
  IconTwitter,
  IconGithub,
  IconExternal,
  IconYoutube,
  IconUpwork,
} from "@/components/Icons";

const Icon = ({ name }) => {
  switch (name) {
    case "mail":
      return <IconMail />;
    case "github":
      return <IconGithub />;
    case "linkedin":
      return <IconLinkedin />;
    case "instagram":
      return <IconInstagram />;
    case "twitter":
      return <IconTwitter />;
    case "youtube":
      return <IconYoutube />;
    case "upwork":
      return <IconUpwork />;
    default:
      return <IconExternal />;
  }
};

export default Icon;