import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Company from "@/components/company";

export default function CompanyPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-6 pt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>
      </div>

      <Company />
    </main>
  );
}