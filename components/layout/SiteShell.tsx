import { ReactNode } from "react";

type SiteShellProps = {
    children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
    return (
        <main className="bg-[#d9d2ca] p-4 md:p-6">
            <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[36px]">
                {children}
            </div>
        </main>
    );
}