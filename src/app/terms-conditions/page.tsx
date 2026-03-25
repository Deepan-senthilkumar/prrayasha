import PolicyPage from "@/components/PolicyPage";
import { policies } from "@/lib/storefront-data";

export default function TermsConditionsPage() {
  return <PolicyPage policy={policies["terms-conditions"]} />;
}
