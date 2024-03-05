import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <SignUp afterSignUpUrl="/new-user" redirectUrl="/new-user" />;
}