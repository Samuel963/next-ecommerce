import Head from "next/head";
import { useRouter } from "next/router";

import Header from "@/components/header";
import HeaderAdmin from "@/components/header-admin";

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
};

const MainLayout = ({
  children,
  title = "Rayssa corte a laser",
}: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
      <Head>
        <title>{title}</title>
      </Head>
      {pathname.includes("/admin") ? <HeaderAdmin /> : <Header />}

      <main className={pathname !== "/" ? "main-page" : ""}>{children}</main>
    </div>
  );
};

export default MainLayout;
