import { BondContent } from "@/components/Bond";
import Layout from "@/components/Layout";
import contents from "@/contents";
import { BondProps, getListedTokenAddresses } from "@/core/bond";
import { getActiveLoanKeys } from "@/core/utils";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const listedTokenAddresses = await getListedTokenAddresses();
  const activeTokenAddresses = await getActiveLoanKeys();
  return {
    props: {
      listedTokenAddresses,
      activeTokenAddresses,
      baseUrl: "/finance",
    },
  };
};

const FinanceBorrow: NextPage<BondProps> = (props) => (
  <Layout
    title={contents.finance.borrow.title}
    description={contents.finance.borrow.description}
    navbarLogo={contents.finance.navbar.logo}
    navbarItems={contents.finance.navbar.items}
  >
    <BondContent {...props} />
  </Layout>
);

export default FinanceBorrow;