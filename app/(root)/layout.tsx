import { ReduxProvider } from "@/providers/ReduxProvider";
import Link from "next/link";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ReduxProvider>
            <div className="flex items-center justify-center gap-x-3 mt-2 text-xl">
                <Link href='/' className="hover:text-orange-400">
                    Home
                </Link>
                <Link href='/cart' className="hover:text-orange-400">
                    Cart
                </Link>
            </div>
            {children}
        </ReduxProvider>
    );
}
