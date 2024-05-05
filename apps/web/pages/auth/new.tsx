export const getServerSideProps = async () => {
  const props = {
    nextPublicWebappUrl: process.env.NEXT_PUBLIC_WEBAPP_URL,
  };
  return { props };
};

export default function NewUserPage({ nextPublicWebappUrl }: { nextPublicWebappUrl: string }) {
  if (typeof window !== "undefined") {
    window.location.assign(nextPublicWebappUrl || "https://app.cal.com");
  }
  return null;
}
