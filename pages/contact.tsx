import Link from "next/link";
import styles from "../components/layouts/MainLayout.module.css";
import { MainLayout } from "../components/layouts/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h1 className={styles.title}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/contact.jsx</code>
      </p>
    </MainLayout>
  );
}
