import PolicyPage from "@/components/PolicyPage";
import { policies } from "@/lib/storefront-data";

export default function PrivacyPolicyPage() {
  return <PolicyPage policy={policies["privacy-policy"]} />;
}
