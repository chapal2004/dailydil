import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";


export default function Homelayout({
    children,
}: {children:React.ReactNode}
)
{
  return (
    <div className="flex flex-col max-h-screen">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>    
        <Footer />
    </div>
  )
}
