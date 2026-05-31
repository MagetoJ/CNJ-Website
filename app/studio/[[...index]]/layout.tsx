export const metadata = {
  title: 'CNJ Safaris Content Studio',
  description: 'Sanity Content Management System',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="studio-layout-wrapper" style={{ minHeight: '100vh', background: '#fff' }}>
      {children}
    </div>
  );
}