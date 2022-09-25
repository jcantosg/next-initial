import Link from "next/link";
import React from "react";
import { MainLayout } from "../../components/layouts/MainLayout";

const PricingPage = () => {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h1 className={"title"}>
        Ir a <Link href="/pricing">Pricing</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/pricing.jsx</code>
      </p>
    </MainLayout>
  );
};

export default PricingPage;
