import Link from "next/link";

interface ILink {
    children: React.ReactNode;
    path: string;
}

export default function LinkRouter({ children, path }: ILink) {
    return <Link href={path}>{children}</Link>;
}
